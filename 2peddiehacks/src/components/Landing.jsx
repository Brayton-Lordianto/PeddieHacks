 
 import text from '../static/placeholder.gif';
 import {Link} from 'react-router-dom';
 export default function Landing( props ){

  // const youtubeID= "yaJx0Gj_LCY";
  
  const id = props.data.slice(32);

    return(
      <>

      <div className="pl-80 bg-blue w-full p-8 flex justify">
      <iframe className='rounded-md'
        title='Youtube player'
        width="1000" height="700"
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${id}?autoplay=0`}>
      </iframe>
  </div>
);
      
        <div className="h-screen flex">
          <div className="mt-2 flex w-1/2 justify-center items-center bg-white">
            <img className="pb-21"src={text} alt="streamline with us"></img>
          </div>
          <div className="flex w-1/2 justify-center items-center bg-white">
            <form className="bg-white">
                <h1 className="font-semibold whitespace-nowrap dark:text-white text-2xl mb-1">Hey there!</h1>
                <p className="text-sm font-normal text-gray-600 mb-7">Join our mission to empower students!</p>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
                </div>
                <div>
                <Link to="/main">
                <button type="submit" className="block w-full bg-blue-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button></Link>
                <span className="pl-12 text-sm ml-0 hover:text-blue-500 cursor-pointer">Don't have an account? Sign up</span>
                </div>
              </form>

            </div>
            </div>
            </>
    )
 }