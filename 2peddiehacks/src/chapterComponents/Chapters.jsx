import React, { useState } from 'react'
import callRequest from "./util"
import SingleChapter from './SingleChapter'
import Loader from 'react-loader-spinner'
import { useEffect } from 'react'
import uuid from 'react-uuid'

export default function Chapters(props) {
    // const endpoint = 'https://ac3c-124-197-95-94.ap.ngrok.io/get_all'
    // const ytURL = 'https://www.youtube.com/watch?v=JzPfMbG1vrE' // super short
    // const ytURL = 'https://www.youtube.com/watch?v=hQAHSlTtcmY&t=902s' // long
    // const ytURL = "https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A" // react hooks
    const ytURL = props.ytURL
    const [chapters, setChapters] = useState([{ 'started': 0 }])
    const [loadingTime, setDuration] = useState(0)
    const uploadURL = 'https://3e26-124-197-95-94.ap.ngrok.io/download_and_upload'
    const chaptersURL = 'https://3e26-124-197-95-94.ap.ngrok.io/processing_phase_3'

    useEffect(()=>start(),[])

    function start() {
        console.log('starting the request to ', uploadURL)
        callRequest({'url':ytURL},uploadURL,(response)=>{
            console.log('the duration response is ', response.duration)
            setDuration(Math.floor(response.duration))
            console.log('done with first endpoint')
            startCountdown()

            console.log('starting request to ', chaptersURL)
            callRequest({'url':ytURL},chaptersURL,(response)=>{
                console.log('the chapters in the response are ', response)
                setChapters(()=>{return response})
                props.setTextBERT((prev)=>{
                    // add the bert text as indices of the checkboxes. if it is clicked, then it will replace. s
                    const newRes = [...prev, ...new Array(response.length).fill('')]
                    console.log('textBERT changed from ', prev, 'to', newRes)
                    return newRes
                })
            })
        })
    }

    function displayTime() {
        console.log("displaying time")
        if (loadingTime === 0) {
            console.log('no time')
            return "Wait just a bit longer..."
        }
        console.log('got time')
        return `Your video is being processed... It will take approximately ${loadingTime} seconds to complete`
    }

    function startCountdown() {
        console.log('starting countdown from ', loadingTime)
        const interval = setInterval(() => {
            setDuration(prev => {
                console.log('interval reduced to ', prev)
                if (prev - 1 < 0 || chapters[0].started !== 0) {
                    setDuration(-1)
                    return clearInterval(interval)
                }
                return (prev -= 1)
            })
        }, 1000);
    }

    function changeBERT_Single(idx,val) {
        props.setTextBERT(prev=>{
            var x = [...prev]
            x[idx] = val
            console.log('changing bert supposedly to ', x)
            return x
        })
    }

    function chapterMapView() {
        console.log('ytURL in chapter view is ',ytURL)
        // if the results have not been received, show the loading bar
        if (chapters[0].started === 0) {
            // add the loading buffer here. 
            return (
                <div>
                    <Loader
                        className='centered'
                        type="Oval"
                        color="#2886E7"
                        height={75}
                        width={75}
                    /><br></br>
                    <center className='centered'>
                        {displayTime()}<br></br>
                        {/* Check below to check out the video's summary and ask our edu-helper some questions while you wait! */}
                    </center>
                </div>
            )
        }
        return (
            chapters.map((chapter, idx) => (
                <>
                    <div key={idx}><SingleChapter chapter={chapter} setTime={props.setTime} changeBERT_Single={changeBERT_Single} idx={idx+1}/></div>
                </>
            ))
        )
    }

    return (
        <div style={{paddingTop:'100px'}}>
            <div className='centered' style={{fontSize:'50px',color:'blue'}}>Auto-generated Chapters</div><br></br>
            {chapterMapView()}
        </div>
    )
}
