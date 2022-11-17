import React, { useState } from 'react'

export const TextForm = (props) => {

    // You can Add Find Replace Word in TextUtils

//     const [fWord, findWord] = useState("");
// const [rWord, replaceWord] = useState("");
// Function : 
// const handlefindChange = (event) => {
//     findWord(event.target.value);
//   };
//   const handleReplaceChange = (event) => {
//   console.log(replaceWord(event.target.value)) ;
//   };
//   const handleReplaceClick = () => {
//     let newText = text.replaceAll(fWord,rWord);
//     setText(newText);
//   };
// TextArea  Of Find Words: 
//           value={fWord}
//           onChange = {handleFindChange}
// TextArea Of Replace Words :
//           value={rWord}
//           onChange = {handleReplaceChange}
// add event on button  : 
//           onclick = {handleReplaceClick}



// Reverse text Button


// const reversed = () => {
//     let splitWord = text.split("");

//     let reverseWord = splitWord.reverse("");
//     let joinedWords = reverseWord.join("");
//     let newText = joinedWords

//     setText(newText);
//   };



    const [text, setText] = useState('');
    const [pleholder, setplaceholder] = useState('Placeholder text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", 'success');
    }

    const handleDeleteClick = ()=>{
        let newtext = '';
        setText(newtext);
        props.showAlert("Deleted Text", 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    return (
        <div>
            <div className="container" style={{color: props.mode==='dark'? '#fff': '#000'}}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>{props.heading}</h1>

                        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder={pleholder} rows="8" style={{backgroundColor: props.mode==='dark'? 'gray': 'white', color: props.mode==='dark'? '#fff': '#000' }} ></textarea>
                    </div>

                    <div className="col-sm-12 button_form mt-4 mb-3">
                        <button className="btn btn-primary" onClick={handleUpClick} type="submit">Convert to Uppercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleLoClick} type="submit">Convert to Lowercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleDeleteClick} type="submit">Delete Text</button>
                    </div>
                </div>

                <div className='col-sm-12 mt-4 text_summery'>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(' ').length} word and {text.length} character</p>
                    <p>{0.008 * text.split(' ').length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>

            </div>
        </div>
    )
}



