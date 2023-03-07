import { NavLink } from 'react-router-dom';

const GameInformation = ({ secondsLeft }) => {
    return (
        <section
            id=""
            className="game-section mt-20 bg-gray-100 py-10 md:py-16">
            <div className="max-w-7xl mx-auto px-5 md:px-0 text-center">
                <h2 className="font-Graphik font-bold text-themeLightBlue text-2xl md:text-4xl w-3/4 md:w-full mx-auto">
                    Let's start with{' '}
                    <span className="text-themeBlue font-bold mt-4">
                        {' '}
                        Image Labeling
                    </span>
                </h2>

                <p className="text-center text-sm md:text-base font-Graphik mt-3 font-normal">
                    Draw boxes around the cars you see and the ad will close
                    <img
                        src="images/close.svg"
                        className="inline-block w-4 ml-[1px]"
                        alt=""
                    />
                </p>

                <p className="text-lg md:text-2xl text-themeBlue font-bold leading-5 mt-9">
                    You'll be redirected in 5 seconds!
                </p>
                <img
                    src="images/choosing.gif"
                    className="mx-auto text-center mt-3"
                    width="450"
                    alt=""
                />

                <p className="text-sm md:text-base text-themeLightBlue font-bold leading-5 mt-2 mb-5">
                    Clicking will never redirect you!
                </p>

                <NavLink
                    to="/model-trainer"
                    className="bg-themeLightBlue rounded-[5px] text-white font-Graphik font-medium px-10 py-3">
                    Let's Go ({secondsLeft})
                </NavLink>
            </div>
        </section>
    );
};

export default GameInformation;
