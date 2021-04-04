import React, { useEffect } from 'react'
import { WhiteSpace } from "antd-mobile"
import NavBar from "./NavBar"
import Body from './Body'
import HeadInfo from './HeadInfo'
import { showAboutAfterUpdated } from './util'
export default function () {

  useEffect(() => {
    showAboutAfterUpdated()
  }, [])

  return <div>
    <NavBar />
    <HeadInfo />
    <WhiteSpace />
    <WhiteSpace />
    <WhiteSpace />
    <WhiteSpace /><WhiteSpace /><WhiteSpace />
    <Body />
  </div>
}
