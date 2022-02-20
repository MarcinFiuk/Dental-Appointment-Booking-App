import styled from 'styled-components';

export const Header2 = styled.h2`
    --font-min: 19;
    --font-max: 40;
    font-size: calc(
        ((var(--font-min) / 16) * 1rem) + (var(--font-max) - var(--font-min)) *
            var(--fluid-bp)
    );
    color: var(--mistyBlueLight);
    -webkit-text-stroke: 2px var(--black);
    text-decoration: underline;
`;

export const Header3 = styled.h3`
    --font-min: 16;
    --font-max: 32;
    font-size: calc(
        ((var(--font-min) / 16) * 1rem) + (var(--font-max) - var(--font-min)) *
            var(--fluid-bp)
    );
    color: var(--mistyBlueLight);
    -webkit-text-stroke: 1px var(--black);
`;
