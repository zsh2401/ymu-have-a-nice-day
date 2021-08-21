import React from "react"
import { HWCenter } from "../../../../../sz-support"
export default function () {
    new Date().getDay()
    const day = "一二三四五六日"
    return <div style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "15px"
    }}>
        <h6>课程表<small> /周{day[(new Date().getDay() - 1) % 7]}</small></h6>
        <div style={{
            backgroundColor: "#FDF6F0",
            marginTop: "20px",
            borderRadius: "5px",
            padding: "15px"
        }}>
            <HWCenter style={{ height: "auto" }}>
                <p style={{ fontSize: "12px" }}>您还没有添加课程哦，别错过每一节精彩</p>
                <p style={{ color: "#F0955B", marginTop: "10px", fontWeight: "bolder", textAlign: "center" }}>现在去完善~</p>
            </HWCenter>
        </div>
    </div>
}