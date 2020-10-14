import { useState } from "react"
import { validateInput } from "../validator.util";

export const useForm = ({ initialState, onSubmit}) => {
    const [state, setState] = useState(initialState || {});

    const isValidForm = () => {
        let errors = [];
        for (let key in state) {
            errors = errors.concat(validateField(key));
        }
        return errors.length === 0;
    }

    const validateField = (name) => {
        const field = state[name];
        if(!('value' in field) || !('validators' in field)) return []; 
        const errors = validateInput(field.value, field.validators);
        setState(prev => ({
            ...prev,
            [name]: {
                ...field,
                error: errors ? errors[0] : null
            }
        }));
        return errors;
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        const field = state[name];
        if (field.error) {
            setState(prev => ({
                ...prev,
                [name]: {
                    ...field,
                    error: null,
                    value
                }
            }))
        } else {
            setState(prev => ({
                ...prev,
                [name]: {
                    ...field,
                    value
                }
            }))
        }
    }

    const handleBlur = (event) => {
        validateField(event.target.name)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValidForm()) return;
        onSubmit(state, setState);
    }

    return {
        state,
        handleChange,
        handleBlur,
        handleSubmit
    }
}