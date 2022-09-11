
export default function callRequest(jsonData, requestURL, callback) {
    const controller = new AbortController();

    // make a request and initialize the progress state
    fetch(requestURL, 
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


