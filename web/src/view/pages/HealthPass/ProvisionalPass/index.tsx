import React, { useContext } from "react"
import { useMemo } from "react"
import { useEffect } from "react"
import HealthPass, { HealthPassPageContext, HealthPassPageData } from "../"
import { AppDataConsumer, AppDataContext } from "../../../../App"
import useCurrent from "../../../../common/useCurrent"
import WebLike from "../../../components/WebLike"

export default function () {
    return <WebLike title="临时出入证">
        <div>Hehe</div>
    </WebLike>
}