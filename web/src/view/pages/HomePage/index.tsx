import React from "react"
import Head from "./Head"
import Apps from "./Apps"
import { TabBar, WhiteSpace } from "antd-mobile"
//@ts-ignore
import css from "./index.module.css"
export default function () {
    return <div id={css.main}>
        <div id={css.head}>
            <Head />
        </div>
        <div id={css.center}>
            <Apps />
        </div>
        <div id={css.bottom}>
            <TabBar>
                <TabBar.Item
                    title="首页"
                />
                 <TabBar.Item
                    title="找工作"
                />
                 <TabBar.Item
                    title="我的"
                />
            </TabBar>
        </div>

    </div>
}