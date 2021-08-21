import React, { useCallback } from "react"
import { Icon, NavBar } from "antd-mobile"
import { useState } from "react"
import { showAbout } from "../../../../common/util"
import lf from "localforage"

export default function () {

    const [clickTimes, clickTimesSetter] = useState(0)
    const [isOut, isOutSetter] = useState(true)

    const onClickBack = useCallback(() => {
        window.location.reload()
    }, [])

    const onClickNavbar = useCallback(() => {
        clickTimesSetter(0)
        clickTimesSetter(clickTimes + 1)
        if ((clickTimes + 1) % 7 === 0) {
            showAbout()
            clickTimesSetter(0)
        }
    }, [clickTimes, clickTimesSetter])

    const onClickCross = useCallback(() => {
        lf.clear()
        onClickBack()
    }, [onClickBack])

    return <NavBar  mode="light"
        leftContent={
            <div >
                <Icon onClick={onClickBack} size="lg" type="left"></Icon>
                <Icon onClick={onClickCross} size="lg" type="cross"></Icon>
            </div>
        }
    ><p onClick={() => {
        isOutSetter(!isOut)
    }}>{isOut ? "我要出" : "我要入"}</p> </NavBar>
}