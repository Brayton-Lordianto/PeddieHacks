import React, { useRef, useEffect, useState } from 'react'
import '../index.css'

import * as tf from "@tensorflow/tfjs"
import * as qna from "@tensorflow-models/qna"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { TextField, Button, Typography } from "@material-ui/core"
import Loader from "react-loader-spinner"

const Questions = (props) => {

  const passageRef = useRef(null)
  const questionRef = useRef(null)
  const [answer, setAnswer] = useState()
  const [model, setModel] = useState(null)
  const [passage, setPassage] = useState('hi')

  // Async function loading the tensorflow Q&A model
  const loadModel = async () => {
    const loadedModel = await qna.load()
    setModel(loadedModel)
    console.log('Model loaded')
  }

  // Runs the async function for loading the model with an empty array after to stop it from reloading during rerendering
  useEffect(() => { loadModel() }, [])

  const answerQuestion = async () => {
    if (model !== null) {
      // If the event of enter button AKA "13" is pressed and the model has loaded..
      console.log('Question has been submitted')
      const passage = passageRef.current.value
      const question = questionRef.current.value

      const answers = await model.findAnswers(question, passage)
      // Passing the passage and question as references to the Q&A model

      setAnswer(answers)
      // Takes the answers and pushes the information to the answer state. Console logging the results
      console.log(answers)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      answerQuestion()
    }
  }

  // useEffect(()=>{
  //   console.log('hi')
  //   console.log('e is', Object.keys(document.querySelector('.passageClass')))
  //   console.log('val is', (document.querySelector('.passageClass')["__reactProps$h8uqgpgcqgw"]))
  // },[])

  function textFieldChanged(e) {
    props.setTextBERT(prev=>{
      var x = [...prev]
      x[0] += e.target.value.split('').pop()
      console.log('changing bert supposedly to ', x)
      return x
})
  }

  return (
    <div className="App-BERT">
      <header className="App-header-BERT">
        {model == null ?
          // Ternary operator checking if the model is null -> if model is null, loader spinner function appears
          <div>
            <Typography variant="h3" color="textPrimary" style={{ fontWeight: 600 }}>loading model...</Typography>
            <Loader
              type="Puff"
              color="#2886E7"
              height={200}
              width={200}
            />
          </div>
          :
          // -> if model is not null (has loaded) fragment function runs to define UI
          <>
            <Typography variant="h3" style={{ fontWeight: 600 }}>{`YOUR TRUSTY EDU-HELPER!`}&nbsp;</Typography>
            <br></br>
            <br></br>
            {/* <input value={props.textBERT.join('')} onChange={textFieldChanged}/> */}
            {/* <button onClick={()=>props.setTextBERT(['','sw'])}>dd</button> */}
            <TextField
              label="Text passage (Add content by checking on auto chapters)"
              variant="outlined"
              className="passage"
              multiline
              maxRows={10}
              margin="dense"
              inputRef={passageRef}
              style={{ width: 700 }}
              value={props.textBERT.join('')}
            />
            <br></br>

            <div className="question">
              <TextField
                margin="dense"
                variant="outlined"
                label="Ask a question"
                inputRef={questionRef}
                style={{ width: 600 }}
                className='passageClass'
                type="text"
                onKeyPress={handleKeyPress}
              />
              <Button style={{ margin: "8px 0 4px 6px" }} variant="outlined" onClick={answerQuestion} type="submit">submit</Button>
            </div>
            <br></br>


            <div className="answer-container">
              <Typography variant="h4" style={{ fontWeight: 600 }}>Answers</Typography>
              <div>
                {answer ? answer.map((answer, index) => <Typography align="left" paragraph="true"> <b>{index + 1}.</b> {answer.text}  (Confidence level: {Math.floor(answer.score * 100) / 100}) </Typography>) : ""}
              </div>
            </div>
          </>
        }

      </header>
    </div>
  )
}

export default Questions

// "react hooks are a new feature in react version 16.8 which allows you to use other react features without writing a class. hooks don't work inside classes they let you use react without writing a class. the first reason is more related to JavaScript than react itself."