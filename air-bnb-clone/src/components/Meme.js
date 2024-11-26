import React from 'react'
import './meme.css'
import memeData from "./data/memeData"

export default function Meme(){
    function getRandomMeme(){
        const memeArray = memeData.data.memes
        const randomNum = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNum].url
        console.log(url)
    }
    return(
        <main>
            <div className='form'>
                <input type='text' className='imput--field' placeholder='Top text'/>
                <input type='text' className='input--field' placeholder='Bottom text'/>
                <button className='form--button' onClick={getRandomMeme}>Get a new image</button>
            </div>
        </main>
    )
}