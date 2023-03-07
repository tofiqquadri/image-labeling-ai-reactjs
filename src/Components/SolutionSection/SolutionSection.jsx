import { useEffect, useState } from 'react';
import { getTrainingDataImages } from 'Shared/Services/API/Api';

const SolutionSection = () => {
    const [trainingImage, setTrainingImage] = useState(null);

    useEffect(() => {
        getTrainingDataImages().then((data) => {
            setTrainingImage(data);
        });
    }, []);

    return (
        <section id="choose" className="choose-section mt-20">
            <div className="max-w-7xl mx-auto px-5 md:px-0">
                <p className="font-Graphik font-bold text-themeLightBlue text-2xl md:text-4xl w-3/4 md:w-full mx-auto text-center">
                    Draw boxes around the cars
                </p>
                <p className="text-center choose-text text-sm md:text-base font-Graphik mt-3 font-normal md:w-3/4 mx-auto">
                    Identify cars in the image below. You can draw on the images
                    with cars and click on done.
                </p>

                {trainingImage && (
                    <div className="flex items-center justify-center flex-col md:flex-row mx-auto md:space-x-4 space-y-4 md:space-y-0 mt-10 mb-10 ">
                        <div className="shadow-md">
                            <img
                                width="340"
                                height="280"
                                src={`images/training-data/cars/${trainingImage.fileName}`}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="text-center">
                <button className="bg-themeLightBlue rounded-[5px] text-white font-Graphik font-medium px-10 py-3 my-3">
                    Done
                </button>
            </div>
        </section>
    );
};

export default SolutionSection;
