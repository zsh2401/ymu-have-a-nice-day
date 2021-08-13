import React, { useEffect } from 'react'
import { WhiteSpace } from "antd-mobile"
import NavBar from "./NavBar"
import Body from './Body'
import HeadInfo from './HeadInfo'
export default function () {

  return <div>
    <NavBar />
    <HeadInfo />
    <WhiteSpace /><WhiteSpace />
    <Body />
  </div>
}
