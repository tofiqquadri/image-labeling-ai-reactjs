import { BrowserRouter } from 'react-router-dom';
import Container from 'Containers/index';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App flex flex-col justify-between flex-1">
                <Container />
            </div>
        </BrowserRouter>
    );
};

export default App;
