import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked:");
        let newText = text.toUpperCase(); 
        setText(newText)
        if(text.length>0){
        props.showAlert("Converted to uppercase","success");
        }
        else{
          props.showAlert("Enter Text","warning");
        }

    }
    const handlelowClick = () =>{
   
      let newText = text.toLowerCase(); 
      setText(newText)
      props.showAlert("Converted to lowercase","success");
      if(text.length>0){
        props.showAlert("Converted to lowercase","success");
        }
        else{
          props.showAlert("Enter Text","warning");
        }

  }
  const handlecleClick = () =>{
   
    let newText = ""
    setText(newText)
    if(text.length>0){
      props.showAlert("all text cleared","success");
      }
      else{
        props.showAlert("Enter Text","warning");
      }

}
const handleDleClick = () =>{
   
  let newText = text.slice(0,-1);
  setText(newText)
 

}
const handlecopyClick = () =>{
  var text = document.getElementById("myBox")
  text.select()
navigator.clipboard.writeText(text.value)

  props.showAlert("Copied to clipboard","success");
  
 
}
const handleresClick = () =>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
  if(text.length>0){
    props.showAlert("Removed all extra spaces","success");
    }
    else{
      props.showAlert("Enter Text","warning");
    }
}

    const handleOnChange = (event) =>{
        console.log("afjd");
        setText(event.target.value)
        if (!isNaN(event.target.value)) {
          setErrorMessage('Numbers are not allowed. Please enter text.');
        } else {
          setErrorMessage('');
        }
    }
  //  var element = document.getElementById("container");
  //  if (props.mode==='green'){
  //  element.style.color="white";
  //  }
  //  else{
  //   element.style.color="black";
  //  }

    const [text, setText] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
   
  return (
    <>
    <div className="container" id='container' style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading} </h1>
       <div className="mb-3">
        
     
        <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8 " style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handlecleClick}>clear all</button>
        <button className="btn btn-primary mx-2" onClick={handleDleClick}>Delete</button>
        <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleresClick}>Remove all extra spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p style={{color:text.length>0?'black':'red'}}>{text.length>0?text:"Enter something to preview"}</p>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

    </div>
    </>
  )
}
