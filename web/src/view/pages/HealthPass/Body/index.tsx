import { Card, ImagePicker, WingBlank } from "antd-mobile"
import React from "react"
import { AppDataConsumer } from "../../../../App"
//@ts-ignore
import css from "./body.module.css"
export default function () {
    return <WingBlank>
        <AppDataConsumer>
            {
                ({ studentAvatar, setStudentAvatar, studentName, studentClass, studentId }) => <Card>
                    <div className={css.card}>
                        <div className={css.infoBox}>
                            <ImagePicker
                                style={{
                                    width: "135px",
                                    height: "135px"
                                }}
                                disableDelete
                                onImageClick={() => {
                                    setStudentAvatar([])
                                }}
                                length={1} files={studentAvatar}
                                selectable={studentAvatar.length < 1}
                                onChange={(files) => {
                                    //@ts-ignore
                                    setStudentAvatar(files);
                                }}
                                multiple={false}></ImagePicker>
                            <div className={css.studentTextInfo}>
                                <p>姓名：{studentName}</p>
                                <p>学号：{studentId}</p>
                                <p>院系：{studentClass}</p>
                            </div>
                        </div>
                    </div>

                </Card>
            }
        </AppDataConsumer>

    </WingBlank>
}