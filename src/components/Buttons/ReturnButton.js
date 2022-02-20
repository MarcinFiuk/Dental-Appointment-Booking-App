import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';

const ReturnButton = () => {
    const navigate = useNavigate();

    return (
        <ReturnButtonStyled onClick={() => navigate(-1)}>
            <HiOutlineArrowCircleLeft />
        </ReturnButtonStyled>
    );
};
const ReturnButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    font-size: 2.4rem;
`;

export default ReturnButton;
