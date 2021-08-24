import { useEffect, useMemo } from "react";

export default function <T>(setter: (value: T) => void, myValue: T, originalValue: T) {
    useEffect(() => {
        const oValue = originalValue;
        setter(myValue)
        return () => {
            setter(oValue)
        }
    }, [])
}