~ updateDate: 2024-11-26

# docker-software
 - [Docker Hub](https://hub.docker.com/)

## 目录

* [面板类](#面板类)
	* [Portainer](#portainer)
* [网盘类](#网盘类)
	* [Alist](#alist)
* [脚本类](#脚本类)
	* [qinglong](#qinglong)
* [下载类](#下载类)
	* [aria2](#aria2)
	* [qBittorrent](#qbittorrent)
	* [Transmission](#transmission)
	* [迅雷](#迅雷)
* [影音类](#影音类)
	* [EMBY](#emby)
	* [Jellyfin](#jellyfin)
* [工具类](#工具类)
	* [SpeedTest](#speedtest)
* [Science](#science)
    * [Clash](#clash)
    * [v2rayA](#v2raya)

  
---

## Software

- ### 面板类

    - #### [Portainer](https://www.portainer.io/)<a id="portainer"></a><sup>[[GitHub](https://github.com/portainer/portainer)]</sup> - Docker管理面板

        > - <s>eysp/portainer-ce<sup>[[GitHub](https://github.com/eysp/portainer-ce)]</sup><sup>[[Docker](https://hub.docker.com/r/6053537/portainer-ce)]</sup> - portainer-ce汉化版</s> `停止维护`
        > - portainer-ce<sup>[[Docker](https://hub.docker.com/r/portainer/portainer-ce)]</sup><sup>[开源]</sup>

- ### 网盘类

    - #### [Alist](https://alist.nn.ci/zh/)<a id="alist"></a><sup>[[GitHub](https://github.com/alist-org/alist)]</sup><sup>[[Docker](https://hub.docker.com/r/xhofe/alist)]</sup> -  一个支持多存储的文件列表/WebDAV程序，使用 Gin 和 Solidjs。

        > - [小雅Alist](https://alist.xiaoya.pro/)<sup>[[Docker](https://hub.docker.com/r/xiaoyaliu/alist)]</sup><sup>[[docker文档](https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f)]</sup><sup>[[小雅使用说明](https://www.kdocs.cn/l/cvEe3cv6dGkH)]</sup>
  
- ### 脚本类

    - #### qinglong<a id="qinglong"></a><sup>[[GitHub](https://github.com/whyour/qinglong)]</sup><sup>[[Docker](https://hub.docker.com/r/whyour/qinglong)]</sup> - 定时任务管理平台

- ### 下载类

	- #### [aria2](https://aria2.github.io/)<a id="aria2"></a><sup>[[GitHub](https://github.com/aria2/aria2)]</sup>
  
        > - hobbsau/aria2<sup>[[GitHub](https://github.com/hobbsAU/docker-aria2)]</sup><sup>[[Docker](https://hub.docker.com/r/hobbsau/aria2)]</sup>

    - #### [qBittorrent](https://www.qbittorrent.org/)<a id="qbittorrent"></a><sup>[[GitHub](https://github.com/qbittorrent/qBittorrent)]</sup> - qBittorrent BitTorrent client<sup>[开源]</sup>

    - #### [Transmission](https://transmissionbt.com/)<a id="transmission"></a><sup>[[GitHub](https://github.com/transmission/transmission)]</sup> - Official Transmission BitTorrent client repository<sup>[开源]</sup>

    - #### 迅雷<a id="迅雷"></a><sup>[[GitHub](https://github.com/cnk3x/xunlei)]</sup><sup>[[Docker](https://hub.docker.com/r/cnk3x/xunlei)]</sup> 

- ### 影音类

    - #### [EMBY](https://emby.media/)<a id="emby"></a><sup>[[GitHub](https://github.com/MediaBrowser/Emby)]</sup> - 媒体服务器

    - #### [Jellyfin](https://jellyfin.org/)<a id="jellyfin"></a><sup>[[GitHub](https://github.com/jellyfin/jellyfin)]</sup> - 媒体服务器<sup>[开源]</sup>

- ### 工具类

    - #### [SpeedTest](https://librespeed.org/)<a id="speedtest"></a><sup>[[GitHub](https://github.com/librespeed/speedtest)]</sup> - 自托管速度测试

- ### Science

	- #### <s>Clash<a id="clash"></a><sup>[[GitHub](https://github.com/Dreamacro/clash/releases)]</sup><sup>[[Wiki](https://dreamacro.github.io/clash/zh_CN/)]</sup></s> `作者删库:2023-11-03`

		> Clash.Meta<sup>[[GitHub](https://github.com/MetaCubeX/mihomo)]</sup><sup>[[Wiki](https://clash-meta.gitbook.io/clash.meta-wiki-older/)]</sup><sup>[[Docker](https://hub.docker.com/r/metacubex/mihomo)]</sup>
		> - [Clash.Meta Docs](https://wiki.metacubex.one/)<sup>[[GitHub](https://github.com/MetaCubeX/Meta-Docs/)]</sup>
        > - [config.yaml](https://gist.github.com/liuran001/5ca84f7def53c70b554d3f765ff86a33) - mihomo (Clash Meta) 懒人配置
		>
		> WEB UI 面板
		> - metacubexd<sup>[[GitHub](https://github.com/MetaCubeX/metacubexd)]</sup><sup>[[在线预览](https://d.metacubex.one/)]</sup><sup>[[Docker](https://github.com/metacubex/metacubexd/pkgs/container/metacubexd)]</sup>
		> - Yacd-meta<sup>[[GitHub](https://github.com/MetaCubeX/Yacd-meta)]</sup><sup>[[在线预览](https://yacd.metacubex.one)]</sup>
        >
        > [mihomo + metacubexd + docker compose + nginx 反代教程](https://github.com/MetaCubeX/metacubexd/discussions/638)

        <details>

		<summary> <strong>config.yaml</strong> </summary>

		```yaml

        # mihomo (Clash Meta) 懒人配置
        # 版本 V1.12-241024
        # https://gist.github.com/liuran001/5ca84f7def53c70b554d3f765ff86a33
        # https://obdo.cc/meta
        # 作者: 笨蛋ovo (bdovo.cc)
        # Telegram: https://t.me/baka_not_baka
        # 关注我的 Telegram 频道谢谢喵 https://t.me/s/BDovo_Channel
        # 修改自官方示例规则 https://wiki.metacubex.one/example/#meta
        # 转载请保留此注释
        # 尽量添加了较为详尽的注释，不理解的地方建议对照 虚空终端 (Clash Meta) Docs 进行理解
        # 虚空终端 (Clash Meta) Docs 地址: https://wiki.metacubex.one
        # 不理解的地方不要乱动，如果你是小白，请按下 `Ctrl + F` 搜索 `基础配置`，只修改此部分

        # true 是启用
        # false 是禁用

        # 分组
        pr:
        &pr {
            type: select,
            proxies:
            [
                节点选择,
                香港,
                台湾,
                日本,
                新加坡,
                美国,
                其它地区,
                全部节点,
                自动选择,
                DIRECT,
            ],
        }
        # 延迟检测 URL
        p: &p
        type: http
        # 自动更新订阅时间，单位为秒
        interval: 1800
        health-check:
            enable: true
            url: https://cp.cloudflare.com
            # 节点连通性检测时间，单位为秒
            interval: 300
            # 节点超时延迟，单位为毫秒
            timeout: 1000
            # 节点自动切换差值，单位为毫秒
            tolerance: 100

        # 基础配置
        # --------------------------------------------------
        # 如果你是小白，那么你只需要修改分割线以内的内容
        # 其他部分保持不动即可

        # 也可以把分割线以内的内容粘贴到您使用代理工具的「覆写」功能，然后在覆写中进行修改
        # 使用覆写时可以直接将此配置文件作为订阅链接进行订阅
        # https://ghp.ci/https://gist.githubusercontent.com/liuran001/5ca84f7def53c70b554d3f765ff86a33/raw/c1d33956db7097252b88a6c06ed76f32526747c4/config.yaml

        # 如果你需要使用大于两个机场，在下方 `use` 处添加 `订阅三` （名字可以自己取），然后在 `proxy-providers` 照例添加订阅链接即可
        # 反之，如果你只需要使用一个，那么将 `订阅二` 前添加 `#` 进行注释即可

        # 订阅名，记得修改成自己的
        # 添删订阅在这里和下方订阅链接依葫芦画瓢就行
        use: &use
        # 如果不希望自动切换请将下面两行注释对调
        type: select
        # type: url-test
        use:
            - 订阅一
            - 订阅二
            # - 本地配置

        # 订阅链接
        # 对于订阅来说，path 为选填项，但建议启用
        # 本地配置可以只填 path
        proxy-providers:
            订阅一:
                <<: *p
                # path: ./proxy_provider/订阅一.yaml
                url: ""
                override:
                additional-prefix: "订阅一 |"
            订阅二:
                <<: *p
                # path: ./proxy_provider/订阅二.yaml
                url: ""
                override:
                additional-prefix: "订阅二 |"

            # 本地配置:
                # <<: *p
                # path: ./proxy_provider/本地配置.yaml

        # 小白请不要继续随意修改以下设置
        # 若需修改请参阅文档 https://wiki.metacubex.one
        # --------------------------------------------------

        # 规则订阅
        rule-providers:
        # 秋风广告拦截规则
        # https://awavenue.top
        # 由于 Anti-AD 误杀率高，本项目已在 1.11-241024 版本更换秋风广告规则
        AWAvenue-Ads:
            type: http
            behavior: domain
            format: yaml
            # path可为空(仅限clash.meta 1.15.0以上版本)
            path: ./rule_provider/AWAvenue-Ads.yaml
            url: "https://ghp.ci/https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/refs/heads/main/Filters/AWAvenue-Ads-Rule-Clash.yaml"
            interval: 600

        mode: rule
        # ipv6 支持
        ipv6: true
        log-level: info
        # 允许局域网连接
        allow-lan: true
        # socks5/http 端口
        mixed-port: 7890
        # Meta 内核特性 https://wiki.metacubex.one/config/general
        # 统一延迟
        # 更换延迟计算方式,去除握手等额外延迟
        unified-delay: true
        # TCP 并发
        # 同时对所有ip进行连接，返回延迟最低的地址
        tcp-concurrent: true
        # 外部控制端口
        external-controller: :9090

        secret: admin123123

        geodata-mode: true

        # Geo 数据库下载地址
        # 使用 FastGit 代理 (https://fgit.cf)
        # 源地址 https://github.com/MetaCubeX/meta-rules-dat
        # 可以更换镜像站但不要更换其他数据库，可能导致无法启动
        geox-url:
        geoip: "https://ghp.ci/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip.dat"
        geosite: "https://ghp.ci/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat"
        mmdb: "https://ghp.ci/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country.mmdb"

        # 进程匹配模式
        # 路由器上请设置为 off
        # always 开启，强制匹配所有进程
        # strict 默认，由 Clash 判断是否开启
        # off 不匹配进程，推荐在路由器上使用此模式
        find-process-mode: strict

        # 缓解移动设备耗电问题
        # https://github.com/vernesong/OpenClash/issues/2614
        keep-alive-interval: 1800

        # 全局客户端指纹
        global-client-fingerprint: random # 随机指纹

        # 缓存
        profile:
        store-selected: true
        store-fake-ip: true

        # 自动同步时间以防止时间不准导致无法正常联网
        ntp:
        enable: true
        # 是否同步至系统时间，需要 root/管理员权限
        write-to-system: false
        server: time.apple.com
        port: 123
        interval: 30

        # 域名嗅探
        sniffer:
        enable: true
        sniff:
            TLS:
            ports: [443, 8443]
            HTTP:
            ports: [80, 8080-8880]
            override-destination: true

        # tun 模式
        tun:
        enable: false  # enable 'true'
        stack: system  # or 'gvisor'
        dns-hijack:
            - "any:53"
            - "tcp://any:53"
        auto-route: true
        auto-detect-interface: true

        # dns 设置
        # 已配置 ipv6
        dns:
        enable: true
        listen: :1053
        ipv6: true
        # 路由器个人建议使用 redir-host 以最佳兼容性
        # 其他设备可以使用 fake-ip
        enhanced-mode: redir-host
        fake-ip-range: 28.0.0.1/8
        fake-ip-filter:
            - '*'
            - '+.lan'
            - '+.local'
        default-nameserver:
            - 223.5.5.5
            - 119.29.29.29
            - 114.114.114.114
            - '[2402:4e00::]'
            - '[2400:3200::1]'
        nameserver:
            - 'tls://8.8.4.4#dns'
            - 'tls://1.0.0.1#dns'
            - 'tls://[2001:4860:4860::8844]#dns'
            - 'tls://[2606:4700:4700::1001]#dns'
        proxy-server-nameserver:
            - https://doh.pub/dns-query
        nameserver-policy:
            "geosite:cn,private":
            - https://doh.pub/dns-query
            - https://dns.alidns.com/dns-query
            "geosite:!cn,!private": 
            - "tls://dns.google"
            - "tls://cloudflare-dns.com"

        # 多入站端口设置
        # listeners:
        #   - name: hk
        #     type: mixed
        #     port: 12991
        #     proxy: 香港

        #   - name: tw
        #     type: mixed
        #     port: 12992
        #     proxy: 台湾

        #   - name: sg
        #     type: mixed
        #     port: 12993
        #     proxy: 新加坡

        proxies:
        # - name: "WARP"
        #   type: wireguard
        #   server: engage.cloudflareclient.com
        #   port: 2408
        #   ip: "172.16.0.2/32"
        #   ipv6: "2606::1/128"        # 自行替换
        #   private-key: "private-key" # 自行替换
        #   public-key: "public-key"   # 自行替换
        #   udp: true
        #   reserved: "abba"           # 自行替换
        #   mtu: 1280
        #   dialer-proxy: "WARP前置"
        #   remote-dns-resolve: true
        #   dns:
        #     - https://dns.cloudflare.com/dns-query

        proxy-groups:
        # 使用 WARP 的用户需要手动在下方的 proxies 字段内添加 WARP
        # 例如 [WARP, 全部节点, 自动选择, 香港, 台湾, 日本, 新加坡, 美国, 其它地区, DIRECT],
        - {
            name: 节点选择,
            type: select,
            proxies:
                [全部节点, 自动选择, 香港, 台湾, 日本, 新加坡, 美国, 其它地区, DIRECT],
            }
        # 这里的 dns 指海外解析 dns 走的节点，一般跟随节点选择即可
        - { name: dns, <<: *pr }
        # WARP 配置链式出站
        # - { name: WARP前置, <<: *pr, exclude-type: "wireguard" }

        - { name: 广告拦截, type: select, proxies: [REJECT, DIRECT, 节点选择] }
        - { name: OpenAI, <<: *pr }
        # Apple 推荐走全局直连
        - { name: Apple, <<: *pr }
        - { name: Google, <<: *pr }
        - { name: Telegram, <<: *pr }
        - { name: Twitter, <<: *pr }
        - { name: Pixiv, <<: *pr }
        - { name: ehentai, <<: *pr }
        # 下面两个看需求启用，打开之后会代理全站流量，可能导致部分版权视频反而无法播放或视频播放速度缓慢
        # 下面 rules 两条也要启用
        # - {name: 哔哩哔哩, <<: *pr}
        # - {name: 哔哩东南亚, <<: *pr}
        - { name: 巴哈姆特, <<: *pr }
        - { name: YouTube, <<: *pr }
        - { name: NETFLIX, <<: *pr }
        - { name: Spotify, <<: *pr }
        - { name: Github, <<: *pr }
        - { name: Steam, <<: *pr }
        - { name: OneDrive, <<: *pr }
        - { name: 微软服务, <<: *pr }
        - {
            name: 国内,
            type: select,
            proxies:
                [
                DIRECT,
                节点选择,
                香港,
                台湾,
                日本,
                新加坡,
                美国,
                其它地区,
                全部节点,
                自动选择,
                ],
            }
        # 其他就是所有规则没匹配到的
        # 可以理解为 ACL4SSR 配置里的 漏网之鱼
        # 换言之，其他走代理就是绕过中国大陆地址，不走就是 GFWList 模式
        - { name: 其他, <<: *pr }

        # 分隔,下面是地区分组
        - { name: 香港, <<: *use, filter: "(?i)港|hk|hongkong|hong kong" }
        - { name: 台湾, <<: *use, filter: "(?i)台|tw|taiwan" }
        - { name: 日本, <<: *use, filter: "(?i)日本|jp|japan" }
        - { name: 美国, <<: *use, filter: "(?i)美|us|unitedstates|united states" }
        - { name: 新加坡, <<: *use, filter: "(?i)(新|sg|singapore)" }
        - {
            name: 其它地区,
            <<: *use,
            filter: "(?i)^(?!.*(?:🇭🇰|🇯🇵|🇺🇸|🇸🇬|🇨🇳|港|hk|hongkong|台|tw|taiwan|日|jp|japan|新|sg|singapore|美|us|unitedstates)).*",
            }
        - { name: 全部节点, <<: *use }
        - { name: 自动选择, <<: *use, tolerance: 2, type: url-test }

        rules:
        # 若需禁用 QUIC 请取消注释 QUIC 两条规则
        # 防止 YouTube 等使用 QUIC 导致速度不佳, 禁用 443 端口 UDP 流量（不包括国内）

        # - AND,(AND,(DST-PORT,443),(NETWORK,UDP)),(NOT,((GEOSITE,cn))),REJECT # quic
        - RULE-SET,AWAvenue-Ads,广告拦截
        # - GEOSITE,biliintl,哔哩东南亚
        # - GEOSITE,bilibili,哔哩哔哩

        - GEOSITE,openai,OpenAI
        - GEOSITE,apple,Apple
        - GEOSITE,apple-cn,Apple
        - GEOSITE,ehentai,ehentai
        - GEOSITE,github,Github
        - GEOSITE,twitter,Twitter
        - GEOSITE,youtube,YouTube
        - GEOSITE,google,Google
        - GEOSITE,google-cn,Google # Google CN 不走代理会导致香港等地区节点 Play Store 异常
        - GEOSITE,telegram,Telegram
        - GEOSITE,netflix,NETFLIX
        - GEOSITE,bahamut,巴哈姆特
        - GEOSITE,spotify,Spotify
        - GEOSITE,pixiv,Pixiv
        - GEOSITE,steam@cn,DIRECT
        - GEOSITE,steam,Steam
        - GEOSITE,onedrive,OneDrive
        - GEOSITE,microsoft,微软服务
        - GEOSITE,geolocation-!cn,其他
        # - AND,(AND,(DST-PORT,443),(NETWORK,UDP)),(NOT,((GEOIP,CN))),REJECT # quic
        - GEOIP,google,Google
        - GEOIP,netflix,NETFLIX
        - GEOIP,telegram,Telegram
        - GEOIP,twitter,Twitter
        - GEOSITE,CN,国内
        - GEOIP,CN,国内
        # 绕过局域网地址
        - IP-CIDR,10.0.0.0/8,DIRECT
        - IP-CIDR,172.16.0.0/12,DIRECT
        - IP-CIDR,192.168.0.0/16,DIRECT
        - IP-CIDR,100.64.0.0/10,DIRECT
        - IP-CIDR,127.0.0.0/8,DIRECT
        - MATCH,其他

		```

		</details>

        <details>

		<summary> <strong>docker-compose</strong> </summary>

        - bash
        
            ```bash

            # 创建目录
            mkdir -p /DATA/clash

            # 进入该目录
            cd /DATA/clash

            # 上传docker-compose.yml文件
            # TODO: 上传docker-compose.yml文件
            
            # Running
            docker compose up -d

            # Update and Restart
            docker compose pull && docker compose up -d

            ```
        
        - docker-compose.yml
        
            ```yml
            # version: '3'

            services:
                # Mihomo Dashboard
                metacubexd:
                    container_name: metacubexd
                    image: ghcr.io/metacubex/metacubexd
                    restart: always
                    ports:
                    - '80:80'

                # Mihomo Core
                meta:
                    container_name: meta
                    image: docker.io/metacubex/mihomo
                    restart: always
                    pid: host
                    ipc: host
                    network_mode: host
                    cap_add:
                    - ALL
                    volumes:
                    - ./DATA/clash:/root/.config/mihomo
                    - /dev/net/tun:/dev/net/tun
            ```

        </details>

        <details>

		<summary> <strong>docker-compose CasaOS</strong> </summary>

        ```yml
            
        name: clash
        services:
            meta:
                cap_add:
                    - ALL
                cpu_shares: 90
                command: []
                container_name: meta
                deploy:
                    resources:
                        limits:
                            memory: "3768582144"
                hostname: meta
                image: docker.io/metacubex/mihomo:latest
                ipc: host
                labels:
                    icon: https://cdn.jsdelivr.net/gh/MetaCubeX/metacubexd@main/public/pwa-192x192.png
                network_mode: host
                pid: host
                restart: always
                volumes:
                    - type: bind
                    source: /DATA/AppData/clash/DATA/AppData/clash
                    target: /root/.config/mihomo
                    bind:
                        create_host_path: true
                    - type: bind
                    source: /dev/net/tun
                    target: /dev/net/tun
                    bind:
                        create_host_path: true
            metacubexd:
                cpu_shares: 90
                command: []
                container_name: metacubexd
                deploy:
                    resources:
                        limits:
                            memory: "3768582144"
                hostname: metacubexd
                image: ghcr.io/metacubex/metacubexd:latest
                labels:
                    icon: https://cdn.jsdelivr.net/gh/MetaCubeX/metacubexd@main/public/pwa-192x192.png
                networks:
                    default: null
                ports:
                    - mode: ingress
                    target: 80
                    published: "8888"
                    protocol: tcp
                restart: always
        networks:
            default:
                name: clash_default
        x-casaos:
            author: self
            category: self
            hostname: 192.168.1.89
            icon: https://cdn.jsdelivr.net/gh/MetaCubeX/metacubexd@main/public/pwa-192x192.png
            index: /
            is_uncontrolled: false
            port_map: "8888"
            scheme: http
            title:
                custom: clash
        name: clash

        ```

        </details>

    - #### v2rayA<a id="v2raya"></a><sup>[[GitHub](https://github.com/v2rayA/v2rayA)]</sup><sup>[[Docker](https://hub.docker.com/r/mzz2017/v2raya)]</sup>

        > [v2rayA - Docs](https://v2raya.org/docs/prologue/introduction/)

        <details>

		<summary> <strong>docker-cli</strong> </summary>

        - Running
        
            ```bash

            # Running
            docker run -d \
            --restart=always \
            --privileged \
            --network=host \
            --name v2raya \
            -e V2RAYA_ADDRESS=0.0.0.0:2021 \
            -e V2RAYA_LOG_FILE=/tmp/v2raya.log \
            -e V2RAYA_V2RAY_BIN=/usr/local/bin/v2ray \
            -v /lib/modules:/lib/modules \
            -v /etc/resolv.conf:/etc/resolv.conf \
            -v /DATA/v2raya:/etc/v2raya \
            mzz2017/v2raya

            ```

        - Update and Restart

            ```bash

            # Update and Restart

            # 查看容器(找v2raya容器的ID)
            docker ps -a

            # 停止容器v2raya运行
            docker stop ID

            # 删除容器v2raya
            docker rm ID

            # 拉取最新镜像
            docker pull mzz2017/v2raya:latest

            # 重复Running
            # TODO: 重复Running

            ```

        </details>

        <details>

		<summary> <strong>docker-compose</strong> </summary>

        - bash
        
            ```bash

            # 创建目录
            mkdir -p /DATA/v2raya

            # 进入该目录
            cd /DATA/v2raya

            # 上传docker-compose.yml文件
            # TODO: 上传docker-compose.yml文件
            
            # Running
            docker compose up -d

            # Update and Restart
            docker compose pull && docker compose up -d

            ```
        
        - docker-compose.yml
        
            ```yml
            # version: '3'

            services:
                v2raya:
                    container_name: v2raya
                    image: docker.io/mzz2017/v2raya
                    restart: always
                    network_mode: host
                    privileged: true
                    cap_add:
                    - ALL
                    environment:
                    - V2RAYA_ADDRESS=0.0.0.0:2017
                    - V2RAYA_LOG_FILE=/tmp/v2raya.log
                    - V2RAYA_V2RAY_BIN=/usr/local/bin/v2ray
                    volumes:
                    - /lib/modules:/lib/modules
                    - /etc/resolv.conf:/etc/resolv.conf
                    - /DATA/v2raya:/etc/v2raya
            ```

        </details>
