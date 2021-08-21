import { Carousel } from "antd"
import React from "react"
export default function () {
    return <Carousel autoplay effect="scrollx" style={{ height: "100px", marginBottom: "10px" }}>
        <img src="https://th.wallhaven.cc/lg/pk/pkw6y3.jpg"></img>
        <img src="https://th.wallhaven.cc/small/rd/rddgwm.jpg"></img>
    </Carousel>
}