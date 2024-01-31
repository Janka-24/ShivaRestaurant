import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
    const param = useParams();
    return (
        <div>
            <h1>Salut {param.nom}</h1>
        </div>
    );
}
