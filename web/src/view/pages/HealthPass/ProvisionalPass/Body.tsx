import React from 'react';
import { Button, Icon, Modal, WhiteSpace, WingBlank } from "antd-mobile";
import QRCode from "qrcode.react";
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { pad, showAbout, toReadable } from "../../../../common/util";

export default function Body() {
  const QR_CONTENT = "这种爱恋持续了那么久，而我一直在等你的回信。我的思念似乎说出口就会消失，仿佛微苦的巧克力。你经过我的身旁如同云朵，你的回答已被我知晓。你向我道着告别转身离去，我的爱恋，无论如何也终究传不到你。";
  const [temp, tempSetter] = useState("0");
  const [testTimeStr, testTimeStrSetter] = useState("");
  const [lastTime, lastTimeSetter] = useState(2 * 60 * 60);
  const onClickQRCode = useCallback(() => {
    showAbout()
  }, [])
  const randomTmp = (Math.random() * 0.5 + 36).toFixed(1)

  const fillTemp = useCallback(() => {
    const now = new Date();
    Modal.alert(<h4>现场体温</h4>, <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Icon style={{ background: "whitesmoke", color: "#FF7F3E", borderRadius: "8px" }} size="lg" type="left"></Icon>
        <span style={{ background: "whitesmoke", marginLeft: "10px", marginRight: "10px", borderRadius: "8px", fontSize: "20px", width: "250px" }}>{randomTmp}</span>
        <Icon style={{ background: "whitesmoke", color: "#FF7F3E", borderRadius: "8px" }} size="lg" type="right"></Icon>
      </div>
      <p style={{
        marginTop: "10px",
        textAlign: "center",
        color: "red",
        fontSize: "12px"
      }}>请务必如实填写现场体温</p>

    </div>, [
      { text: '取消', onPress: () => { } },
      {
        text: '确认', onPress: () => {

          tempSetter(randomTmp);
          testTimeStrSetter(`${now.getFullYear()}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(), 2)} ${pad(now.getHours(), 2)}:${pad(now.getMinutes(), 2)}:${pad(now.getSeconds(), 2)}`);
        }
      },
    ]);

  }, [temp, tempSetter, testTimeStrSetter]);


  useEffect(() => {
    setTimeout(() => {
      lastTimeSetter(lastTime - 1);
    }, 1000);
  }, [lastTime]);

  return <WingBlank>
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }}>
      <QRCode onClick={onClickQRCode} size={180} value={QR_CONTENT} />
    </div>

    <h3 style={{ padding: "10px", textAlign: "center" }}>出示给学校相关人员，扫一扫核验信息</h3>
    <p style={{ color: "gray", textAlign: "center" }}>剩余有效时间 {toReadable(lastTime)}</p>

    <WhiteSpace />
    {temp === "0" ?
      <Button onClick={fillTemp} style={{ background: "#FF7F3E", color: "white" }}>填写现场体温</Button> :
      <div style={{ paddingTop: "5px", paddingBottom: "5px", color: "white", textAlign: "center", backgroundColor: "#4DA16E" }}>
        <h1 style={{ padding: "0", margin: 0 }}>{temp}度</h1>
        <p>测量时间: {testTimeStr}</p>
      </div>}

  </WingBlank>;
}
