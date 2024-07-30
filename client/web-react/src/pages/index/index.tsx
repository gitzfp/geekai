import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useState, useCallback } from "react";

import TabAI from "./components/tabAI";
import TabRole from "./components/tabRole";
import TabScene from "./components/tabScene";
import TabMy from "./components/tabMy";

import "./index.scss";

export default function Index() {
    // const bears = useInfoStore((state: any) => state.bears)
    const [tabNum, setTabNum] = useState(0);
    const tabList = [
        { title: "TalkAI", Component: <TabAI /> },
        { title: "角色", Component: <TabRole /> },
        { title: "情景", Component: <TabScene /> },
        { title: "我的", Component: <TabMy /> },
    ];

    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View className="content">
            <View className="fragment">
                {tabList.map((item, index) => {
                    return (
                        <View
                            key={index}
                            className={
                                tabNum === index ? "tabContent" : "tabHide"
                            }
                        >
                            {item.Component}
                        </View>
                    );
                })}
            </View>
            <View className="bottomTabs">
                {tabList.map((item, index) => {
                    return (
                        <View
                            key={index}
                            className={
                                tabNum === index
                                    ? "bottomTab active"
                                    : "bottomTab"
                            }
                            onClick={() => {
                                setTabNum(index);
                            }}
                        >
                            {item.title}
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
