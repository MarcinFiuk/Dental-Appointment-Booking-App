import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropdownForm from './DropdownForm';

const SelectForm = (/*{ getProfession }*/) => {
    const navigate = useNavigate();

    const initialValues = {
        specialist: '',
    };

    const onSubmit = (value) => {
        navigate('/s', { state: value.specialist });
        // getProfession(value.specialist);
    };

    return (
        <Wrapper>
            <h2>Who would you like to meet? </h2>
            <p>Choose one specialist to see them availability </p>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {() => {
                    return (
                        <Form>
                            <DropdownForm />
                            <button type='submit'>confirm </button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default SelectForm;
