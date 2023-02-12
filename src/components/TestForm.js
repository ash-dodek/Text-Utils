import React, { useState } from 'react'


export default function TestForm(props) {
  const [text, setText] = useState("")
  const [ans, setAns] = useState("")
  const [shouldAlert, setAlert] = useState(false)
  // setText("here")
  const handleUpClick = () => {
      setAns(text.toUpperCase())
      setText("")
  }
  const handleLowerClick = () => {
    setAns(text.toLowerCase())
    setText("")
  }
  const handleCapClick = () => {
  }
  const onChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea placeholder='Enter text here' onChange={onChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowerClick}>Convert to Lower Case</button>
        <button className="btn btn-primary my-3" onClick={handleCapClick}>Capitalize</button>
      </div>
      <div className="container my-5">
        <h3>Result</h3>
        <textarea disabled placeholder="Result will be shown here" value={ans} className="form-control"
          id="exampleFormControlTextarea1" rows="3"></textarea>
        <h5>No of words: {text.split(" ").length}</h5>
        <h5>No of characters: {text.length}</h5>
      </div>

    </>
  )
}
