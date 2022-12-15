import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/button.css'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const menu = [{ name: 'home', link: '' }, { name: 'help', link: 'help' }, { name: 'account', link: 'account' }]
    const [menuOpen, setmenuOpen] = useState(false)


    return (
        <header className='flex justify-between items-center mt-5 px-[30px] sm:px-[80px]'>
            <div className="logo font-extrabold text-2xl text-white">
                <span>AI IMAGE</span>
            </div>
            <MenuIcon className='text-white cursor-pointer menuicons text-[35px]' onClick={() => setmenuOpen(!menuOpen)} />
            <div className={`menu w-[40vw] flex justify-end ${menuOpen ? 'active' : ''} `}>

                <ul className='list-none mainMenu '>
                    <li>
                        <CloseIcon className='text-white cursor-pointer menuicons text-[35px]' onClick={() => setmenuOpen(!menuOpen)} />
                    </li>
                    {menu.map(e => (
                        <Link to={`/${e.link}`} className='text-white text-sm font-bold uppercase inline hover:cursor-pointer p-2 px-5 ml-4 globButton
                            '>{e.name}</Link>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header