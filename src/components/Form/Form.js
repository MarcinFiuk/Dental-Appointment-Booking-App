import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import DropdownForm from './DropdownForm';

const SelectForm = () => {
    const initialValues = {
        specialist: '',
    };

    const onSubmit = (value) => console.log('value:', value);
    const handleChange = (value) => console.log('value:', value);
    return (
        <Wrapper>
            <h2>Who would you like to meet? </h2>
            <p>Choose one specialist to see them availability </p>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(formik) => {
                    return (
                        <Form>
                            <DropdownForm onChange={formik.handleChange} />
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
