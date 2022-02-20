import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const InteractiveButton = ({ children, onClick }) => {
    return (
        <StyledInteractiveButton onClick={onClick}>
            {children}
            <span>
                <HiOutlineArrowNarrowRight
                    style={{
                        fontSize: '20px',
                    }}
                />
            </span>
        </StyledInteractiveButton>
    );
};

const StyledInteractiveButton = styled.button`
    position: relative;
    background-color: var(--mistyBlueLight);
    border: 1px solid var(--black);
    border-radius: 0.3rem;
    font-size: 1.1rem;
    font-weight: normal;
    color: var(--black);
    width: 115px;
    text-indent: 0;
    transition: all 0.4s ease-in-out;

    span {
        opacity: 0;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-65%, -50%);
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        text-indent: -25px;
    }

    &:hover span {
        opacity: 1;
        transform: translate(-55%, -50%);
    }
`;

export default InteractiveButton;
