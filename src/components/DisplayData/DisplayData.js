import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import useFetchData from '../../hooks/useFetchData';
import { Flex } from './../../Style/Flex';
import InteractiveButton from '../../Style/InteractiveButton';

const DisplayData = () => {
    const location = useLocation();
    const data = useFetchData('specialists', location.state);

    return (
        <Flex gap='1.5rem' style={{ 'margin-block': '2rem' }}>
            {data.map(({ id, name, surname, availability }) => {
                return (
                    <Flex key={id}>
                        <StyledName>
                            {name} {surname}
                        </StyledName>
                        <InteractiveButton>check CV</InteractiveButton>
                        {availability.workAt.map(({ day, hour }) => {
                            return (
                                <div key={day}>
                                    <p>
                                        {day}: <span>{hour}</span>
                                        <InteractiveButton>
                                            book slot
                                        </InteractiveButton>
                                    </p>
                                </div>
                            );
                        })}
                    </Flex>
                );
            })}
        </Flex>
    );
};

const StyledName = styled.h3`
    --font-min: 15;
    --font-max: 30;
    font-size: calc(
        ((var(--font-min) / 16) * 1rem) + (var(--font-max) - var(--font-min)) *
            var(--fluid-bp)
    );
    color: var(--mistyBlueLight);
    -webkit-text-stroke: 1px black;
`;

export default DisplayData;
