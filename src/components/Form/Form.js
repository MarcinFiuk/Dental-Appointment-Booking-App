import { useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import DropdownForm from './DropdownForm';

const SelectForm = () => {
    const [formValue, setFormValue] = useState('');

    const initialValues = {
        specialist: '',
    };

    const onSubmit = (value) => {
        setFormValue(value);
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
