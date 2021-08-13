import lf from "localforage"
import React, { useCallback, useEffect, useState } from "react"
export default function useCachedState<T>(key: string, initialValue: T | (() => T)):
    [T, (newValue: T) => void, () => void] {

    const [value, setter] = useState(initialValue)
    const cachedSetter = useCallback((newValue: T) => {
        lf.setItem(key, newValue).finally(() => {
            setter(newValue)
        })
    }, [key, initialValue])
    
    const refresh = useCallback(() => {
        (async () => {
            const v = await lf.getItem<T>(key)
            if (v === null) {
                await lf.setItem(key, initialValue)
            } else {
                setter(v)
            }
        })();
    }, [key])

    useEffect(() => {
        refresh()
    }, [key])

    return [value, cachedSetter, refresh]
}