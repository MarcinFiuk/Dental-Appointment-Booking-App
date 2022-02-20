import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useFetchData from '../../hooks/useFetchData';
import { Flex } from '../../style/Flex';
import { Header2 } from '../../style/Headers';
import InteractiveButton from '../Buttons/InteractiveButton';
import ReturnButton from '../Buttons/ReturnButton';

const DisplayData = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const data = useFetchData(
        'specialists',
        'specializations',
        'array-contains',
        location.state
    );

    const getCvHandler = (id, surname) => {
        navigate(id, { state: surname });
    };

    return (
        <>
            <ReturnButton />
            <Flex gap='1.5rem' style={{ marginBottom: '2rem' }}>
                {data.map(({ id, name, surname, availability }) => {
                    return (
                        <Flex key={id}>
                            <Flex direction='row'>
                                <Header2>
                                    {name} {surname}
                                </Header2>
                                <InteractiveButton
                                    onClick={() => getCvHandler(id, surname)}
                                >
                                    About me
                                </InteractiveButton>
                            </Flex>
                            {availability.workAt.map(({ day, hour }) => {
                                return (
                                    <div key={day}>
                                        <Paragraph>
                                            {day}: <span>{hour} </span>
                                            <InteractiveButton>
                                                book slot
                                            </InteractiveButton>
                                        </Paragraph>
                                    </div>
                                );
                            })}
                        </Flex>
                    );
                })}
            </Flex>
        </>
    );
};

const Paragraph = styled.p`
    color: var(--mistyBlueLight);
    font-weight: bold;
    font-size: 1.1rem;
`;

export default DisplayData;
