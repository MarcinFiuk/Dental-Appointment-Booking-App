import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Main />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
