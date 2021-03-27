import React from 'react'
import LC from "../../../sz-support/ui/LodableComponent"
import { sleep } from '../../../sz-support/common'
import { Button, Card, Icon, ImagePicker, InputItem, Modal, NavBar, WhiteSpace, WingBlank } from "antd-mobile"
import QRCode from "qrcode.react"
//@ts-ignore
import css from "./display.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
interface Data {
  studentName: string;
  studentNumber: string;
  avatarSrc: string;
  grade: string;
  studentClass: string
}
function pad(num: number, n: number): string {
  //@ts-ignore
  return Array(n > num ? (n - ('' + num).length + 1) : 0).join(0) + num;
}
function toReadable(_s: number): string {
  const h = Math.floor(_s / 60 / 60)
  const m = Math.floor(_s / 60 % 60)
  const s = Math.floor(_s % 60);
  return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}`
}
export default function () {
  const [isOut, isOutSetter] = useState(true)
  return <div>
    <NavBar mode="light"
      leftContent={
        <div >
          <Icon size="lg" type="left"></Icon>
          <Icon onClick={() => window.location.reload()} size="lg" type="cross"></Icon>
        </div>
      }
    ><p onClick={() => {
      isOutSetter(!isOut)
    }}>{isOut ? "我要进" : "我要入"}</p> </NavBar>

    <HeadInfo />
    <WhiteSpace />
    <WhiteSpace />
    <WhiteSpace />
    <WhiteSpace /><WhiteSpace /><WhiteSpace />
    <Body />

  </div>
}
function Body() {
  const QR_CONTENT = "这种爱恋持续了那么久，而我一直在等你的回信。我的思念似乎说出口就会消失，仿佛微苦的巧克力。你经过我的身旁如同云朵，你的回答已被我知晓。你向我道着告别转身离去，我的爱恋，无论如何也终究传不到你。"
  const [temp, tempSetter] = useState(0)
  const [testTimeStr, testTimeStrSetter] = useState("")
  const [lastTime, lastTimeSetter] = useState(2 * 60 * 60)

  const fillTemp = useCallback(() => {
    const now = new Date();
    Modal.alert(<h4>现场体温</h4>, <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Icon style={{ background: "whitesmoke", color: "#EE8F4C" , borderRadius:"8px"}} size="lg" type="left"></Icon>
      <span style={{ background: "whitesmoke", marginLeft: "10px", marginRight: "10px", borderRadius:"8px", fontSize: "20px", width: "250px" }}>36.5</span>
      <Icon style={{ background: "whitesmoke", color: "#EE8F4C" , borderRadius:"8px"}} size="lg" type="right"></Icon>
    </div>, [

      { text: '取消', onPress: () => { } },
      {
        text: '确认', onPress: () => {
          tempSetter(36.5)
          testTimeStrSetter(`${now.getFullYear()}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(), 2)} ${pad(now.getHours(), 2)}:${pad(now.getMinutes(), 2)}:${pad(now.getSeconds(), 2)}`)
        }
      },
    ])

  }, [temp, tempSetter, testTimeStrSetter])


  useEffect(() => {
    setTimeout(() => {
      lastTimeSetter(lastTime - 1)
    }, 1000)
  }, [lastTime]);

  return <WingBlank>
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }}>
      <QRCode size={180} value={QR_CONTENT} />
    </div>

    <h3 style={{ padding: "10px", textAlign: "center" }}>出示给学校相关人员，扫一扫核验信息</h3>
    <p style={{ color: "gray", textAlign: "center" }}>剩余有效时间 {toReadable(lastTime)}</p>

    <WhiteSpace />
    {
      temp === 0 ?
        <Button onClick={fillTemp} style={{ background: "#EE8F4C", color: "white" }}>填写现场体温</Button> :
        <div style={{ paddingTop: "5px", paddingBottom: "5px", color: "white", textAlign: "center", backgroundColor: "#4DA16E" }}>
          <h1 style={{ padding: "0", margin: 0 }}>{temp}度</h1>
          <p>测量时间: {testTimeStr}</p>
        </div>
    }

  </WingBlank>
}

function BasicInfo() {
  const [l, lSetter] = useState("14")
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
  </>
}
function HeadInfo() {
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
      background: "linear-gradient(to bottom, #4DA16C, #BADECB)",
      borderRadius: "0 0 100% 100%"
    }}>

    </div>
  </div>
}
function InfoCard() {
  const [name, nameSetter] = useState("小轩在不在")
  const [num, numSetter] = useState("20202182407135")
  const [grade, gradeSetter] = useState("2020")
  const [sclass, sclassSetter] = useState("数学与计算机学院20级计算机科学与技术一班")
  const [avatarFiles, avatarFilesSetter] = useState<any>([])

  return <Card>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ImagePicker
        style={{
          width: "250px",
          height: "150px"
        }}
        disableDelete
        length={1} files={avatarFiles}
        selectable={avatarFiles.length < 1}
        onChange={(files) => { avatarFilesSetter(files) }}
        multiple={false}></ImagePicker>
      <div>
        <h3 onClick={() => nameSetter(prompt("修改姓名", name)!)} style={{ padding: "5px" }}>姓名：{name}</h3>
        <h3 onClick={() => numSetter(prompt("修改学号", num)!)} style={{ padding: "5px" }}>学号：{num}</h3>
        <h3 onClick={() => gradeSetter(prompt("修改年级", grade)!)} style={{ padding: "5px" }}>年级：{grade}级</h3>
        <h3 onClick={() => sclassSetter(prompt("修改院系", sclass)!)} style={{ padding: "5px" }}>院系：{sclass}</h3>
      </div>
    </div>
  </Card>
}