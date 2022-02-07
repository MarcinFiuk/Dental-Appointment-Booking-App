import './App.css';
import Footer from './components/Footer/Footer';
import SelectForm from './components/Form/Form';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <main>
                <SelectForm />
            </main>
            <Footer />
        </>
    );
}

export default App;
