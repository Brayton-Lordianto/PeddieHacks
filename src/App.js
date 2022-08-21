import React, { useRef, useState } from "react";
import "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";

const passage = `On April 20, 1889, Hitler was born who was the greatest Nazi leader known till now.`; // pass the passage into this

export default function App() {
  const textarea = useRef();
  const input = useRef();
  const [result, setResult] = useState("");

  const handleAdd = async () => {
    const model = await qna.load();
    const answers = await model.findAnswers(
      input.current.value,
      textarea.current.value
    );

    if (answers) setResult(JSON.stringify(answers, null, 2));
  };

  return (
    <div>
      <textarea
        style={{ width: "100%" }} // caution!
        ref={textarea}
        defaultValue={passage}
      />
      <input ref={input} defaultValue="When was born?" />
      <button onClick={handleAdd}>Submit</button>
      <pre>{result}</pre>
    </div>
  );
}
