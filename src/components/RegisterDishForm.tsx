import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

export interface RegisterDishFormProps{
    className: string;
    children: React.ReactNode;
    name: string;
}

export function RegisterDishForm({className, children, name}: RegisterDishFormProps) {
    const {control} = useFormContext();
    return (
        <div className={className}>
            <Controller 
                control={control} 
                name={name} 
                render={({field}) => 
                    React.isValidElement(children) 
                    ? React.cloneElement(children, {...field})
                    : React.createElement("none")}
                />
        </div>
    )
}