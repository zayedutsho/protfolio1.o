import React from "react";
import { BsDownload } from 'react-icons/bs'


const About = () => {


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
        <div
            name="about"
            className=" py-5 p-4 w-full h-screen bg-gradient-to-r from-zinc-900  to-purple-900 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About ME
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Detail-oriented computer engineer with strong design and integration abilities as
                    well as strong problem-solving abilities.Competent in Frontend Development.
                    Enthusiastic about starting and implementing new projects. understanding of how
                    to transform business needs into technical solutions.
                </p>

                <br />

                <button onClick={onButtonClick} className="bg-black text-white p-5" >
                    Download Resume  <span>                    {BsDownload}
                    </span>

                </button>

            </div>
        </div>
    );
};

export default About;