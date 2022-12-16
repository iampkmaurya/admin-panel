const isRequired = (value) => {
    return { required: !value };
}
const isMinLength = (value, minLength = 5) => {
    return { minLength: value.length < minLength };
}
const isMaxLength = (value, maxLength) => {
    return { maxLength: value.length > maxLength };
}

export { isRequired, isMinLength, isMaxLength }

//  { required: true }

// { minLength: true }

//{ ...{ required: true }, ...{ minLength: true }  }  => { required: true, minLength: true }

