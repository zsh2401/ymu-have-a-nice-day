import React from "react"
import Head from "./Home/Head"
import { TabBar, WhiteSpace } from "antd-mobile"
//@ts-ignore
import css from "./index.module.css"
import { useState } from "react"
import Home from "./Home"
import JobHunting from "./JobHunting"
import Me from "./Me"
export default function () {
    const [selected, setSelected] = useState("home")
    return <div id={css.main}>
        {/* <div id={css.head}>
            <Head />
        </div>
        <div id={css.center}>
            <Apps />
        </div> */}
        <div id={css.center}>
            <TabBar >
                <TabBar.Item
                    key="home"
                    selected={selected === "home"}
                    onPress={() => setSelected("home")}
                    title="首页"
                >
                    <div style={{
                        overflowY: "visible",
                        height: "300px"
                    }}>
                        <Home />
                    </div>

                </TabBar.Item>

                <TabBar.Item
                    key="job"
                    selected={selected === "job"}
                    onPress={() => setSelected("job")}
                    title="找工作"
                >
                    <JobHunting />
                </TabBar.Item>

                <TabBar.Item
                    key="me"
                    selected={selected === "me"}
                    onPress={() => setSelected("me")}
                    title="我的"
                >
                    <Me />
                </TabBar.Item>
            </TabBar>
        </div>

    </div>
}