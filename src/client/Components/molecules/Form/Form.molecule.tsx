import React, { BaseSyntheticEvent } from 'react';
import RingLoader from '../../atoms/Loaders/RingLoader.atom';
import {
    FormButton,
    FormContainer,
    FormContent,
    FormFieldSet,
    FormMain,
    FormTitle
} from './Form.molecule.styled';

type FormProps = {
    children: React.ReactNode;
    title: string;
    isValid: boolean;
    onSubmit: (e?: BaseSyntheticEvent<any, any, any>) => Promise<void>;
    isLoading: boolean;
    buttonTitle?: string;
};

const Form = ({
    children,
    title,
    onSubmit,
    isLoading,
    isValid,
    buttonTitle,
}: FormProps): JSX.Element => {
    const submitButtonTitle = buttonTitle || 'Save';

    return (
        <FormContainer>
            <FormContent className="form__container">
                <FormTitle className="form__title">{title}</FormTitle>

                <FormMain onSubmit={onSubmit}>
                    <FormFieldSet>{children}</FormFieldSet>

                    <FormButton
                        className="button"
                        type="submit"
                        disabled={!isValid || isLoading}
                    >
                        {isLoading ? (
                            <RingLoader isLoading />
                        ) : (
                            submitButtonTitle
                        )}
                    </FormButton>
                </FormMain>
            </FormContent>
        </FormContainer>
    );
};

export default Form;
