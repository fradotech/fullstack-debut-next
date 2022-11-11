import React, { forwardRef, LegacyRef } from 'react';
import { FieldError } from 'react-hook-form';
import InputWrapper from '../../atoms/Inputs/InputWrapper.atom';
import {
    InvisibleEye,
    PasswordInputContainer,
    VisibleEye
} from './PasswordInput.molecule.styled';
import { Input } from './TextInput.molecule.styled';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError;
    title: string;
};

const PasswordInput: React.FC<PasswordInputProps> = forwardRef(
    (
        {
            placeholder,
            error,
            title,
            name,
            value,
            onChange,
            onBlur,
            ...rest
        }: PasswordInputProps,
        ref: LegacyRef<HTMLInputElement>,
    ) => {
        const [isShow, setIsShow] = React.useState(false);

        return (
            <InputWrapper title={title} errorMessage={error?.message}>
                <PasswordInputContainer>
                    <Input
                        {...rest}
                        className="field__input"
                        type={isShow ? 'text' : 'password'}
                        placeholder={placeholder}
                        value={value || ''}
                        onChange={onChange}
                        name={name}
                        onBlur={onBlur}
                        ref={ref as any}
                    />

                    {!isShow ? (
                        <VisibleEye onClick={() => setIsShow(true)} />
                    ) : (
                        <InvisibleEye onClick={() => setIsShow(false)} />
                    )}
                </PasswordInputContainer>
            </InputWrapper>
        );
    },
);

export default PasswordInput;
