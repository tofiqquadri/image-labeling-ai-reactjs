import { Route, Routes } from 'react-router-dom';
import ModelTrainer from 'Containers/ModelTrainer/ModelTrainer';
import Home from 'Containers/Home/Home';
import Layout from 'Containers/Layout/Layout';
import Confirmation from 'Containers/Confirmation/Confirmation';

const pagesData = [
    {
        path: '',
        element: <Home />,
        title: 'home'
    },
    {
        path: 'model-tainer',
        element: <ModelTrainer />,
        title: 'ModelTrainer'
    },
    {
        path: 'confirmation',
        element: <Confirmation />,
        title: 'Thank You'
    }
];

const Container = () => {
    const pageRoutes = pagesData.map((props, pageIndex) => {
        return <Route {...props} key={props.title} />;
    });

    return (
        <Layout>
            <Routes>{pageRoutes}</Routes>
        </Layout>
    );
};

export default Container;
