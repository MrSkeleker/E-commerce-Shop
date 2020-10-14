const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const requiredValidator = (error='Error') => (value) => value ? null : error;
export const emailValidator = (error='Error') => (value) => emailRegex.test(value) ? null : error;
export const matchValidator =  (error='Error', match) => (value) => {
    return value === match ? null : error;
}

export const validateInput = (input, validators) => {
    if(!validators) return;
    const errors = [];
    validators.forEach(validator => {
        const error = validator(input);
        if(error) errors.push(error);
    })
    return errors;
}

