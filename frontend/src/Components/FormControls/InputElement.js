const InputElement = (props) => {
    return (
        <>
            <label htmlFor="inputName" className="form-label">{props.label}</label>
            {/* <input type="text" className="form-control" id="inputName" placeholder="Name" /> */}
            {props.children}
            <div className="validation">
                {props.validation?.required && <div className="invalid-feedback" >Required!</div>}
                {props.validation?.minLength && <div className="invalid-feedback" >Min Length Required!</div>}
                {props.validation?.maxLength && <div className="invalid-feedback" >Max Length Exceed!</div>}
            </div>
        </>
    )

}

export default InputElement;