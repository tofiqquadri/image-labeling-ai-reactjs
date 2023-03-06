import { BrowserRouter } from 'react-router-dom';
import Container from 'Containers/index';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Container />
            </div>
        </BrowserRouter>
    );
};

export default App;
