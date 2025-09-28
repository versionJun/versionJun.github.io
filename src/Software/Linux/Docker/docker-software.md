~ updateDate: 2025-09-28

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
	* [OpenSpeedTest](#openspeedtest)
	* [dkTurbo](#dkturbo)
	* [CFnat](#cfnat)
* [LinuxServer](#linuxserver)
    * [Nginx](#nginx)
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

        > - [hotio/qbittorrent
](https://hotio.dev/containers/qbittorrent/)<sup>[[GitHub](https://github.com/hotio/qbittorrent)]</sup><sup>[[Docker](https://hub.docker.com/r/hotio/qbittorrent)]</sup> 

    - #### [Transmission](https://transmissionbt.com/)<a id="transmission"></a><sup>[[GitHub](https://github.com/transmission/transmission)]</sup> - Official Transmission BitTorrent client repository<sup>[开源]</sup>

        > - linuxserver/transmission<sup>[[GitHub](https://github.com/linuxserver/docker-transmission)]</sup><sup>[[Docker](https://hub.docker.com/r/linuxserver/transmission)]</sup> 

    - #### 迅雷<a id="迅雷"></a>
  
        > - cnk3x/xunlei<sup>[[GitHub](https://github.com/cnk3x/xunlei)]</sup><sup>[[Docker](https://hub.docker.com/r/cnk3x/xunlei)]</sup> 

- ### 影音类

    - #### [EMBY](https://emby.media/)<a id="emby"></a><sup>[[GitHub](https://github.com/MediaBrowser/Emby)]</sup> - 媒体服务器

        > - linuxserver/emby<sup>[[GitHub](https://github.com/linuxserver/docker-emby)]</sup><sup>[[Docker](https://hub.docker.com/r/linuxserver/emby)]</sup> 

    - #### [Jellyfin](https://jellyfin.org/)<a id="jellyfin"></a><sup>[[GitHub](https://github.com/jellyfin/jellyfin)]</sup> - 媒体服务器<sup>[开源]</sup>

        > - linuxserver/jellyfin<sup>[[GitHub](https://github.com/linuxserver/docker-jellyfin)]</sup><sup>[[Docker](https://hub.docker.com/r/linuxserver/jellyfin)]</sup> 

- ### 工具类

    - #### [SpeedTest](https://librespeed.org/)<a id="speedtest"></a><sup>[[GitHub](https://github.com/librespeed/speedtest)]</sup> - 自托管速度测试

    - #### [OpenSpeedTest](https://openspeedtest.com/)<a id="openspeedtest"></a><sup>[[GitHub](https://github.com/openspeedtest/Speed-Test)]</sup><sup>[[Docker](https://hub.docker.com/r/openspeedtest/latest)]</sup> -  Free & Open-Source HTML5 Network Performance Estimation Tool.

    - #### dkTurbo<a id="dkturbo"></a><sup>[[Docker](https://hub.docker.com/r/cp0204/dkturbo)]</sup> - Docker 镜像加速器

    - #### CFnat<a id="cfnat"></a><sup>[[GitHub](https://github.com/cmliu/CFnat-docker)]</sup><sup>[[Docker](https://hub.docker.com/r/cmliu/cfnat)]</sup> - CFnat 是为优化 Cloudflare 数据中心性能而设计的 Docker 镜像，支持多架构，通过实时筛选并连接低延迟 IP，适用于网络加速与高效流量转发场景。

        <details>

		<summary> <strong>docker-compose</strong> </summary>

        - bash
        
            ```bash

            # 创建目录
            mkdir -p /DATA/cfnat

            # 进入该目录
            cd /DATA/cfnat

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
                cfnat1:
                        container_name: cfnat1
                        image: cmliu/cfnat:latest
                        environment:
                            - colo=HKG  # 筛选数据中心例如 HKG,SJC,LAX.电信/联通 推荐 SJC,LAX.移动/广电 推荐 HKG (多个数据中心用逗号隔开,留空则忽略匹配)
                            - delay=300  # 有效延迟（毫秒），超过此延迟将断开连接 (default 300)
                            - ips=6  # 指定生成IPv4还是IPv6地址 (default "4")
                            - port=443  # 转发的目标端口 (default 443) http_port: 80,8080,8880,2052,2082,2086,2095 https_port: 443,8443,2053,2083,2087,2096
                            # - tls=true  # 是否为 TLS 端口 (default true)
                            # - random=true  # 是否随机生成IP，如果为false，则从CIDR中拆分出所有IP (default true)
                            # - ipnum=10  # 提取的有效IP数量 (default 20)
                            # - num=10  # 目标负载 IP 数量 (default 10)
                            - task=33  # 并发请求最大协程数 (default 100)
                            # - code=200  # HTTP/HTTPS 响应状态码 (default 200)
                            # - domain=cloudflaremirrors.com/debian # 响应状态码检查的域名地址 (default "cloudflaremirrors.com/debian")
                        ports:
                            - "1234:1234"  # 将主机的 1234 端口映射到容器的 1234 端口
                        restart: always
                        networks:
                            - net

                cfnat2:
                        container_name: cfnat2
                        image: cmliu/cfnat:latest
                        environment:
                            - colo=SJC,LAX  # 筛选数据中心例如 HKG,SJC,LAX.电信/联通 推荐 SJC,LAX.移动/广电 推荐 HKG (多个数据中心用逗号隔开,留空则忽略匹配)
                            - delay=300  # 有效延迟（毫秒），超过此延迟将断开连接 (default 300)
                            - ips=6  # 指定生成IPv4还是IPv6地址 (default "4")
                            - port=443  # 转发的目标端口 (default 443) http_port: 80,8080,8880,2052,2082,2086,2095 https_port: 443,8443,2053,2083,2087,2096
                            # - tls=true  # 是否为 TLS 端口 (default true)
                            # - random=true  # 是否随机生成IP，如果为false，则从CIDR中拆分出所有IP (default true)
                            # - ipnum=10  # 提取的有效IP数量 (default 20)
                            # - num=10  # 目标负载 IP 数量 (default 10)
                            - task=34  # 并发请求最大协程数 (default 100)
                            # - code=200  # HTTP/HTTPS 响应状态码 (default 200)
                            # - domain=cloudflaremirrors.com/debian # 响应状态码检查的域名地址 (default "cloudflaremirrors.com/debian")
                        ports:
                            - "2234:1234"  # 将主机的 2234 端口映射到容器的 1234 端口
                        restart: always
                        networks:
                            - net
                        
                cfnat3:
                        container_name: cfnat3
                        image: cmliu/cfnat:latest
                        environment:
                            - colo=SIN  # 筛选数据中心例如 HKG,SJC,LAX.电信/联通 推荐 SJC,LAX.移动/广电 推荐 HKG (多个数据中心用逗号隔开,留空则忽略匹配)
                            - delay=300  # 有效延迟（毫秒），超过此延迟将断开连接 (default 300)
                            - ips=6  # 指定生成IPv4还是IPv6地址 (default "4")
                            - port=443  # 转发的目标端口 (default 443) http_port: 80,8080,8880,2052,2082,2086,2095 https_port: 443,8443,2053,2083,2087,2096
                            # - tls=true  # 是否为 TLS 端口 (default true)
                            # - random=true  # 是否随机生成IP，如果为false，则从CIDR中拆分出所有IP (default true)
                            # - ipnum=10  # 提取的有效IP数量 (default 20)
                            # - num=10  # 目标负载 IP 数量 (default 10)
                            - task=33  # 并发请求最大协程数 (default 100)
                            # - code=200  # HTTP/HTTPS 响应状态码 (default 200)
                            # - domain=cloudflaremirrors.com/debian # 响应状态码检查的域名地址 (default "cloudflaremirrors.com/debian")
                        ports:
                            - "3234:1234"  # 将主机的 3234 端口映射到容器的 1234 端口
                        restart: always
                        networks:
                            - net

            networks:
                net:
                    enable_ipv6: true
                    driver: bridge
                    driver_opts:
                        com.docker.network.enable_ipv6: "true"
                    ipam:
                        config:
                            - subnet: 172.23.0.0/16
                            gateway: 172.23.0.1
                            - subnet: "240e:3b1:f185:c8d0:4000::/66"
                            gateway: 240e:3b1:f185:c8d0:4000::1

      
            ```

        </details>

        <details>

		<summary> <strong>docker-compose CasaOS</strong> </summary>

        ```yml
            
        name: cfnat
        services:
            cfnat1:
                cpu_shares: 90
                command: []
                container_name: cfnat1
                deploy:
                    resources:
                        limits:
                            memory: "3768582144"
                environment:
                    colo: HKG
                    delay: "300"
                    ips: "6"
                    port: "443"
                    task: "33"
                hostname: cfnat1
                image: cmliu/cfnat:latest
                labels:
                    icon: https://cdn.jsdelivr.net/gh/cmliu/CFnat-Windows-GUI@refs/heads/master/favicon.ico
                networks:
                    net: null
                ports:
                    - mode: ingress
                    target: 1234
                    published: "1234"
                    protocol: tcp
                restart: always
            cfnat2:
                cpu_shares: 90
                command: []
                container_name: cfnat2
                deploy:
                    resources:
                        limits:
                            memory: "3768582144"
                environment:
                    colo: SJC,LAX
                    delay: "300"
                    ips: "6"
                    port: "443"
                    task: "34"
                hostname: cfnat2
                image: cmliu/cfnat:latest
                labels:
                    icon: https://cdn.jsdelivr.net/gh/cmliu/CFnat-Windows-GUI@refs/heads/master/favicon.ico
                networks:
                    net: null
                ports:
                    - mode: ingress
                    target: 1234
                    published: "2234"
                    protocol: tcp
                restart: always
            cfnat3:
                cpu_shares: 90
                command: []
                container_name: cfnat3
                deploy:
                    resources:
                        limits:
                            memory: "3768582144"
                environment:
                    colo: SIN
                    delay: "300"
                    ips: "6"
                    port: "443"
                    task: "33"
                hostname: cfnat3
                image: cmliu/cfnat:latest
                labels:
                    icon: https://cdn.jsdelivr.net/gh/cmliu/CFnat-Windows-GUI@refs/heads/master/favicon.ico
                networks:
                    net: null
                ports:
                    - mode: ingress
                    target: 1234
                    published: "3234"
                    protocol: tcp
                restart: always
        networks:
            default:
                name: cfnat_default
            net:
                name: cfnat_net
                driver: bridge
                driver_opts:
                    com.docker.network.enable_ipv6: "true"
                ipam:
                    config:
                        - subnet: 172.23.0.0/16
                        gateway: 172.23.0.1
                        - subnet: 240e:3b1:f185:c8d0:4000::/66
                        gateway: 240e:3b1:f185:c8d0:4000::1
                enable_ipv6: true
        x-casaos:
            author: self
            category: self
            hostname: ""
            icon: https://cdn.jsdelivr.net/gh/cmliu/CFnat-Windows-GUI@refs/heads/master/favicon.ico
            index: /
            is_uncontrolled: false
            port_map: ""
            scheme: http
            title:
                custom: CFnat

        ```

        </details>

- ### LinuxServer

    - #### [Nginx](https://nginx.org/)<a id="nginx"></a><sup>[[GitHub](https://github.com/nginx/nginx)]</sup> 

        > - linuxserver/nginx<sup>[[GitHub](https://github.com/linuxserver/docker-nginx)]</sup><sup>[[Docker](https://hub.docker.com/r/linuxserver/nginx)]</sup> 

- ### Science

	- #### <s>Clash<a id="clash"></a><sup>[[GitHub](https://github.com/Dreamacro/clash/releases)]</sup><sup>[[Wiki](https://dreamacro.github.io/clash/zh_CN/)]</sup></s> `作者删库:2023-11-03`

		> Clash.Meta<sup>[[GitHub](https://github.com/MetaCubeX/mihomo)]</sup><sup>[[Wiki](https://clash-meta.gitbook.io/clash.meta-wiki-older/)]</sup><sup>[[Docker](https://hub.docker.com/r/metacubex/mihomo)]</sup>
		> - [Clash.Meta Docs](https://wiki.metacubex.one/)<sup>[[GitHub](https://github.com/MetaCubeX/Meta-Docs/)]</sup>
        > - [config.yaml](https://gist.github.com/liuran001/5ca84f7def53c70b554d3f765ff86a33) - mihomo (Clash Meta) 懒人配置
		>
		> WEB UI Dashboard
		> - metacubexd<sup>[[GitHub](https://github.com/MetaCubeX/metacubexd)]</sup><sup>[[在线预览](https://d.metacubex.one/)]</sup><sup>[[Docker](https://github.com/metacubex/metacubexd/pkgs/container/metacubexd)]</sup>
		> - Yacd-meta<sup>[[GitHub](https://github.com/MetaCubeX/Yacd-meta)]</sup><sup>[[在线预览](https://yacd.metacubex.one)]</sup>
		> - zashboard<sup>[[GitHub](https://github.com/Zephyruso/zashboard)]</sup><sup>[[在线预览](https://board.zash.run.place/)]</sup><sup>[[Docker](https://github.com/Zephyruso/zashboard/pkgs/container/zashboard)]</sup>
        >
        > [mihomo + metacubexd + docker compose + nginx 反代教程](https://github.com/MetaCubeX/metacubexd/discussions/638)

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
                # Mihomo Core
                meta:
                    container_name: meta
                    image: docker.io/metacubex/mihomo
                    restart: unless-stopped
                    pid: host
                    ipc: host
                    network_mode: host
                    environment:
                    - TZ=Asia/Shanghai
                    cap_add:
                    - ALL
                    security_opt:
                    - apparmor=unconfined
                    volumes:
                    - ./DATA/clash:/root/.config/mihomo
                    - /dev/net/tun:/dev/net/tun
                    # 共享host的时间环境
                    - /etc/timezone:/etc/timezone:ro
                    - /etc/localtime:/etc/localtime:ro

                # metacubexd Dashboard
                metacubexd:
                    container_name: metacubexd
                    image: ghcr.io/metacubex/metacubexd
                    restart: unless-stopped
                    environment:
                    - TZ=Asia/Shanghai
                    network_mode: bridge
                    ports:
                    - '9097:80'
                    volumes:
                    # 共享host的时间环境
                    - /etc/timezone:/etc/timezone:ro
                    - /etc/localtime:/etc/localtime:ro

                # zashboard Dashboard
                zashboard:
                    container_name: zashboard
                    image: ghcr.io/zephyruso/zashboard:latest
                    restart: unless-stopped
                    environment:
                    - TZ=Asia/Shanghai
                    network_mode: bridge
                    ports:
                    - '9098:80'
                    volumes:
                    # 共享host的时间环境
                    - /etc/timezone:/etc/timezone:ro
                    - /etc/localtime:/etc/localtime:ro
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
            hostname: ""
            icon: https://cdn.jsdelivr.net/gh/MetaCubeX/metacubexd@main/public/pwa-192x192.png
            index: /
            is_uncontrolled: false
            port_map: "8888"
            scheme: http
            title:
                custom: clash


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
