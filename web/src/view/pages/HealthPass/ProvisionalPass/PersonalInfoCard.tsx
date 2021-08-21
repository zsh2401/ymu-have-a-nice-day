import React, { useCallback } from 'react';
import lf from "localforage";
import { useAsyncState } from "sz-react-support";
import { Card, ImagePicker } from "antd-mobile";
import { useState } from 'react';
import useCachedState from '../../../../common/useCachedState';
import useDialog from '../../../../common/useDialog';


export default function InfoCard() {

    const DB_KEY_STUDENT_NAME = "studentName"
    const DB_KEY_STUDENT_GRADE = "studentGrade"
    const DB_KEY_STUDENT_CLASS = "studentClass"
    const DB_KEY_STUDENT_ID = "studentId"
    const DB_KEY_AVATAR = "avatar"

    const [studentName, stuNameSetter] = useCachedState(DB_KEY_STUDENT_NAME, "无名氏")
    const [studentId, stuIdSetter] = useCachedState(DB_KEY_STUDENT_ID, "20202182507139")
    const [studentGrade, stuGradeSetter] = useCachedState(DB_KEY_STUDENT_GRADE, "2020")
    const [studentClass, stuClassSetter] = useCachedState(DB_KEY_STUDENT_CLASS, "数学与计算机学院20级计算机科学与技术一班")
    const [avatarFiles, avatarFilesSetter] = useCachedState(DB_KEY_AVATAR, [])

    const modifyStuName = useDialog("修改姓名", studentName, stuNameSetter)
    const modifyId = useDialog("修改学号", studentId, stuIdSetter)
    const modifyGrade = useDialog("修改年级", studentGrade, stuGradeSetter)
    const modifyClass = useDialog("修改班级", studentClass, stuClassSetter)

    return <Card>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ImagePicker
                style={{
                    width: "250px",
                    height: "150px"
                }}
                disableDelete
                onImageClick={() => {
                    avatarFilesSetter([])
                }}
                length={1} files={avatarFiles}
                selectable={avatarFiles.length < 1}
                onChange={(files) => {
                    //@ts-ignore
                    avatarFilesSetter(files);
                }}
                multiple={false}></ImagePicker>
            <div>
                <h3 onClick={modifyStuName} style={{ padding: "5px" }}>姓名：{studentName}</h3>
                <h3 onClick={modifyId} style={{ padding: "5px" }}>学号：{studentId}</h3>
                <h3 onClick={modifyGrade} style={{ padding: "5px" }}>年级：{studentGrade}级</h3>
                <h3 onClick={modifyClass} style={{ padding: "5px" }}>院系：{studentClass}</h3>
            </div>
        </div>
    </Card>;
}
