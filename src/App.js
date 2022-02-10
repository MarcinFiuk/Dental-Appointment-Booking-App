import './App.css';
import DisplayData from './components/DisplayData/DisplayData';
import Footer from './components/Footer/Footer';
import SelectForm from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <main>
                <SelectForm />
                <DisplayData />
            </main>
            <Footer />
        </>
    );
}

export default App;
