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



    const [text, setText] = useState('');
    const [pleholder, setplaceholder] = useState('Placeholder text here');


   // Upper case 
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'success');
    }

    // Lower case
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", 'success');
    }

    // Delete text
    const handleDeleteClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Deleted Text", 'success');
    }

    // onChange
    const handleOnChange = (event) => {
        setText(event.target.value);

    }


    // Reverse text Button
    const reversed = () => {
        let splitWord = text.split("");

        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords

        setText(newText);
    };


    // Speak text
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    // Undo text Function
    const handleUndoClick = () => {
        let newText = text.substr(0, text.length - 1);
        setText(newText)
    }

    // Capitalize text
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }

    const handleCapClick = () => {
        let newText = () => {
            let finalStrArr = [];
            let strArr = text.split(" ")
            strArr.forEach(element => {
                finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
            });
            let finalStr = finalStrArr.join(" ")
            return finalStr;
        }
        setText(newText)
    }


    // Extra Space Remove
    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }

 
const titleCaseHandler = () => {
    let newText = text.toUpperCase() + text.substr(1).slice(1);
    setText(newText);
  };

  const sentenceCase = (str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
    setText(sentenceCase);
  }
  

  // Copy text 
  const handleCopytext = ()=>{
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  

  const [color, colorChange] = useState("Black");
  const myNewstyle = {
    fontSize: 16,
    color: color,
  };


    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? '#fff' : '#000' }}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>{props.heading}</h1>

                        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} placeholder={pleholder} rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? '#fff' : '#000' }} ></textarea>
                    </div>

                    <div className="col-sm-12 button_form mt-4 mb-3">
                        <button className="btn btn-primary" onClick={handleUpClick} type="submit">Convert to Uppercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleLoClick} type="submit">Convert to Lowercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleDeleteClick} type="submit">Delete Text</button>
                        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                        <button className="btn btn-primary mx-2" onClick={handleCopytext} type="submit">Copy Text</button>
                        <button className="btn btn-primary mx-2" onClick={handleUndoClick} type="submit">Undo Text</button>
                        <button className="btn btn-primary mx-2" onClick={reversed} type="submit">Reversed Text</button>
                        <button className="btn btn-primary mx-2" onClick={handleCapitalize} type="submit">Capitalize Text</button>
                        <button className="btn btn-primary my-2" onClick={handleExtraSpaces} type="submit">Remove ExtraSpaces</button>
                        <button className="btn btn-info mx-2"  onClick={titleCaseHandler}>Title Case</button>
                        <button type="button" className="btn btn-danger mx-2" onClick={() => colorChange("red")}>Red Text</button>
                        <button type="button" className="btn btn-dark mx-2" onClick={() => colorChange("black")}>Black Text</button>
                        <button onClick={sentenceCase}>Sentence case not working</button>
                    </div>
                </div>

                <div className='col-sm-12 mt-4 text_summery'>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} word and {text.length} character</p>
                    <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p style={myNewstyle}>{text}</p>
                </div>

            </div>
        </div>
    )
}



