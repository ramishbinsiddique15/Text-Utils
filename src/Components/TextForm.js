import React, {useState} from "react"

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
      }
      const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
      }
      const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success")
      }
      const handleOnChange = (event) =>{
        setText(event.target.value);
      }
      const [text, setText] = useState('');
      const copyText = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied", "success")
      }
  return (
  <>
    <div style={{color : props.mode === 'dark' ? 'white': 'black'}} className="container">
        <h1>{props.heading}   </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="15"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor : props.mode === 'light' ? 'white': 'black' , color : props.mode === 'dark' ? 'white': 'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white': 'black'}}>
        <h1>Your text summary</h1>

        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter text to preview it here"}</p>
    </div>
    </>
  );
}
