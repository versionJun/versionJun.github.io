# Termux + QEMU + linux_alpine + Docker

## 准备工作

1. Termux <sup>[[Github](https://github.com/termux/termux-app/releases)]</sup><sup>[[F-Droid](https://f-droid.org/zh_Hans/packages/com.termux/)]</sup>

2. Alpine Linux系统镜像

    Small. Simple. Secure.
    Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.
    (来自[https://alpinelinux.org/](https://alpinelinux.org/))

    使用Alpine的原因：
        
    - 体积占用小，完全安装后的镜像不到1gb
    - 安装快 <s>(废话)</s>
    - 内存占用小，idle状态仅占用30多MB内存

    传送门：

    virtual-x86_64: [alpine-virt-3.10.1-x86_64.iso(v3.10.1, OfficialSite)](http://dl-cdn.alpinelinux.org/alpine/v3.10/releases/x86_64/alpine-virt-3.10.1-x86_64.iso)



## 详细过程

1. 安装依赖

    在Termux中：

    ```bash

    pkg install x11-repo unstable-repo

    pkg install qemu-utils qemu-common qemu-system-x86_64


    ```

2. 创建虚拟镜像(硬盘)

    在Termux中：

    ```bash

    qemu-img create -f qcow2 alpine.img 8G


    ```

    > 参数中8G代表创建一个最大容量为8G的镜像，可调节，最少2g以保证docker能正常安装。

3. 下載Alpine Linux系统镜像
    
    在Termux中：

    ```bash

    mkdir alpine && cd $_
    wget http://dl-cdn.alpinelinux.org/alpine/v3.10/releases/x86_64/alpine-virt-3.10.1-x86_64.iso


    ```


4. Alpine安装到虚拟硬盘

    在Termux中：

    ```bash

    qemu-system-x86_64 -machine q35 -m 1024 -smp cpus=2 -cpu qemu64 \
        -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
        -netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
        -cdrom alpine-virt-3.10.1-x86_64.iso \
        -nographic alpine.img

    ```

    > 可另存为setup.sh, 赋予权限`chmod +x setup.sh`, 调用`./setup.sh`

    参数解释：

      -  -hda : 启动的虚拟硬盘
      -  -cdrom : 启动的光盘镜像文件(相当于用光盘安装windows)
      -  -boot : 启动槽位，选d (我也不是太清楚)
      -  -m : 内存大小，单位mb
      -  -nographic : 无图像模式，直接在控制台输出
      -  --vnc :1 : 以vnc为图像模式输出到”显示器”，并占用vnc 1端口


5. 使用root帳號登入，啟用網路卡

    在Termux > alpine 中：

    ```bash
    
    setup-interfaces

    #Available interfaces are: eth0.

    #Enter '?' for help on bridges, bonding and vlans.

    #Which one do you want to initialize? (or '?' or 'done') [eth0]

    #Ip address for eth0? (or 'dhcp', 'none', '?') [dhcp]

    #Do you want to do any manual network configuration? [no]

    ifup eth0

    
    ```

    在Termux > alpine 中：

    ```bash
    
    #在alpine中，可使用vi编辑器，查看网络配置
    vi /etc/network/interfaces

    #重启网络
    /etc/init.d/networking restart

    #修复默认dns服务器异常 将10.0.2.3改为8.8.8.8即可
    vi /etc/resolv.conf


    ```

6. 安装配置Alpine

    在Termux > alpine 中：

    ```bash
    
    setup-alpine

    
    ```

    详细配置：

      -  `Select keyboard layout: cn` (选择CN键盘布局)
      -  `Select variant` (cn)
      -  `Enter system hostname: demohostname` (输入hostname名称，随意)
      -  `Which one do you want to initialize? (or '?' or 'done')` [eth0]
      -  `Ip address for eth0? (or 'dhcp', 'none', '?') [10.0.2.15] dhcp` (选dhcp)
      -  `Changing password for root` (修改root用户密码)
      -  `Which timezone are you in? ('?' for list) [UTC] Asia/Shanghai` (时区填Asia/Shanghai)
      -  `HTTP/FTP proxy URL? (e.g. 'http://proxy:8080', or 'none') [none]` (代理地址，默认none)
      -  `Enter mirror number (1-47) or URL to add (or r/f/e/done) [f]: 14` (选择软件源，14(清华源:http://mirrors.tuna.tsinghua.edu.cn/))
      -  `Which SSH server? ('openssh', 'dropbear' or 'none') [openssh]` (SSH服务器，选择openssh(默认))
      -  `Which disk(s) would you like to use? (or '?' for help or 'none') [none]sda` (安装在何处，选sda)
      -  `How would you like to use it? ('sys', 'data', 'lvm' or '?' for help) [?] sys` (安装方式，选sys)
      -  `WARNING: Erase the above disk(s) and continue? [y/N]: y` (清除整个硬盘，y(是))


    安装完成，关闭虚拟机

    在Termux > alpine 中：
    
    ```bash

    #讓開機時能輸出訊息
    sed -i -E 's/(local kernel_opts)=.*/\1="console=ttyS0"/' /sbin/setup-disk

    poweroff
    
    ```

7. 启动Alpine

    在Termux中：

    ```bash

    qemu-system-x86_64 -machine q35 -m 2048 -smp cpus=2 -cpu qemu64 \
        -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
        -netdev user,id=n1,hostfwd=tcp::2222-:22,hostfwd=tcp::8081-:80 -device virtio-net,netdev=n1 \
        -nographic alpine.img
    #m是分配2GB記憶體，cpu是2核CPU，hostfwd則是把手機8081通訊埠轉發到虛擬機的80通訊埠。
    
    
    ```

    > 可另存为run.sh, 赋予权限`chmod +x run.sh`, 调用`./run.sh`

    参数解释：

      -  -hda : 启动的虚拟硬盘
      -  -boot : 启动槽位，选c (我也不是太清楚)
      -  -m : 内存大小，单位mb
      -  -netdev : 网络配置，详情请看 [QEMU_Wiki:Documentation/Networking](https://wiki.qemu.org/Documentation/Networking)
      -  -device : 设备配置(当前指向网络设备)
      -  -nographic : 无图像模式，直接在控制台输出
      -  --vnc :1 : 以vnc为图像模式输出到”显示器”，并占用vnc 1端口

8. 配置SSHD

    在Termux > alpine 中：

    ```bash
    
    #修改sshd_config，取消注释PermitRootLogin并修改为yes
    vi /etc/ssh/sshd_config

    #重启sshd
    service sshd restart

    ```

    现在外部ssh就可以登录alpine的root账户了
    在Termux中：
    
    ```bash
    
    ssh root@localhost -p 2222

    ```

9. 安装Docker

    在Termux > alpine 中：

    ```bash

    #在alpine中，docker在其comminuty源里
    #添加community源,即取消注释comminuty源
    vi /etc/apk/repositories

    apk update  
    
    #安装docker
    apk add docker

    #使docker开机启动
    rc-update add docker
    
    #开启docker服务
    service docker start

    #后台启动
    setsid dockerd

    #测试
    docker info
    
    ```

10. Docker换源

    在Termux > alpine 中：

    ```bash
    vi /etc/docker/daemon.json
    
    ```
    镜像仓库
     - Docker 官方中国区：https://registry.docker-cn.com
     - 网易：http://hub-mirror.c.163.com
     - 中国科技大学：https://docker.mirrors.ustc.edu.cn
     - 阿里云：https://pee6w651.mirror.aliyuncs.com

    ```
    {
        "registry-mirrors":["https://pee6w651.mirror.aliyuncs.com"]
    }

    ```

## 参考资料：
- [https://stageguard.top/2019/08/15/run-docker-on-qemu-alpine/](https://stageguard.top/2019/08/15/run-docker-on-qemu-alpine/)
- [https://ivonblog.com/posts/run-docker-in-qemu-android/](https://ivonblog.com/posts/run-docker-in-qemu-android/)

