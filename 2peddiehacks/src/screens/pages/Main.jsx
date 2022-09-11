// there was a problem with using flex. don t use flex when that persists

// import logo from '../../static/logo.svg';
// import text from '../../static/placeholder.gif';
// import {Link} from 'react-router-dom';
import { useRef, useState, useEffect } from "react";

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Summarize from '../../components/Summarize'
import Questions from "../../chapterComponents/Questions";
import MailingList from "../../components/Mailing List"
import Landing from "../../components/Landing";
import '../../App.css'
import Chapters from "../../chapterComponents/Chapters";

export default function HomePage() {

  const ref = useRef(null);
  const refToLanding = useRef(null);
  function moveToLanding() { refToLanding.current.scrollIntoView({ block: "center", behavior: "smooth" }); }

  const [ytURL, setData] = useState("string")
  useEffect(() => {console.log("changed url to ", ytURL)}, [ytURL])

  const [showBottom, setShowBottom] = useState(false)
  useEffect(() => {console.log("bottom is changed to ", showBottom)}, [showBottom])

  const [timestamp, setTimeStamp] = useState(0)
  const [textBERT, setTextBERT] = useState([''])
  const x = JSON.stringify(textBERT)
  useEffect(() => {console.log("text bert is changed to ", textBERT)}, [textBERT, x, JSON.stringify(textBERT)])

  function extraView() {
    if (showBottom) {
      return (
        <>
        <div>
          <Landing data={ytURL} timestamp={timestamp}/>
          <Chapters ytURL={ytURL} setTime={setTimeStamp} setTextBERT={setTextBERT}/>
          <Questions textBERT={textBERT} setTextBERT={setTextBERT}/>
        </div>
        </>
      )
    }
    return null
  }

  return (
    <div>
      <Navbar />
      <Hero refToLastComp={ref} />
      <Summarize ref={ref} setData={setData} setVisible={setShowBottom} moveToLanding={moveToLanding}/>
      <div ref={refToLanding}>{extraView()}</div>
      <MailingList />
    </div>
  )
}