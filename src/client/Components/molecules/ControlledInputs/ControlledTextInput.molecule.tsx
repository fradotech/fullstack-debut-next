import React from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import TextInput from '../Inputs/TextInput.molecule';

type ControlledTextInputProps<T> = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
    placeholder?: string;
    title?: string;
    control: Control<T, any>;
    name: Path<T>;
};

const ControlledTextInput = <T,>({
    title,
    type = 'text',
    control,
    placeholder,
    name,
    ...rest
}: ControlledTextInputProps<T>): JSX.Element => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextInput
                    {...field}
                    {...rest}
                    title={title || name.charAt(0).toUpperCase() + name.slice(1)}
                    type={type}
                    placeholder={placeholder || title}
                    error={error}
                    value={field.value as unknown as never}
                />
            )}
        />
    );
};

export default ControlledTextInput;
