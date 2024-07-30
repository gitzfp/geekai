import { View } from "@tarojs/components";
import { AtButton, AtInput, AtForm } from "taro-ui";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";

import { useState, useCallback } from "react";
import "./index.scss";

export default function Index() {
    const [username, setUsername] = useState("18575670125");

    const [show] = useModal({
        title: "Taro Hooks!",
        showCancel: false,
        confirmColor: "#8c2de9",
        confirmText: "支持一下",
        mask: true,
    });
    const [showToast] = useToast({ mask: true });

    const handleModal = useCallback(() => {
        show({ content: "不如给一个star⭐️!" }).then(() => {
            showToast({ title: "点击了支持!" });
        });
    }, [show, showToast]);

    return (
        <View className="aiContent">
            tabAi
            <AtInput
                name="username"
                border={false}
                title="手机号码"
                type="phone"
                placeholder="请输入手机号码"
                value={username}
                onChange={(val: string) => {
                    setUsername(val);
                }}
            />
            <AtButton
                onClick={() => {
                    handleModal();
                }}
            >
                点击试试
            </AtButton>
        </View>
    );
}
