import React from "react"
import Head from "./Head"
import Apps from "./Apps"
import { WhiteSpace, WingBlank } from "antd-mobile"
import News from "./News"
import CourseTab from "./CourseTab"
import { Carousel } from "antd"
import Ad from "./Ad"
export default function () {


    return <>
        <div style={{ backgroundColor: "#FCFCFC" }}>
            <Head />
            <Apps />
            <WingBlank>
                <Ad />
                <CourseTab />
                <News />
                <p style={{ textAlign: "center", fontWeight: "bolder" }}>Have a Nice Day!</p>
                <WhiteSpace />
            </WingBlank>
        </div>

    </>
}