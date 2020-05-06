export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = false;
    if (rules.required) {
        isValid = value.trim() !== '';
    }

    if (rules.maxLength && isValid) {
        isValid = value.length <= rules.maxLength;
    }

    if (rules.minLength && isValid) {
        isValid = value.length >= rules.minLength;
    }

    if (rules.isEmail && isValid) {
        const pattern = /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/;
        isValid = pattern.test(value);
    }

    if (rules.isNumberic && isValid) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value);
    }

    return isValid;
}