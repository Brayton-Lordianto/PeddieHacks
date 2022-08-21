import React, {useState} from 'react'
//import {Button, FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import {Field, Form, Formik} from 'formik';


const Summarize = () => {

    const [summary, setSummary] = useState({});
    const [title, setTitle] = useState('');
    const [submit, setSubmit] = useState(false);

    function validateUrl(value) {
        let error;
        if (!value) {
          error = 'URL is required';
        } else if (!value.startsWith('https')) {
          error = 'Not a URL';
        }
        return error;
      }
    
      async function summarize(videoURL) {
        // ************************** TD
      }

    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>When long needs to be short, we've got you covered</h2>
                    <p className='text-3xl py-6 text-gray-500'>Need to cover a lot of ground fast? Input a Youtube video link and Watch only the most important clips. We do the heavy lifting for you!</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Summarize