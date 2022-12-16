import { useEffect, useState } from 'react'
import React from 'react'
import '../styles/button.css'
import './main.js'
import './generate.css'
const Generate = ({ data }) => {
    const buttons = ['edit', 'new']
    const [desciption, setDescription] = useState('')
    const [src, setSrc] = useState('')
    const [size, setSize] = useState('medium')

    // const url = 'http://localhost:5000/openai/genimg'



    return (
        <main className='flex flex-row justify-between mx-[130px] h-full items-center'>
            <div className="spinner"></div>
            <div className='leftContent'>
                <form
                    className='flex flex-col justify-between h-[50vh]'
                    id='image-form'
                    onClick={(e) => e.preventDefault()}
                >
                    <label htmlFor="description">Describe Your Vision</label>
                    <textarea style={{ resize: "none" }}
                        type="text"
                        id="description"
                        className='msg bg-transparent border-gradient-inp border-gradient-input'
                        onChange={e => { setDescription(e.target.value) }}
                    />
                    <div className="selector border-emerald-50 ">
                        <label htmlFor="size">Select Size:</label><br />
                        <select defaultValue={'medium'} name="size" id="size" className="bg-transparent border-gradient "
                            onChange={e => setSize(e.target.value)}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <button id="submit" type="submit" className='uppercase globButton2 mt-[40px] font-bold '>Generate</button>
                </form>
            </div>
            <div className='rightContent'>
                <div className="generatedImage pb-5 h-[50vh] mb-[40px flex items-center flex-col]">
                    <img src="assets/Vision.png" id='image' onChange={(e)=> setSrc(e.target.src)}/>
                </div>
                <div className="buttonArea  flex justify-between">

                    <a
                        href={src} download
                        className={`globButton2 uppercase font-bold`}
                    >download</a>
                    {
                        buttons.map((e, i) => (
                            <button className={`globButton2 uppercase font-bold ${e}`} key={i}>{e}</button>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Generate