import React from 'react'
import DebugMx from '../../../sz-support/common/debug-mx'
import IStdProps from '../../../sz-support/common/IStdProps'
import Header from "./Header"
import Footer from "./Footer"
//@ts-expect-error
import css from "./index.css"
export default function (props: IStdProps) {
    return <div>
        <div className={css.layout}>

            <Header className={css.header} />

            <div className={css.body}>
                {props.children}
            </div>

            <Footer className={css.footer} />
        </div>
    </div>
}