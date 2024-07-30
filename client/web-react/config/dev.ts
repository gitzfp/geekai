import type { UserConfigExport } from "@tarojs/cli";

export default {
    logger: {
        quiet: false,
        stats: true,
    },
    mini: {},
    h5: {
        devServer: {
            port: 8888, // 指定H5项目运行的端口号为8081
            // ... 其他devServer配置 ...
        },
    },
} satisfies UserConfigExport;
