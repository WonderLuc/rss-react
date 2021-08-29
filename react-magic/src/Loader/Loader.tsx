import React from 'react';
import './style.scss';

export default function Loader(): JSX.Element {
    return (
        <div className="loader">
            <img className="loader__icon" src="./loader.svg" alt="loader" />
        </div>
    );
}
