import GameInformation from 'Components/GameInformation/GameInformation';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            if (countDown === 0) {
                clearInterval(interval);
                navigate('/model-trainer');
            }
            const updatedCountDown = countDown - 1;
            setCountDown(updatedCountDown);
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);

    return (
        <>
            <GameInformation secondsLeft={countDown} />
        </>
    );
};

export default Home;
