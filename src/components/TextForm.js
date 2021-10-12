import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const convertToUppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.alert("success", "converted to uppercase")
    }
    const convertToLowercase = () => {
            let newText = text.toLowerCase()
            setText(newText)
            props.alert("success", "converted to lowercase")
    }
    const capitalizeFirstChar = () => {
            let words = text.split(" ")
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
            }
            setText(words.join(" "))
            props.alert("success", "Text Capitalize")
    }
    const clearBtn = () => {
            setText('')
            props.alert("success", "Text cleared")
    }
    const copyToClipboard = (event) => {
            navigator.clipboard.writeText(text)
            event.target.classList.add('btn-success')
            setTimeout(() => {
                event.target.classList.remove('btn-success')
            }, 1500);
            props.alert("success", "Copied to clipboard")
    }
    let textColor = props.mode === 'light' ? 'dark' : 'light'

    return (
        <>
            <div className="container  ">
                <h2 className={`text-${textColor}`}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${textColor}`} value={text} onChange={handleTextChange} id="textBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={convertToUppercase}>convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={convertToLowercase}>convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={capitalizeFirstChar}>capitalize first letter</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={copyToClipboard}>copy to clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={clearBtn}>clear</button>
            </div>
            <div className={`container my-2 text-${textColor}`}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((value) => value !== "").length} words and {text.length} characters</p>
                <p>{(text.split(' ').length * 0.008).toFixed(1)} minutes read</p>

                <h3 >Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview "}</p>
            </div>
        </>
    )
}
