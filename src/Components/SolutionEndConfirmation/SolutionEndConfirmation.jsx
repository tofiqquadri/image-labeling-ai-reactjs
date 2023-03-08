import React from 'react';
import { NavLink } from 'react-router-dom';

const SolutionEndConfirmation = () => {
    return (
        <section id="" className="game-section bg-gray-100 py-10 md:py-16">
            <div className="max-w-7xl mx-auto px-5 md:px-0 text-center">
                <h2 className="font-Graphik font-bold text-themeLightBlue text-2xl md:text-4xl w-3/4 md:w-full mx-auto">
                    Thank you{' '}
                    <span className="text-themeBlue font-bold mt-4">
                        {' '}
                        for staying with us
                    </span>
                </h2>

                <p className="text-center text-sm md:text-base font-Graphik mt-3 font-normal">
                    You can continue to home page and restart.
                </p>

                <img
                    src="images/end-screen.gif"
                    className="mx-auto text-center mt-3"
                    width="220"
                    alt=""
                />

                <p className="text-sm md:text-base text-themeLightBlue font-bold leading-5 mt-2 mb-5">
                    Clicking will redirect you!
                </p>

                <NavLink
                    to="/"
                    className="bg-themeLightBlue rounded-[5px] text-white font-Graphik font-medium px-10 py-3">
                    Go Home
                </NavLink>
            </div>
        </section>
    );
};

export default SolutionEndConfirmation;
