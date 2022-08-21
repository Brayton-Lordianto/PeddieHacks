// import logo from '../../static/logo.svg';
// import text from '../../static/placeholder.gif';
// import {Link} from 'react-router-dom';
import { useRef, useState, useEffect } from "react";

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Summarize from '../../components/Summarize'
import Landing from '../../components/Landing'
// import React, { useRef } from "react";



// import { Link } from "react-router-dom"


export default function HomePage() {

  const ref = useRef(null);
  // const ref2 = useRef(null);
  const getData = (data) => {
    console.log(data)

  }

  const [data, setData] = useState("string")
  useEffect(() => {
    console.log("changed data")
    console.log(data)
  }
  ,[data])
  // // const handleLinkClick = event => {
  // //   console.log('Link clicked');

  //   // 👇️ refers to the link element
  //   console.log(event.currentTarget);



  // };



//   const titleRef = useRef();

// function handleClick() {
//   titleRef.current.scrollIntoView({ behavior: "smooth" });
// }
    return(
      <>
        <Navbar />
        <Hero refToLastComp={ref}/>
        <Summarize ref={ref} onSubmit={getData} setData={setData} />
        <Landing data={data}/>


          
      </>
    )
}