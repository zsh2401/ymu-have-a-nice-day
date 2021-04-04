import React, { useCallback, useEffect } from "react"
import { Icon, Modal, NavBar } from "antd-mobile"
import { useState } from "react"
import { showAbout, showAboutAfterUpdated } from "./util"
import lf from "localforage"

export default function () {

    const [clickTimes, clickTimesSetter] = useState(0)
    const [isOut, isOutSetter] = useState(true)

    const reload = useCallback(() => {
        window.location.reload()
    }, [])
    
    const click = useCallback(() => {
        clickTimesSetter(clickTimes + 1)
        if ((clickTimes + 1) % 7 === 0) {
            showAbout()
            clickTimesSetter(0)
        }
    }, [clickTimes, clickTimesSetter])

    const clear = useCallback(() => {
        lf.clear()
        reload()
    }, [reload])

    return <NavBar onClick={click} mode="light"
        leftContent={
            <div >
                <Icon onClick={reload} size="lg" type="left"></Icon>
                <Icon onClick={clear} size="lg" type="cross"></Icon>
            </div>
        }

    ><p onClick={() => {
        isOutSetter(!isOut)
    }}>{isOut ? "我要出" : "我要入"}</p> </NavBar>
}