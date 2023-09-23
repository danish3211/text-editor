import React, {useState} from "react";


export default function Textforms(props) {
    
    const  handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const  handleLoClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }
    const  handleClearClick = ()=>{
        
        let newText = '';
        setText(newText)
    }
    const  handleOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);    

    }

    const [text, setText] =useState('');

  return (
    <>
    <div className="container"  style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'? '#373b43':'white', color: props.mode === 'dark'? 'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
Clear text
      </button>
    </div>

    <div className="container my-3  " style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h3>your textsummery</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words & {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing to preview to preview it here  "}</p>

        {/* <button type="button" className="btn btn-primary/ ">Enable dark mode</button> */}
    </div>
    </>
  );
}
