import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function home() {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-r from-zinc-900  to-purple-900  pb-14		"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                    <h3 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Full Stack Developer
                    </h3>
                    <p className=" text-teal-100 py-4 max-w-md">
                        Detail-oriented computer engineer with strong design and integration abilities as
                        well as strong problem-solving abilities.Expart in React js,JavaScript,Es6,Rest Api,Firebase,Node js,MongoDb,Bootstrap,Tailwind CSS,Daisy Ui.
                        Enthusiastic about starting and implementing new projects.
                    </p>

                    <div>

                        <button className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Protfolio

                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={35} className="ml-1" />
                            </span>
                        </button>

                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full ml-10"
                    />
                </div>
            </div>
        </div>
    );
};


export default home