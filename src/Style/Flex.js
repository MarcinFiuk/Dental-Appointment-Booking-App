import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ direction }) => (direction ? direction : 'column')};
    gap: ${({ gap }) => (gap ? gap : '0.5rem')};
`;
