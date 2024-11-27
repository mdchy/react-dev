import React from 'react'
import './meme.css'
import memeData from "./data/memeData"

export default function Meme(){
    const [imgUrl, setImgUrl] = React.useState("https://i.imgflip.com/1g8my4.jpg")
    function getRandomMeme(){
        const memeArray = memeData.data.memes
        const randomNum = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNum].url
        setImgUrl(url)
    }
    return(
        <main>
            <div className='form'>
                <input type='text' className='imput--field' placeholder='Top text'/>
                <input type='text' className='input--field' placeholder='Bottom text'/>
                <button className='form--button' onClick={getRandomMeme}>Get a new image</button>
            </div>
            <img src={imgUrl} alt='meme' className='meme--image'></img>
        </main>
    )
}