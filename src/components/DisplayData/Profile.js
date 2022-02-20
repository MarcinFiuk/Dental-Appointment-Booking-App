import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useFetchData from './../../hooks/useFetchData';
import ReturnButton from '../Buttons/ReturnButton';

import { Flex } from './../../style/Flex';
import { Header2, Header3 } from './../../style/Headers';

const Profile = () => {
    const location = useLocation();

    const data = useFetchData(
        'SpecialistsInfo',
        'surname',
        '==',
        location.state
    );

    return (
        <>
            <ReturnButton />

            {data.map((element) => {
                const { id, photo, cv, name, surname } = element;
                const { education, internship, work, hobby } = cv;

                return (
                    <Flex direction='row' key={id}>
                        <div>
                            <Header2>
                                {name} {surname}
                            </Header2>
                            <Header3>Education:</Header3>
                            {education.map((el, index) => {
                                return (
                                    <Paragraph key={index}>
                                        {el.schoolName}: {el.years}
                                    </Paragraph>
                                );
                            })}
                            <Header3>Internship:</Header3>
                            {internship.map((el, index) => {
                                return (
                                    <Paragraph key={index}>
                                        {el.placeName}: {el.years}
                                    </Paragraph>
                                );
                            })}
                            <Header3>Work:</Header3>
                            {work.map((el, index) => {
                                return (
                                    <Paragraph key={index}>
                                        {el.placeName}: {el.years}
                                    </Paragraph>
                                );
                            })}
                            <Header3>Hobby:</Header3>
                            {hobby.map((el, index) => {
                                return <Paragraph key={index}>{el}</Paragraph>;
                            })}
                        </div>
                        <Photo src={photo} alt='miniature' />
                    </Flex>
                );
            })}
        </>
    );
};

const Paragraph = styled.p`
    color: var(--mistyBlueLight);
    font-weight: bold;
    font-size: 1.1rem;
`;

const Photo = styled.img`
    width: 320px;
`;

export default Profile;
