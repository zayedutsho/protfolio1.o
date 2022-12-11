import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {


    //  create stat
    const [nav, setNav] = useState(false)

    const links = [

        {
            id: 1,
            link: "Home"


        },
        {
            id: 2,
            link: "About",
            add: "About.jsx"


        },
        {
            id: 3,
            link: "Projects"


        },
        {
            id: 4,
            link: "Contact"


        },


    ]


    return (
        <div className='flex justify-between items-center w-full h-20 text-teal-300	 fixed bg-gradient-to-r from-zinc-900 to-purple-900		 px-4'>
            <div className='text-5xl font-signature ml-2'>
                <h1 className='cursor-pointer font-medium text-emerald-100	 hover:scale-150 duration-200'>DevZayed</h1>
            </div>

            <ul className=' hidden md:flex'>

                {links.map(({ link, id, add }) => (
                    <li key={id} className='px-4 cursor-pointer font-medium text-emerald-100  hover:scale-150 duration-200'
                    >     <a href={add}>  {link}</a>
                    </li>

                ))}





            </ul>


            {/* adding icon */}

            <div onClick={() => { setNav(!nav) }} className="cursor-pointer pr-4 z-10 md:hidden">



                {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}

            </div>



            {

                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0  left-0 w-full h-screen bg-gradient-to-r from-zinc-900 to-purple-900	'>

                        {links.map(({ link, id }) => (

                            <li className='py-4 text-4xl cursor-pointer text-center  hover:scale-150 duration-200'>{link}</li>

                        ))}



                    </ul>

                )
            }









        </div >
    )
}

export default NavBar