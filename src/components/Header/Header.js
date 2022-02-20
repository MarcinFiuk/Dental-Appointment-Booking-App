import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <h1>Dental practice "Healthy Tooth"</h1>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    color: var(--mistyBlueLight);
    background-color: var(--blueGray);
    padding-block: 2rem;

    h1 {
        --font-min: 24;
        --font-max: 48;
        font-size: calc(
            ((var(--font-min) / 16) * 1rem) +
                (var(--font-max) - var(--font-min)) * var(--fluid-bp)
        );
        text-align: center;
    }
`;

export default Header;
