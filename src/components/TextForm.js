import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upperCase!","success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerCase!","success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#08114a'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'#08114a'}} id="myBox" rows="8"></textarea>
            </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowecase</button>  
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#08114a'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
