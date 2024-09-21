import classNames from "classnames";

function FormInput({ value, password = false, onChange = () => {}, className, ...props }) {
    return (
        <input
            type={password ? 'password' : 'text'}
            value={value}
            onChange={e => onChange(e.target.value)}
            className={classNames([
                className || '',
                {
                    'form-element': true
                }
            ])}
            {...props}
        />
    );
}

export default FormInput;