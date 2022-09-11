import React from 'react'
import { useEffect } from 'react'

export default function Buffer(props) {
    // right when this view appears, call the flask endpoint
    useEffect(()=>{
        // call the flask endpoint here
        const endpoint = "http://127.0.0.1:5000/process_url"
        const controller = new AbortController();

        // make a request and initialize the progress state
        fetch(endpoint, 
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
            body: JSON.stringify({'url':props.ytURL}),
        })
        .then((response) => response.json()) 
        .then((response) => {

        });      
        return () => { controller.abort(); }
    },[])

  return (
    <div>Buffer</div>
  )
}
