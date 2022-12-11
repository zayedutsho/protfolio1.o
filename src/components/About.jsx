import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className=" py-5 w-full h-screen bg-gradient-to-r from-zinc-900  to-purple-900 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Detail-oriented computer engineer with strong design and integration abilities as
                    well as strong problem-solving abilities.Competent in Frontend Development.
                    Enthusiastic about starting and implementing new projects. understanding of how
                    to transform business needs into technical solutions.
                </p>

                <br />

                <p className="text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    pariatur, vel similique sint, nobis aspernatur ut praesentium
                    explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
                    quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
                    Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
                    magni quo! Eum cupiditate debitis labore.
                </p>
            </div>
        </div>
    );
};

export default About;