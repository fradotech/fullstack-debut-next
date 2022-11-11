import React from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import PasswordInput from '../Inputs/PasswordInput.molecule';

type ControlledPasswordInputProps<T> = {
    placeholder?: string;
    title?: string;
    control: Control<T, any>;
    name: Path<T>;
};

const ControlledPasswordInput = <T,>({
    title,
    control,
    placeholder,
    name,
}: ControlledPasswordInputProps<T>): JSX.Element => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <PasswordInput
                    {...field}
                    title={title || name.charAt(0).toUpperCase() + name.slice(1)}
                    type="password"
                    placeholder={placeholder || title}
                    error={error}
                    value={field.value as unknown as never}
                />
            )}
        />
    );
};

export default ControlledPasswordInput;
