import './hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {

    return (
        <section className="flex text-center mt-[10em] justify-center items-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-white text-bold text-[9vw] md:text-[90px] uppercase sm:capitalize">Generate Your</h2>
                <span className="eye"></span>
                <img className="w-[45%] m-auto" src="assets/vision.png" alt="vision.png" />

                    <Link to='generate' className='text-white inline-block mt-[5rem] text-sm font-bold uppercase hover:cursor-pointer p-2 py-3 sm:py-4 px-5 sm:ml-4 globButton2'>
                        Generate
                    </Link>
            </div>
        </section>
    )
}

export default Hero