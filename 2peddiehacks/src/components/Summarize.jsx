import React, {useState} from 'react'
//import {Button, FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
// import {Field, Form, Formik} from 'formik';
import { useImperativeHandle, forwardRef, useRef } from "react";



const LastComp = forwardRef((props, ref) => {
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }));


  const [link, setLink] = useState("");
  const handleChange = (e) =>{
    setLink(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setData(link)
    props.setVisible(true)
    
    proceed()
  }

  const proceed = () => {
    console.log('proceed button clicked.')
    // do a scrolling action here
    // can do ref.scrollintoview
    // idea of ref is that any element can hold a reference which initializes the ref to the element
    // then I can just call the ref to be in focus
    props.moveToLanding()
  }

  
  
  return (
    <div className='centered'>
    <div ref={compRef}>
            <div className='max-w-[1240px] mx-auto'>
                
            </div>
             <div>
               <body>
         <div className="flex flex-col items-center justify-center h-screen">
           <div class="mb-6">
           <div className='text-center'>
                     <h2 className='text-5xl font-bold'>When long needs to be short, we've got you covered</h2>
                    <p className='text-2xl py-6 text-gray-500'>Need to cover a lot of ground fast? Input a Youtube video link and Watch only the most important clips. We do the heavy lifting for you!</p>
                </div>
            
                  </div>
           <form onSubmit={handleSubmit} className="flex items-center w-full mx-auto mb-4 border rounded-full lg:max-w-2xl hover:shadow-md">
            <div class="pl-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
             </div>

             <input type="text" value={link} onChange={handleChange} id="subdomain" placeholder="https://www.youtube.com/watch?v=pSUdOmrd2Wg" class="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"/>
             <div class="pl-6"><button onClick={()=>{console.log('hi')}} type="submit"class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
   Proceed
</button></div>
           </form>
           


        </div>
      </body>

            </div>
         </div>
         </div>
  );
});

export default LastComp;