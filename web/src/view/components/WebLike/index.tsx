import { Icon, NavBar } from "antd-mobile";
import { IStdProps } from "sz-react-support";
import React, { useCallback } from "react"
import { useHistory } from "../../../sz-support";
export interface WebLikeProps extends IStdProps {
    title: string;
    onClickBack?: () => void
    onClickClose?: () => void
}
export default function WebLike(props: WebLikeProps) {
    const history = useHistory()

    const clickBack = useCallback(() => {
        if (props.onClickBack) {
            props.onClickBack()
        } else {
            history.goBack()
        }
    }, [history, props.onClickBack])

    const clickCross = useCallback(() => {
        if (props.onClickClose) {
            props.onClickClose()
        } else {
            history.push("/")
        }
    }, [history, props.onClickClose])

    return <div>
        <NavBar mode="light" leftContent={
            <div >
                <Icon onClick={clickBack} size="lg" type="left"></Icon>
                <Icon onClick={clickCross} size="lg" type="cross"></Icon>
            </div>} >
            {props.title}
        </NavBar>
        <div>
            {props.children}
        </div>
    </div >
}