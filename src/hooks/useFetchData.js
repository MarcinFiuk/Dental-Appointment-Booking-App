import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const useFetchData = (collectionName, typeOfSpecialist) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, collectionName),
            where('specializations', 'array-contains', typeOfSpecialist)
        );

        const fetchData = async () => {
            const arrWithSpecialists = [];

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const singleElement = { ...doc.data(), id: doc.id };
                arrWithSpecialists.push(singleElement);
            });

            setData(arrWithSpecialists);
        };

        fetchData();
    }, [collectionName, typeOfSpecialist]);

    return data;
};

export default useFetchData;
