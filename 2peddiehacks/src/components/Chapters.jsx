import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';

export default function Chapters(props) {
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



  // useEffect(()=>{
  //   if (props.startLoading) {
  //     console.log("starting to load")
  //     // do the endpoint call for the results
  //     const firstEndpoint = "http://127.0.0.1:5000/process_url"
  //     const secondEndpoint = "http://127.0.0.1:5000/get_captions"
  //     const jsonData = {'url':props.ytURL}

  //     // fetch(firstEndpoint)
  //     //   .then(response => response.json())
  //     //   .then(result => console.log(result))
  //     //   .catch(error => console.log('error', error));

  //     //   var url = firstEndpoint
  //     // fetch(firstEndpoint)
  //     //   .then((res) => console.log(res.json()))
    

  //       // callRequest(jsonData, firstEndpoint, (Obj) => {
  //       //     if (Obj.cached) {
  //       //       console.log(Obj.infos[0])
  //       //     }
  //       //     console.log(Obj)
  //       // })
  //       // .then(()=>{
  //       //   callRequest(jsonData, secondEndpoint, (Obj) => {
  //       //     console.log(Obj)
  //       //   })
  //       // })

      
  //     const response = fetch(firstEndpoint)
  //     console.log(response)
  //   }
  // },[props.startLoading])

  return (
    <div>
        dd
        
    </div>
  )
}
