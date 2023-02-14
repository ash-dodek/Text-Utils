import React, { useState } from 'react'


export default function TestForm(props) {
  const [text, setText] = useState("")
  const [ans, setAns] = useState("")
  const [WordCount, setWordCount] = useState(0)

  const sendToRev = ()=>{
    setText(ans)
    setAns("")
  }

  const reverseText = ()=>{
    let arr = []
    for(let i = text.length-1; i>=0; i-- ){
      arr.push(text[i])
    }
    let reversedText = arr.join("")
    setText("")
    setAns(reversedText)
  }

  const copyText = ()=>{
    let copiedText = document.getElementById("result");
    copiedText.select();
    copiedText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copiedText.value);
    
  }
  
  const removeItems = ()=>{
    setAns("")
  }
  const handleUpClick = () => {
    setAns(text.toUpperCase().trim())
    setText("")
    setWordCount(0)
  }
  const handleLowerClick = () => {
    setAns(text.toLowerCase().trim())
    setText("")
    setWordCount(0)
  }
  const handleCapClick = () => {
    
    setWordCount(0)
  }
  const onChange = (event) => {
    setText(event.target.value)
    if (text === "" || text === " ") {
      setWordCount(0)
    } else {
      setWordCount(text.split(" ").length)
    }
  }
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea placeholder='Enter text here' onChange={onChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowerClick}>Convert to Lower Case</button>
        <button className="btn btn-primary my-3" disabled onClick={handleCapClick}>Capitalize</button>
        <button className="btn btn-primary mx-3" onClick={reverseText}>Reverse Text</button>
      </div>
      <div className="container my-5">
        <h3>Result</h3>
        <textarea disabled placeholder="Result will be shown here" value={ans} className="form-control"
          id="result" rows="3"></textarea>
        <button className="btn btn-primary my-3" onClick={removeItems}>Clear</button>
        <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={sendToRev}>Re-evaluate Text</button>
        <h5>No of words: {WordCount}</h5>
        <h5>No of characters: {text.length}</h5>
      </div>

    </>
  )
}
