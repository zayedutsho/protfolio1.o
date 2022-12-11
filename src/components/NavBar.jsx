import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { BsDownload } from 'react-icons/bs'

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


        },
        {
            id: 3,
            link: "Projects"


        },
        {
            id: 4,
            link: "Contact"


        },

        {

            id: 5,
            link: "Resume",
            href: "/Final_Resume_Utsho.pdf",
            download: true,
        }


    ]


    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Final_Resume_Utsho.pdf';
                alink.click();
            })
        })
    }


    return (
        <div className='flex justify-between items-center w-full h-20 text-teal-300	 fixed bg-gradient-to-r from-zinc-900 to-purple-900		 px-4'>
            <div className='text-5xl font-signature ml-2'>
                <h1 className='cursor-pointer font-medium text-emerald-100	 hover:scale-150 duration-200'>DevZayed</h1>
            </div>

            <ul className=' hidden md:flex'>

                {links.map(({ link, id, href, download, }) => (
                    <li key={id} className='px-4 cursor-pointer font-medium text-emerald-100  hover:scale-150 duration-200'
                    >
                        <a href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >{link}</a>



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

                        <button onClick={onButtonClick}>
                            {BsDownload}
                        </button>


                    </ul>




                )
            }










        </div >
    )
}

export default NavBar