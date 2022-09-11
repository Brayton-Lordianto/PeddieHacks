
import React, { useState } from 'react'

export default function PlaceholderChp(params) {
  const [text, setText] = useState("placeholder")
  function moveToNewView() {
    console.log("link set to")
    console.log(text)
    params.setURL(text)
    params.updateViewState()
  }
  return (
    <div>
        PlaceholderChp
        <form>
          <label for="fname">Type here:</label>
          <input type="text" id="fname" name="fname" value={text} onChange={e => setText(e.target.value)} />
        </form>
        <button onClick={()=>moveToNewView()}> submit </button>
    </div>
  )
}
