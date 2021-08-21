import { Col, Row } from "antd"
import { WhiteSpace, WingBlank } from "antd-mobile"
import React from "react"
//@ts-ignore
import css from "./apps.module.css"
import icon from "../Head/ymu.png"
import { useHistory } from "../../../../../sz-support"
const apps: App[] = [
    {
        label: "健康打卡",
    },
    {
        label: "健康返校",
        onClick: () => alert()
    },
    {
        label: "访客审核",
    },
    {
        label: "健康助手",
    },
    {
        label: "物联网-智能",
    },
    {
        label: "健康出入证",
        onClick: () => useHistory().push("/health-pass")
    },
    {
        label: "校历",
    },
    {
        label: "全部应用",
    },
]
export default function () {

    return <div>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
            <Row justify="space-between">
                {
                    apps.map(app => <Col key={app.label} onClick={app.onClick} className={css.appBox} span={5}>
                        <div className={css.appBoxInner}>
                            <img className={css.appIcon} src={app.icon ?? icon}></img>
                            <p className={css.appLabel}>{app.label}</p>
                        </div>
                    </Col>)
                }
            </Row>
        </WingBlank>
    </div>
}
interface App {
    icon?: string
    label: string
    onClick?: () => void
}