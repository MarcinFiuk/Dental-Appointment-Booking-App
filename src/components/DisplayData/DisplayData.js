import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

const DisplayData = (/*{ profession }*/) => {
    const location = useLocation();
    const data = useFetchData('specialists', location.state);

    return (
        <div>
            {data.map(({ id, name, surname, availability }) => {
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <h3>{surname}</h3>

                        {availability.workAt.map(({ day, hour }) => {
                            return (
                                <div key={day}>
                                    <p>
                                        {day}: <span>{hour}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default DisplayData;
