import React from 'react';

export default function UseLocalStorage({ storageKey, initialValue = '' }) {
    const [value, setValue] = React.useState(() => {
        const storedValue = localStorage.getItem(storageKey);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    const updateStorageValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(storageKey, JSON.stringify(newValue));
        sessionStorage.setItem(storageKey, JSON.stringify(newValue));
    };

    return [value, updateStorageValue];
}
