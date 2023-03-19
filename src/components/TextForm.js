import React, {useState} from 'react'
  
export default function TextForm(props){

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper case","success")
        console.log(text)
    }
    const handleOnChange = (e) =>{
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter Text Here')
    return(
        <>
        <div className='container'style = {{color: props.Mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange = {handleOnChange} style = {{backgroundColor: props.Mode === 'dark'?'grey':'white'}}id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className='container my-3'style = {{color: props.Mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text !== ""? text.split(" ").length:0} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
        </div>
        </>
    )
}