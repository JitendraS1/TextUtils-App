import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted to uppercase', 'success')
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text converted to lowercase', 'success')

  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(' Textarea is cleared now', 'success')
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(' coppied to clipboard ', 'success')
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(' Extra space removed', 'success')
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id='myBox'
            rows='8'
          ></textarea>
        </div>
        <button className='btn btn-primary btn-sm' onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className='btn btn-primary btn-sm mx-2' onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className='btn btn-primary btn-sm ' onClick={handleClearClick}>
          Clear Textarea
        </button>
        <button className='btn btn-primary btn-sm mx-2' onClick={handleCopy}>
          Copy Text
        </button>
        <button className='btn btn-primary btn-sm ' onClick={handleExtraSpaces}>
          Handle Spaces
        </button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Taxt Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h3> Preview </h3>
        <p>{text.length > 0 ? text : 'Enter something in textbox above to preview it here'}</p>
      </div>
    </>
  );
}
