import React from 'react'
import '../styles/button.css'
const Generate = () => {
    const buttons = ['download', 'edit', 'new']
    return (
        <main className='flex flex-row justify-between mx-[130px] h-full items-center'>
            <div className='leftContent'>
                <form
                    className='flex flex-col justify-between'
                    onClick={(e) => e.preventDefault()}
                >
                    <label htmlFor="description">Describe Your Vision</label>
                    <textarea style={{ resize: "none" }}
                        type="text"
                        id="description"
                        className='bg-transparent border-gradient-inp border-gradient-input '
                    />
                    <div className="selector border-emerald-50 ">
                        <label htmlFor="size">Select Size:</label><br />
                        <select name="size" id="size" className="bg-transparent border-gradient ">
                            <option value="small">Small</option>
                            <option value="medium" selected>Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <button className='uppercase globButton2 font-bold '>Generate</button>
                </form>
            </div>
            <div className='rightContent'>
                <div className="generatedImage pb-5 h-[50vh] mb-[40px flex items-center flex-col]">
                    <img src="assets/Vision.png" />
                </div>
                <div className="buttonArea  flex justify-between">
                    {
                        buttons.map(e => (
                            <button className={`globButton2 uppercase font-bold ${e}`}>{e}</button>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Generate