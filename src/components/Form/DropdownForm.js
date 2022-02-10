import { Field } from 'formik';

export const dropDownOptions = [
    { key: 'Select type of service', value: '' },
    { key: 'ROUTINE CHECK-UP', value: 'check-up' },
    { key: 'DENTAL SURGERY', value: 'surgery' },
    { key: 'ORTHODONTIC BRACES', value: 'orthodontics' },
    { key: 'DENTAL IMPLANTS', value: 'implants' },
    { key: 'TEETH WHITENING', value: 'whitening' },
    { key: 'HYGIENIST TREATMENT', value: 'hygienist' },
];

const DropdownForm = () => {
    return (
        <div>
            <label htmlFor='specialist'>List of our specialists</label>
            <Field component='select' id='specialist' name='specialist'>
                {dropDownOptions.map(({ key, value }) => {
                    return (
                        <option key={value} value={value}>
                            {key}
                        </option>
                    );
                })}
            </Field>
        </div>
    );
};

export default DropdownForm;
