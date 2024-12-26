# Nodejs

## Nodejs常用库

[查寻npm包](https://www.npmjs.com)

> - [axios](https://www.npmjs.com/package/axios)<sup>[[Official](https://axios-http.com/)]</sup><sup>[[GitHub](https://github.com/axios/axios)]</sup> - Promise HTTP 
> - [tough-cookie](https://www.npmjs.com/package/tough-cookie)<sup>[[GitHub](https://github.com/salesforce/tough-cookie)]</sup> - RFC 6265 Cookies and CookieJar for Node.js
> - [axios-cookiejar-support](https://www.npmjs.com/package/axios-cookiejar-support)<sup>[[GitHub](https://github.com/3846masa/axios-cookiejar-support)]</sup> - Add tough-cookie support to axios
> - [dayjs](https://www.npmjs.com/package/dayjs)<sup>[[Official](https://day.js.org/)]</sup><sup>[[GitHub](https://github.com/iamkun/dayjs)]</sup> - 日期时间
> - [cheerio](https://www.npmjs.com/package/cheerio)<sup>[[Official](https://cheerio.js.org/)]</sup><sup>[[GitHub](https://github.com/cheeriojs/cheerio)]</sup> - Node.js jQuery HTML
> - [jsdom](https://www.npmjs.com/package/jsdom)<sup>[[GitHub](https://github.com/jsdom/jsdom)]</sup> -  DOM仿真项目
> - [puppeteer](https://www.npmjs.com/package/puppeteer)<sup>[[Official](https://pptr.dev/)]</sup><sup>[[GitHub](https://github.com/puppeteer/puppeteer)]</sup> - 浏览器自动化
> - [playwright](https://www.npmjs.com/package/playwright)<sup>[[Official](https://playwright.dev/)]</sup><sup>[[GitHub](https://github.com/microsoft/playwright)]</sup> - 浏览器自动化
> - [@octokit/core](https://www.npmjs.com/package/@octokit/core)<sup>[[GitHub](https://github.com/octokit/core.js)]</sup> - Extendable client for GitHub's REST & GraphQL APIs
> - [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)<sup>[[GitHub](https://github.com/jedisct1/libsodium.js)]</sup> - The sodium crypto library
> - [log4js](https://www.npmjs.com/package/log4js)<sup>[[Official](https://log4js-node.github.io/log4js-node/)]</sup><sup>[[GitHub](https://github.com/log4js-node/log4js-node)]</sup>  - 日志
> - [javascript-obfuscator](https://www.npmjs.com/package/javascript-obfuscator)<sup>[[Official](https://obfuscator.io/)]</sup><sup>[[GitHub](https://github.com/javascript-obfuscator/javascript-obfuscator)]</sup> - 混淆器

## Windows二进制文件(.zip)安装方式

### 下载解压

[nodejs](https://nodejs.org/en/download/)下载解压目录 例: `D:\Develop\node\node-v18.16.1-win-x64\`

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

### Command

```

#初始化 package.json
npm init

#安装模块
npm install <package>

#卸载模块
npm uninstall <package>

```
