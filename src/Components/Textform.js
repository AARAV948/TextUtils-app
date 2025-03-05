import React , {useState} from 'react'

export default function Textform(props) {
  const[text  ,setText] = useState("");
  const handleupclick = () => {
    console.log("search button is clicked" );
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handlelowclick = () => {
    console.log("search button is clicked" );
    let newText = text.toLowerCase();
    setText(newText)
  }
  const clearText = () => {
    console.log("search button is clicked" );
    let newText = "";
    setText(newText)
  }
  
  const handleChange = (event) => { 
    setText(event.target.value);
  }

  const handleCopy = () => {
    console.log("copying text")
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

  }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleChange} id="Mybox" rows="3"></textarea>
    </div>
    <button className = "btn btn-outline-primary mx-2" placeholder="Search" onClick={handleupclick}  > Convert to UpperCase </button> 
    {/* <br></br> */}
    <button className = "btn btn-outline-primary mx-2" placeholder="Search" onClick={handlelowclick} >Convert to Lowercase </button>
    <button className = "btn btn-outline-primary mx-2" placeholder="Search" onClick={clearText} > Clear Text </button>
    <button className = "btn btn-outline-primary mx-2" placeholder="Search" onClick={handleCopy} > Copy Text </button>
    <button className = "btn btn-outline-primary mx-2" placeholder="Search" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
    </div>
    <div className="container my-3" >
    <h3 > Your Text Summary </h3>
    <p> {text.split(" ").length} words {text.length} characters </p>
    <p> {0.008 * text.split(" ").length} Minutes required to read </p>
    <h4> Preview </h4>
    <p> {text.length>0 ? text :"Enter Some Text to preview"} </p>
    </div>
  
    </>
  )
}
