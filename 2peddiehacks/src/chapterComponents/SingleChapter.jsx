import React from 'react'
import { useEffect } from 'react'
import "./../sass/dropdowncss.scss"
import 'react-uuid'

export default function SingleChapter(props) {
    const chapter = props.chapter
    const start = chapter.start
    const end = chapter.end
    const gist = chapter.gist
    const headline = chapter.headline
    const summary = chapter.summary

    function timeDisplay(time) {
        const seconds = time / 1000
        const hourSection = Math.floor(seconds / 3600)
        const minuteSection = Math.floor(seconds / 60);
        const secondsSection = Math.floor(seconds % 60);
        const displaySeconds = secondsSection > 10 ? secondsSection.toString() : '0' + secondsSection.toString()
        const displayMinutes = minuteSection > 10 ? minuteSection.toString() : '0' + minuteSection.toString()
        if (hourSection !== 0) return `${hourSection}:${displayMinutes}:${displaySeconds}`
        return `${displayMinutes}:${displaySeconds}`
    }

    function toggleAccordion(e) {
        const item = e.currentTarget;
        const itemToggle = item.getAttribute('aria-expanded');
        console.log(itemToggle)
        item.setAttribute('aria-expanded', itemToggle === 'true' ? 'false' : 'true')
    }

    function clickTime(time) {
        console.log('time clicked')
        console.log(time)
        props.setTime(time)
    }
    
    function checkboxChanged(e) {
        const isChecked = e.currentTarget.checked
        console.log('checkbox pressed to ', isChecked)
        if (isChecked) { // set bert of this idx to the summary
            props.changeBERT_Single(props.idx,summary)
        } else {
            props.changeBERT_Single(props.idx,'')
        }
    }

    return (
        <div style={{ marginLeft: '100px' }}>
            <div class="accordion">
                <div class="accordion-item">
                    <input type="checkbox" onChange={checkboxChanged}/>
                    <> Use for Next Section</>
                    <br></br>
                    <i onClick={() => clickTime(start)}>Go to {timeDisplay(start)} </i>
                    <button id="" aria-expanded="false" onClick={toggleAccordion}><span className="accordion-title">
                        <b>
                            <h>{timeDisplay(start)} </h>
                            {gist}
                        </b>
                        <br></br>
                        <small>{headline}</small>
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            <>{summary}</>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
