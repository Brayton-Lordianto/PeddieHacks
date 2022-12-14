import React, {useState} from 'react'
import logo from '../static/logo.svg';

const Navbar = () => {
 
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#!" className="flex items-center">
                    <img src={logo} className="mr-3 h-10 sm:h-20" alt="Logo" />
                    <span className="self-center text-5xl	font-semibold whitespace-nowrap dark:text-white">Summarizr</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleClick}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default" >
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>Home</li>
                        <li>1. Input Video</li>
                        <li>2. Review Summary</li>
                        <li>3. Ask Questions</li>
                    </ul>
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-gray-900 w-full px-8'}>
                <li className='border-b-2 border-gray-300 w-full'>Home</li>
                <li className='border-b-2 border-gray-300 w-full'>1. Input Video</li>
                <li className='border-b-2 border-gray-300 w-full'>2. Review Summary</li>
                <li className='border-b-2 border-gray-300 w-full'>3. Ask Questions</li>
                <div className='flex flex-col my-4'>
                    <button className='px-8 py-3'>Logout</button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar