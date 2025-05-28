// src/components/Logo.jsx

import React from 'react';

export default function Logo() {
    return (
        <div className="flex items-center">
            <img src= "/img/header1.png" alt="Sedap Logo" className="h-10" />
            <span className="ml-3 font-bold text-xl text-green-700">Oganik</span>
        </div>
    );
}
