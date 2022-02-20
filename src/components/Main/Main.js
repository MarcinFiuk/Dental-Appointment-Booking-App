import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import DisplayData from '../DisplayData/DisplayData';
import SelectForm from '../Form/SelectForm';
import Profile from '../DisplayData/Profile';

const Main = () => {
    const [specialists, setSpecialists] = useState([]);

    const getProfessionHandler = (profession) => {
        setSpecialists(profession);
    };

    return (
        <main>
            <Routes>
                <Route path='/' element={<SelectForm />} />
                <Route path='specialists' element={<DisplayData />} />
                <Route path='specialists/:id' element={<Profile />} />
            </Routes>
        </main>
    );
};

export default Main;
