import React, {useState} from 'react'

export const TextColor =()=>{
    const handleUpClick = ()=> {
        console.log('Actual text = ' + insideText);
        let upCaseText = insideText.toUpperCase();
        setText(upCaseText);
        
    }

    const handlelowClick = ()=> {
        console.log('Actual text = ' + insideText);
        let upCaseText = insideText.toLowerCase();
        setText(upCaseText);
        
    }

    const [color, colorChange] = useState("Black");
    const mystyle = {
        fontSize: 16,
        color: color,
      };


    const changeHandlers = (events)=> {
        // console.log('Handler');
        setText(events.target.value)
    }

    const[insideText, setText] = useState('Enter the text here');
  return (
    <>
    <div className="container1 my-5">
        <h2>Enter the Text to Analyse</h2>
        <div className="input-group mb-3">
        <span className="input-group-text">With textarea</span>
        <textarea className="form-control" aria-label="With textarea" rows="10" value={insideText} onChange={changeHandlers}></textarea>
        </div>
        <button type="button" className="btn btn-primary" data-bs-toggle="button" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-success mx-2" data-bs-toggle="button" onClick={handlelowClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-danger mx-2" data-bs-toggle="button" onClick={() => colorChange("red")}>Red Text</button>
        <button type="button" className="btn btn-dark mx-2" data-bs-toggle="button" onClick={() => colorChange("black")}>Black Text</button>

    </div>
    <div className="container2">
        <h2>Your text summary : </h2>
        <p>There are {insideText.split(" ").length} words and {insideText.length} characters.</p>
        <p>Average minutes to read : { 0.010 * insideText.split(" ").length }</p>
        <h2>Preview :</h2>
        <p style={mystyle}>{insideText}</p>
    </div>
    </>
  )

}

