import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("up clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("up clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("up clicked")
        let newText = "";
        setText(newText)
    }
    const handleCopyClick = () => {
        // console.log("up clicked")
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        // console.log("up clicked")
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        // console.log("up clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h3>Yourtext summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            

        </>
    )
}
