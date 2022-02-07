import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2022 education project.</p>
            <h3> Marcin Fiuk</h3>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    color: var(--mistyBlueLight);
    background-color: var(--blueGray);
    padding-block: 2rem;
    p,
    h3 {
        --f--2-min: 14.58;
        --f--2-max: 20.48;
        font-size: calc(
            ((var(--f--2-min) / 16) * 1rem) +
                (var(--f--2-max) - var(--f--2-min)) * var(--fluid-bp)
        );
    }
`;

export default Footer;
