import React, { useCallback } from "react"
import { Icon, NavBar } from "antd-mobile"
import { useState } from "react"
import lf from "localforage"
export default function () {
    const [isOut, isOutSetter] = useState(true)
    const reload = useCallback(() => {
        window.location.reload()
    }, [])
    const clear = useCallback(() => {
        lf.clear()
        reload()
    }, [reload])
    return <NavBar mode="light"
        leftContent={
            <div>
                <Icon onClick={reload} size="lg" type="left"></Icon>
                <Icon onClick={clear} size="lg" type="cross"></Icon>
            </div>
        }
    ><p onClick={() => {
        isOutSetter(!isOut)
    }}>{isOut ? "我要出" : "我要入"}</p> </NavBar>
}