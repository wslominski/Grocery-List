import * as React from 'react';
import {useForm, FormProvider} from 'react-hook-form';

export interface DishFormProps {
    children?: React.ReactNode;
    className?: string;
    onSubmit?: any;
    defaultValues?: any;
}

export function DishForm({className, children, onSubmit, defaultValues}: DishFormProps, ref: React.Ref<unknown> | undefined) {
    const methods = useForm({defaultValues});
    const {handleSubmit, reset} = methods;

    const handleFormSubmit = handleSubmit((data) => {
        onSubmit && onSubmit(data);
    })

    React.useEffect(() => {
        reset(defaultValues);
    },[defaultValues, reset])

    return (
        <div>
            <FormProvider   {...methods}>
                <form className={className} onSubmit={handleFormSubmit}>
                    {children}
                </form>
            </FormProvider>
        </div>
    )
}