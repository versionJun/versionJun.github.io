# nodejs

## Windows二进制文件(.zip)安装方式

### 下载解压

[nodejs](https://nodejs.org/zh-cn/download/)下载解压目录 例: `D:\Develop\node\node-v18.16.1-win-x64\`

### 配置环境

1. 安装目录下新建两个文件

    文件名|目录
    :-|:-|
    `node_global`|`D:\Develop\node\node-v18.16.1-win-x64\node-global`
    `node_cache`|`D:\Develop\node\node-v18.16.1-win-x64\node-cache`

2. 命令设置

    ```
    #设置全局安装路径
    npm config set prefix "D:\Develop\node\node-v18.16.1-win-x64\node-global"

    #设置缓存路径
    npm config set cache "D:\Develop\node\node-v18.16.1-win-x64\node-cache"

    ##查看npm配置
    npm config list
    ```

3. 环境变量

    变量名|变量值
    :-|:-|
    `NODE_PATH`(新增)|`D:\Develop\node\node-v18.16.1-win-x64`
    `Path`(追加)| `%NODE_PATH%`<br>`%NODE_PATH%\node-global`

4. nrm换源管理

    ```
    #安装nrm换源管理模块 - 全局
    npm install nrm -g

    #查看可选的源 带*号的是当前使用的源
    nrm ls

    #切换到taobao源
    nrm use taobao
    ```

### etc

- [查寻npm包](https://www.npmjs.com)

    ```
    #初始化 package.json
    npm init

    #卸载模块
    npm uninstall <package>
    ```