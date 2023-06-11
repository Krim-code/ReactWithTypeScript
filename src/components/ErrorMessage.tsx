import React from 'react';
interface ErrorMassageProps{
    error: string
}
const ErrorMessage = ({error}:ErrorMassageProps) => {
    return (
        <div>
            <p className={'text-center text-red-400'}>
                {error}
            </p>
        </div>
    );
};

export default ErrorMessage;