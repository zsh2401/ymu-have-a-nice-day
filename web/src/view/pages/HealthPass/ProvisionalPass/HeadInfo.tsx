import React from 'react';
import { WhiteSpace, WingBlank } from "antd-mobile";
import { useState } from 'react';
import InfoCard from './PersonalInfoCard';
import useCachedState from '../../../../common/useCachedState';
import useDialog from '../../../../common/useDialog';
import { useCallback } from 'react';
interface BasicInfoProps {
  gateName: string;
  onClick: () => void;
}
function BasicInfo(props: BasicInfoProps) {
  const [l, lSetter] = useCachedState("qk", "3")
  const modifier = useDialog("缺卡几天？", l, lSetter)
  return <>
    <p style={{ color: "white", paddingTop: "10px" }}>云南民族大学</p>
    <h2 onClick={props.onClick} style={{ color: "white", paddingTop: "10px" }}>{props.gateName}</h2>
    <p style={{ color: "white", paddingTop: "10px", paddingBottom: "5px" }}>近来14日健康打卡&nbsp;正常&nbsp;&nbsp;&gt;&nbsp;&nbsp;
      <span onClick={modifier} style={{
        border: "1px solid white",
        borderRadius: "10px",
        // fontSize: "12px",
        paddingLeft: "6px",
        paddingRight: "6px"
      }}> 缺卡{l}天
      </span>
    </p>
  </>;
}
export default function HeadInfo() {
  const gates = ["雨花校区-1号门", "图书馆-E区-第一自习室（侧门）"]
  const [gateIndex, gateIndexSetter] = useState(0)
  const onGateClicked = useCallback(() => {
    gateIndexSetter((gateIndex + 1) % gates.length)
  }, [gateIndex, gateIndexSetter, gates])
  return <div>

    <div style={{
      position: "absolute",
      width: "100%",
      height: "200px",
      zIndex: -100,
      background: "linear-gradient(to bottom, #27B56B, #7FD3A7)",
      borderRadius: "0 0 100% 100%",
    }}>
    </div>

    <div>
      <WhiteSpace />
      <WingBlank>
        <BasicInfo onClick={onGateClicked} gateName={gates[gateIndex]} />
        <WhiteSpace />
        <InfoCard />
      </WingBlank>
    </div>

  </div>;
}
