import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Marketing() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Nos services de Marketing</h1>
        </div>
    );
}