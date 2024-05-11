import React, { useState } from "react";
<<<<<<< HEAD
import "../App.css";
=======

>>>>>>> 50019f65ea74567202f93c79ba2aaa798924b0a4
export default function TextForm(props) {
  document.title = "TextUtils | Home";
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
<<<<<<< HEAD
  const copyText = () => {
=======
  const copyText = () =>{
>>>>>>> 50019f65ea74567202f93c79ba2aaa798924b0a4
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success");
  };
  let p = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  return (
    <>
      <div
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        className="container"
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="15"
            onChange={handleOnChange}
            value={text}
            style={{
<<<<<<< HEAD
              backgroundColor: props.mode === "light" ? "#e1e1e1" : "black",
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid black",
              height: "50vh",
=======
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "dark" ? "white" : "black",
>>>>>>> 50019f65ea74567202f93c79ba2aaa798924b0a4
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>

        <p>
<<<<<<< HEAD
=======
          
>>>>>>> 50019f65ea74567202f93c79ba2aaa798924b0a4
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
<<<<<<< HEAD
        <p>{0.008 * p} minutes to read</p>
=======
        <p>
          {0.008 *
            p}{" "}
          minutes to read
        </p>
>>>>>>> 50019f65ea74567202f93c79ba2aaa798924b0a4
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
