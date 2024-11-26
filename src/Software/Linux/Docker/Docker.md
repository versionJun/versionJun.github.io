# Docker

## Docker安装
 - [docker](https://www.docker.com/)<sup>[[Docker Hub](https://hub.docker.com/)]</sup>
 - tech-shrimp/docker_installer<sup>[[Github](https://github.com/tech-shrimp/docker_installer)]</sup> - Docker官方安装包，用来解决因国内网络无法安装使用Docker的问题

## Docker换源
 - 修改`/etc/docker/daemon.json`文件
    ```
    {
        "registry-mirrors": [
            "https://docker.m.daocloud.io",
            "https://docker.1panel.live"
        ]
    }
    ```
 - 重启docker
    ```bash
    systemctl daemon-reload
    systemctl restart docker
    ```

## Docker常用命令

> - [Docker Compose / Compose 命令说明](https://vuepress.mirror.docker-practice.com/compose/commands/)

```bash
# 从Docker Hub查找镜像
docker search [OPTIONS] TERM
# OPTIONS说明：
# --automated :只列出 automated build类型的镜像；
# --no-trunc :显示完整的镜像描述；
# -f <过滤条件>:列出收藏数不小于指定值的镜像。

#获取镜像
docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]

#列出镜像
docker image ls

#镜像体积
docker system df

#删除本地镜像
docker image rm [选项] <镜像1> [<镜像2> ...]

#列出容器
docker container ls -a

#启动终止状态的容器
docker container start [container ID or NAMES]

#重新启动正在运行的容器
docker container restart [container ID or NAMES]

#获取容器的输出信息
docker container logs [container ID or NAMES]

#终止容器
docker container stop [container ID or NAMES]

#删除容器
docker container rm [container ID or NAMES]

#进入容器
docker exec -it [container ID or NAMES] bash

```

## 参考资料：
- [dunwu.github.io/linux-tutorial/docker](https://dunwu.github.io/linux-tutorial/docker/) - Docker 教程
