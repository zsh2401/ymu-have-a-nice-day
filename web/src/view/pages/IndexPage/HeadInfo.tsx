import React from 'react';
import { WhiteSpace, WingBlank } from "antd-mobile";
import { useState } from 'react';
import InfoCard from './PersonalInfoCard';

function BasicInfo() {
  const [l, lSetter] = useState("14");
  return <>
    <p style={{ color: "white", paddingTop: "10px" }}>云南民族大学</p>
    <h3 style={{ color: "white", paddingTop: "10px" }}>雨花校区-1号门</h3>
    <p style={{ color: "white", paddingTop: "10px", paddingBottom: "5px" }}>近来14日健康打卡&nbsp;正常&nbsp;&nbsp;&gt;&nbsp;&nbsp;
    <span onClick={() => lSetter(prompt("缺卡几天？")!)} style={{
        border: "1px solid white",
        borderRadius: "10px",
        fontSize: "12px",
        paddingLeft: "6px",
        paddingRight: "6px"
      }}> 缺卡{l}天
    </span>
    </p>
  </>;
}
export default function HeadInfo() {
  return <div>
    <div>
      <WhiteSpace />
      <WingBlank>
        <BasicInfo />
        <WhiteSpace />
        <InfoCard />
      </WingBlank>
    </div>

    <div style={{
      marginTop: "-250px", width: "100%", height: "200px",
      zIndex: -10,
      background: "linear-gradient(to bottom, #27B56B, #7FD3A7)",
      borderRadius: "0 0 100% 100%"
    }}>
    </div>
  </div>;
}
