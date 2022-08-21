import React, { useState, useEffect } from 'react'

export default function ProgressBar() {
    const [progress, setProgress] = useState(25)
    const requestURL = "http://127.0.0.1:5000/process_url"

    useEffect(() => {
        console.log("hi")
        const controller = new AbortController();

        // make a request and initialize the progress state
        var jsonData = {"url":"https://www.youtube.com/watch?v=lGx7oeiIlLM"}
        const response = fetch(requestURL, 
        {  
            signal: controller.signal,
            method: 'POST', 
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json", 
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
            },   
            body: JSON.stringify(jsonData),
        })
        .then((response) => response.json()) 
        .then((duration) => {
            console.log(duration.duration)
            setProgress(duration.duration)
            updateProgress()
        });      
        return () => {
            // Unmounting, cancel the fetch if it's still happening
            controller.abort();
        }

        // console.log('world')
    },[])

    function updateProgress(e) {
        // this works! -- every second update the state
        const interval = setInterval(() => {
            const initial = progress
            setProgress(prev => {
                console.log(prev)
                if (prev - 1 < 0) {
                    setProgress(prev)
                    return clearInterval(interval);
                }
                // prev / progress * 100 
                return (prev -= 1)
            })
        }, 1000)
    }


    return (
    <div>
        <label for="file">Downloading progress: {progress}</label>
        <progress id="file" value={progress} max="100"> 32% </progress>
        <button onClick={updateProgress}>Update</button>
    </div>
    )
}
