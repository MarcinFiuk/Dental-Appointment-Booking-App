import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const InteractiveButton = ({ children }) => {
    return (
        <StyledInteractiveButton>
            {children}
            <span>
                <HiOutlineArrowNarrowRight
                    style={{
                        width: '100%',
                        height: '100%',
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
    border: none;
    border-radius: 1rem;
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
