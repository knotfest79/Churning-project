import { useEffect, useState } from 'react'

export function useLocalStorageState(initialState, key) {

    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;

    });
    useEffect(() => {
        const storedValue = JSON.stringify(value);
        if (localStorage.getItem(key) !== storedValue) {
            localStorage.setItem(key, storedValue);
        }
    }, [value, key]);


    return [value, setValue];
}
