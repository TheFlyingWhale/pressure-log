import { InputContainer, InputForm } from "./inputStyle";

export const Input = props => {
    return(
        <InputContainer>
            <InputForm 
                value={props.value}
                disabled={props.disabled}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
            />
        </InputContainer>
    );
}