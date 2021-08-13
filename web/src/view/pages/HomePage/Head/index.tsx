import React from "react"
//@ts-ignore
import css from "./head.module.css"
import useCachedState from "../../../../common/useCachedState"
import badge from "./ymu.png"
import topup from "./recharge.png"
import scan from "./scan.png"
import iconNotice from "./notice.png"
import { WingBlank } from "antd-mobile"
export default function Fuck() {
    const [stuName, stuNameSetter] = useCachedState("studentName", "呵呵呵")
    const [stuId, stuIdSetter] = useCachedState("studentName", "20202182507139")
    return <div>
        <div id={css["head"]}>
            <WingBlank>
                <div id={css.basicInfo}>
                    <div id={css.stuInfo}>
                        <img id={css.schoolBadge} src={badge}></img>
                        <div id={css.pInfo}>
                            <p id={css.schoolName} >云南民族大学</p>
                            <p id={css.name}>{stuName} {stuId}</p>
                        </div>
                    </div>
                    <div id={css.balance}>
                        <p id={css.balanceValue}>¥ 193.31</p>
                        <small id={css.balanceText}>账户余额</small>
                    </div>
                </div>

                <div id={css.quickAccess}>
                    <div>
                        <img id={css.quickAccessIcon} src={scan}></img>
                        <p id={css.quickAccessText}>扫一扫</p>
                    </div>

                    <div>
                        <img id={css.quickAccessIcon} src={topup}></img>
                        <p id={css.quickAccessText}>充值</p>
                    </div>
                </div>
                <div id={css.notices}>
                    <div className={css.noticeMessage}>
                        <img className={css.noticeIcon} src={iconNotice} />
                        <p className={css.noticeText}>您的临时出入申请已经审核通过</p>
                        <small className={css.noticeTime}>4天前</small>
                    </div>
                    <p id={css.more}>更多 </p>
                </div>

            </WingBlank>



        </div>

    </div>
}