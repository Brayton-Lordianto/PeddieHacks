import React, { useState } from 'react'
import PlaceholderChp from './PlaceholderChp.jsx';
import Buffer from './Buffer';
// import ListView from './listView';
// import Countdown from './Countdown';

export default function MainChapters() {

    // utility call request func\
    function callRequest(jsonData, requestURL, callback) {
        const controller = new AbortController();

        // make a request and initialize the progress state
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
        .then((response) => callback(response));      
        return () => { controller.abort(); }
    }

    // viewState: 0 - nothing, 1 - buffer, 2 - progress bar, 3 - final with list
    const [viewState, setViewState] = useState(0)
    function incrementViewState() {setViewState((prev)=> { if (prev < 3) { console.log(prev); return prev+1; } })}

    // states for url and duration and id and infos
    const [url, setURL] = useState("")
    const [waitDuration, setDuration] = useState(0)
    // const [audioId, setId] = useState("")
    const [infos, setInfos] = useState("")
    

    switch (viewState) {
        case 0:
            return <PlaceholderChp updateViewState={incrementViewState} setURL={setURL}/>
        case 1:
            // return <Buffer updateViewState={incrementViewState} callRequest={callRequest} setAudioId={setId} setDuration={setDuration} ytURL={url}/>
            return <Buffer setInfos={setInfos} updateViewState={incrementViewState} callRequest={callRequest} setDuration={setDuration} ytURL={url}/>
        // case 2:
        //     // return <Countdown updateViewState={incrementViewState} id={audioId} setInfos={setInfos} duration={waitDuration}/>
        //     return <Countdown updateViewState={incrementViewState} ytURL={url} setInfos={setInfos} duration={waitDuration} callRequest={callRequest}/>
        // case 3: 
        //     return <ListView infos={infos}/>
        // default:
        //   return null;
      }    
}
