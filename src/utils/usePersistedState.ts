import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { stat } from 'fs';

interface propsPersistence {
    key: string,
    initialState: any
}
type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function usePersistedState<T>({ key, initialState }: propsPersistence): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)
        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))

    }, [key, state])

    return [state, setState];

}
export default usePersistedState