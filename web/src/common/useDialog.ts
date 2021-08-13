import { useCallback } from "react"

export default function useDialog(tip: string, currentValue: string, setter: (newValue: string) => void) {
    return useCallback(async () => {
        const value = prompt(tip, currentValue)
        if (value !== null) {
            setter(value)
        }
    }, [currentValue, tip, setter])
}