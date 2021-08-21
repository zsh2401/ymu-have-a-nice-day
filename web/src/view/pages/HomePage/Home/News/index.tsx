import { Divider } from "antd"
import React from "react"
export default function () {
    return <div style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "15px",
        marginTop: "10px",
        marginBottom: "10px"
    }}>
        <h6>校园头条</h6>
        {
            articles.map(article => {
                return <div key={article.title}>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "10px",
                            height: "55px",
                        }
                    }>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            <p style={{
                                // fontSize: "15px",
                                fontWeight: "bolder"
                            }}>{article.title}</p>
                            <p style={{
                                fontSize: "11px",
                                color: "gray"
                            }}>{article.read / 1000}k阅读 {article.houursAgo}小时前</p>
                        </div>
                        <img src={article.banner} style={{
                            height: "55px",
                            width: "55px",
                            borderRadius: "5px"
                        }} />
                    </div>
                    <Divider />
                </div>
            })
        }
        <p style={{ textAlign: "center", color: "#F0955B" }}>查看更多</p>
    </div>
}
const articles: Article[] = [
    {
        title: "做你自己，因为别人都有人做了",
        banner: "https://th.wallhaven.cc/small/x8/x88o53.jpg",
        read: 1780,
        houursAgo: 6
    },
    {
        title: "我的嘴角有些酸，你说这是想哭还是笑？",
        banner: "https://th.wallhaven.cc/small/x8/x88o53.jpg",
        read: 1780,
        houursAgo: 6
    },
    {
        title: "我所有可笑的时间里，总会有那么一刻",
        banner: "https://th.wallhaven.cc/small/x8/x88o53.jpg",
        read: 1031,
        houursAgo: 6
    },
    {
        title: "精彩纷呈，梦想已成真",
        banner: "https://th.wallhaven.cc/small/x8/x88o53.jpg",
        read: 1125,
        houursAgo: 6
    },

]
interface Article {
    title: string
    banner: string
    read: number
    houursAgo: number
}