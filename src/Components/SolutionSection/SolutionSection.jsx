import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTrainingDataImages } from 'Shared/Services/API/Api';
import { RectangleSelector } from 'react-image-annotation/lib/selectors';
import Annotation from 'react-image-annotation';

const SolutionSection = () => {
    const navigate = useNavigate();
    const [trainingImage, setTrainingImage] = useState(null);
    const [annotations, setAnnotations] = useState([]);
    const [annotation, setAnnotation] = useState({});

    useEffect(() => {
        getTrainingDataImages().then((data) => {
            setTrainingImage(data);
        });
    }, []);

    const onChange = (annotation) => {
        setAnnotation(annotation);
    };

    const onDelete = (annotation) => {
        const updatedAnnotations = [...annotations];
        let keepAnnotations = updatedAnnotations.filter((a) => {
            return a.data.id !== annotation.data.id;
        });
        setAnnotation({});
        setAnnotations(keepAnnotations);
    };

    const onSubmit = (annotation) => {
        const { geometry, data } = annotation;
        setAnnotation({});
        setAnnotations([
            ...annotations,
            {
                geometry,
                data: {
                    ...data,
                    id: Math.random()
                }
            }
        ]);
    };

    const onCompleteLabelingHandler = () => {
        if (trainingImage) {
            let requestPayload = { ...trainingImage, carLocations: [] };
            for (
                let annotationIndex = 0;
                annotationIndex < annotations.length;
                annotationIndex++
            ) {
                const { geometry } = annotations[annotationIndex];
                const top = parseFloat(geometry.y).toFixed(4);
                const left = parseFloat(geometry.x).toFixed(4);
                const bottom = parseFloat(geometry.y + geometry.height).toFixed(
                    4
                );
                const right = parseFloat(geometry.x + geometry.width).toFixed(
                    4
                );
                requestPayload = {
                    ...requestPayload,
                    carLocations: [
                        ...requestPayload.carLocations,
                        {
                            top,
                            left,
                            bottom,
                            right
                        }
                    ]
                };
            }

            console.log('HTTP Request Payload', requestPayload);
            navigate('/confirmation');
        }
    };

    const CustomContent = ({ annotation }) => {
        const { geometry } = annotation;
        return (
            <button
                key={annotation.data.id}
                style={{
                    left: `${geometry.x}%`,
                    top: `${geometry.y + geometry.height}%`
                }}
                className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded absolute"
                onClick={() => onDelete(annotation)}>
                DELETE
            </button>
        );
    };

    const CustomEditor = ({ annotation }) => {
        return (
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded mt-2"
                style={{
                    position: 'absolute',
                    left: annotation.geometry.x + '%',
                    top:
                        annotation.geometry.y + annotation.geometry.height + '%'
                }}
                onClick={() => onSubmit(annotation)}>
                SUBMIT
            </button>
        );
    };

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
                            <Annotation
                                src={`images/training-data/cars/${trainingImage.fileName}`}
                                alt="Training Model Cars"
                                annotations={annotations}
                                type={RectangleSelector.TYPE}
                                value={annotation}
                                showEditor={false}
                                onChange={onChange}
                                onSubmit={onSubmit}
                                renderContent={CustomContent}
                                renderEditor={(props) => (
                                    <CustomEditor {...props} />
                                )}
                                allowTouch
                            />
                        </div>
                    </div>
                )}
            </div>

            {annotations && annotations.length > 0 && (
                <div className="text-center">
                    <button
                        className="bg-themeLightBlue rounded-[5px] text-white font-Graphik font-medium px-10 py-3 my-3"
                        onClick={() => onCompleteLabelingHandler()}>
                        Done
                    </button>
                </div>
            )}
        </section>
    );
};

export default SolutionSection;
