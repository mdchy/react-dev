import React from 'react'
import './meme.css'

export default function Meme(){
    return(
        <main>
            <form>
                <input type='text' className='imput--field' placeholder='Top text'/>
                <input type='text' className='input--field' placeholder='Bottom text'/>
                <button className='form--button'>Get a new image</button>
            </form>
        </main>
    )
}