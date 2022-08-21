import React from 'react'

import groupStudy from '../static/group_study.svg'


const FirstComp = ({ refToLastComp }) => {
  const scrolltoLast = () => {
    if (refToLastComp.current) {
      refToLastComp.current.scrollIntoView();
    }
  };

  return (
    <div className='h-600 w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                 <p className='text-2xl'>Jump to the main points of YouTube videos</p>
                 <h1 className='py-3 text-5xl md:text-7xl font-bold'>Save time and learn more</h1>
                <p className='text-2xl'>Come together and share notes</p>
                 <button onClick={scrolltoLast} className='py-3 px-6 sm:w-[60%] my-4'>Let's get started!</button>
             </div>
             <div>
                 <img className='w-full' src={groupStudy} alt='/' />
             </div>
         </div>
     </div>

  );
};

export default FirstComp;

// const Hero = ({ refToLastComp }) => {

//   const scrolltoLast = ({ refToLastComp }) => {
//     if (refToLastComp.current) {
//       refToLastComp.curren.scrollIntoView();
//     }
//   };
//   return (
//     <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
//         <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
//             <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
//                 <p className='text-2xl'>Jump to the main points of YouTube videos</p>
//                 <h1 className='py-3 text-5xl md:text-7xl font-bold'>Save time and learn more</h1>
//                 <p className='text-2xl'>Come together and share notes</p>
//                 <button onClick={scrolltoLast} className='py-3 px-6 sm:w-[60%] my-4'>Let's get started!</button>
//             </div>
//             <div>
//                 <img className='w-full' src={groupStudy} alt='/' />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero