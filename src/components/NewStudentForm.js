import { useState } from 'react';
import StudentList from './StudentList';
import Student from './Student';
import PropTypes from 'prop-types';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: ''
    });

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value
        })
    };

    const NewStudentForm = (props) => {
        // ...
    };
    
    NewStudentForm.propTypes = {
        addStudentCallback: PropTypes.func.isRequired
    };

    const onFormSubmit = (event) => {
    };



    
    };

export default NewStudentForm;