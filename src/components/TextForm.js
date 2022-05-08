import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert(" Text has been cleared!", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(" Text has been copied!", "success");
    }
    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces have been removed!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode==='light'? 'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'? '#232e44':props.mode==='light'?'white':'#6de56d', color: props.mode==='dark'? 'white':'black'}} id="myBox" rows="9"></textarea>
                </div>
                {/*  */}
                <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} mx-1 my-1`} onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} mx-1 my-1`} onClick={handleCopyClick}>Copy text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode==='light'? 'black':'white'}}>
                <h3>Yourtext summary</h3>
                <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
