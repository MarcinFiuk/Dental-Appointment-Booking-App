import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const useFetchData = (collectionName, typeOfSpecialist) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, collectionName),
            where('specializations', 'array-contains', 'orthodontics')
        );

        const fetchData = async () => {
            setData([]);

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setData((prev) => [...prev, doc.data()]);
            });
        };

        fetchData();
    }, [collectionName]);

    return data;
};

export default useFetchData;
