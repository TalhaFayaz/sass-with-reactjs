import React, { useState } from 'react'
import logowhite from '../assets/logo-light.png'
import logodark from '../assets/logo-dark.png'

function Navbar() {


    const links = [
        {
            id: 1,
            link : "Home"
        },
        {
            id: 2,
            link : "Showcase"
        },
        {
            id: 3,
            link : "Portfolio"
        },
        {
            id: 4,
            link : "Contact"
        },
    ]

    const [scroll , setScroll] = useState(false)

    React.useEffect( ()=>{
        window.addEventListener("scroll" , handleScoll)
    })

    const handleScoll = () => {
        if(window.scrollY > 120){
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
  return (
    <div className={`navbar ${scroll ? 'whiteBg' : 'Transparent' }`}>
        <div className='container'>
            <div className='navbar__content'>
                <div className='navbar__left'>
                    <img src={scroll ? logodark : logowhite} ></img>
                </div>
                <ul className='navbar__right'>

                    {
                        links.map(({link,id}) => (
                            <li 
                            key={id}>
                            {link}            
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
