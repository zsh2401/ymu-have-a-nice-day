import React, { useCallback } from 'react';
import lf from "localforage";
import { useAsyncState } from "sz-react-support";
import { Card, ImagePicker } from "antd-mobile";
import { useState } from 'react';

export default function InfoCard() {

    const DB_KEY_STUDENT_NAME = "studentName"
    const DB_KEY_STUDENT_GRADE = "studentGrade"
    const DB_KEY_STUDENT_CLASS = "studentClass"
    const DB_KEY_STUDENT_ID = "studentId"

    const { state: studentName, setter: stuNameSetter } = useAsyncState<string>({
        initialState: "...",
        provider: async () => {
            const KEY = DB_KEY_STUDENT_NAME
            const DEFAULT_VALUE = "无名氏"
            let name = await lf.getItem<string>(KEY);
            if (name) {
                return name
            } else {
                await lf.setItem(KEY, DEFAULT_VALUE);
                return DEFAULT_VALUE
            }
        }
    });

    const { state: studentId, setter: stuIdSetter } = useAsyncState<string>({
        initialState: "...",
        provider: async () => {
            const KEY = DB_KEY_STUDENT_ID
            const DEFAULT_VALUE = "20202182507139"
            let name = await lf.getItem<string>(KEY);
            if (name) {
                return name
            } else {
                await lf.setItem(KEY, DEFAULT_VALUE);
                return DEFAULT_VALUE
            }
        }
    });

    const { state: studentGrade, setter: stuGradeSetter } = useAsyncState<string>({
        initialState: "...",
        provider: async () => {
            const KEY = DB_KEY_STUDENT_GRADE
            const DEFAULT_VALUE = "2020"
            let name = await lf.getItem<string>(KEY);
            if (name) {
                return name
            } else {
                await lf.setItem(KEY, DEFAULT_VALUE);
                return DEFAULT_VALUE
            }
        }
    });

    const { state: studentClass, setter: stuClassSetter } = useAsyncState<string>({
        initialState: "...",
        provider: async () => {
            const KEY = DB_KEY_STUDENT_CLASS
            const DEFAULT_VALUE = "数学与计算机学院20级计算机科学与技术一班"
            let name = await lf.getItem<string>(KEY)
            if (name) {
                return name
            } else {
                await lf.setItem(KEY, DEFAULT_VALUE)
                return DEFAULT_VALUE
            }
        }
    });
    const [avatarFiles, avatarFilesSetter] = useState<any>([]);

    const modifyStuName = useCallback(async () => {
        const value = prompt("修改姓名", studentName)
        if (value) {
            await lf.setItem(DB_KEY_STUDENT_NAME, value)
            stuNameSetter(value)
        }
    }, [studentName, stuNameSetter])

    const modifyId = useCallback(async () => {
        const value = prompt("修改学号", studentId)
        if (value) {
            await lf.setItem(DB_KEY_STUDENT_ID, value)
            stuIdSetter(value)
        }
    }, [studentId, stuIdSetter])

    const modifyGrade = useCallback(async () => {
        const value = prompt("修改年级", studentGrade)
        if (value) {
            await lf.setItem(DB_KEY_STUDENT_GRADE, value)
            stuGradeSetter(value)
        }
    }, [studentGrade, stuGradeSetter])

    const modifyClass = useCallback(async () => {
        const value = prompt("修改年级班级", studentClass)
        if (value) {
            await lf.setItem(DB_KEY_STUDENT_CLASS, value)
            stuGradeSetter(value)
        }
    }, [studentClass, stuClassSetter])

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
                onChange={(files) => { avatarFilesSetter(files); }}
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
