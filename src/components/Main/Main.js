import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import DisplayData from '../DisplayData/DisplayData';
import SelectForm from '../Form/SelectForm';

const Main = () => {
    const [specialists, setSpecialists] = useState([]);

    const getProfessionHandler = (profession) => {
        setSpecialists(profession);
    };

    return (
        <main>
            <Routes>
                <Route
                    path='/'
                    element={
                        <SelectForm
                            getProfession={(profession) =>
                                getProfessionHandler(profession)
                            }
                        />
                    }
                />

                <Route
                    path='s'
                    element={<DisplayData profession={specialists} />}
                />
            </Routes>
        </main>
    );
};

export default Main;
