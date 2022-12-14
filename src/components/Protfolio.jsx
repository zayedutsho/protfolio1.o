import React from "react";
import CourseHero from "../assets/portfolio/CourseHero.png";
import Hungry from "../assets/portfolio/hungry .png";
import mobileShop from "../assets/portfolio/mobileShop.png";
import { Link } from "react-router-dom";




const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: CourseHero,
            link: "https://teal-capybara-002ad4.netlify.app/"

        },
        {
            id: 2,
            src: Hungry,
            link: "https://hungry-1c472.firebaseapp.com/"

        },
        {
            id: 3,
            src: mobileShop,
            link: "https://mobileshop-c18b5.web.app/"
        }


    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-r from-zinc-900  to-purple-900 w-full text-white md:h-screen py-5 p-4"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={link}>Live</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
