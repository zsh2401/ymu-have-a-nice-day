import { WingBlank } from "antd-mobile"
import React from "react"
//@ts-ignore
import css from "./apps.module.css"
export default function () {
    const apps: App[] = []
    return <div>
        <WingBlank>
            {
                apps.map(app => <div>
                    
                </div>)
            }
        </WingBlank>
    </div>
}
interface App {
    icon: string
    label: string
    onClick: () => void
}