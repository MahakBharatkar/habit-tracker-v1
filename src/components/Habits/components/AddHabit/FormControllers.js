import React from 'react';
import { Controller } from 'react-hook-form';
export const InputControl = ({ control, name, rules, ...props }) => (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => <input {...field} {...props} />}
    />
);

export const TextareaControl = ({ control, name, rules, ...props }) => (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => <textarea {...field} {...props} />}
    />
);