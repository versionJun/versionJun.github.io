# VMware + Debian 11 Bullseye

## 准备工作

1. [VMware](https://www.vmware.com/cn/products/workstation-pro.html)<sup>[[果核](https://www.ghxi.com/?s=VMware)]</sup>

2. [Debian](https://www.debian.org/download)
    - [debian-11.10.0-amd64-netinst.iso](https://cdimage.debian.org/cdimage/archive/11.10.0/amd64/iso-cd/)

## 创建安装Debain的虚拟机

1. 打开虚拟软件VMware -> `创建新的虚拟机`

2. 类型配置 -> `自定义(高级)`

3. 硬件兼容性 -> 默认

4. 安装客户机操作系统 -> `稍后安装操作系统`

5. 选择客户机操作系统
   - 客户机操作系统 -> `Linux` ` 
   - 版本 -> `Debian 11.x64 位`
  
6. 命名虚拟机名称
   - 虚拟机名称 -> 自定义
   - 虚拟机位置 -> 自定义
  
7. 处理器配置 -> 自定义

8. 内存配置 -> 自定义

9. 网络配置 -> `使用桥接网络`

10. 选择I/O控制器类型 -> `LSILogic(L)`

11. 选择磁盘类型 -> `SCSI(S)`

12. 磁盘 -> `创建新虚拟磁盘`

13. 指定磁盘大小
    - 最大磁盘大小 -> `20GB` (自定义)
    - `将虚拟磁盘存储为单个文件`    
  
14. 选择磁盘存储位置 -> 自定义

15. 配置`自定义硬件`
    - CD/DVD -> 使用ISO映像文件 -> 选择Debian镜像
        
## 安装Debian

1. Debian GNU/Linux instatller menu (BISO mode) -> `Graphical install`

2. Select a language -> `中文(简体)`

3. 地区 -> `中国`
   
4. 硬盘映射 -> `汉语`

5. 主机名 -> 自定义

6. 配置域名 -> 留空

7. root用户设置登录密码 -> 自定义
 
8. 创建普通用户&密码 -> 自定义

9. 磁盘分区方法 -> `向导 - 使用整个磁盘`

10. 选择需要分区的磁盘 -> 默认

11. 磁盘分区方案 -> `将所有文件放在一个分区中(推荐新手使用)`

12. `结束分区设定并将修改写入磁盘`

13. 将改动写入磁盘 -> `是`

14. 扫描额外的安装介质 -> `否`

15. Debian仓库镜像所在的国家 -> `中国`

16. Debian仓库镜像 -> `mirrors.tuna.tsinghua.edu.cn` (清华)

17. 代理 -> 留空

18. 参加软件包流行度调查 -> `否`

19. 软件选择 (最小化安装仅选择基础系统与SSH即可)
    - `SSH server`
    - `标准系统工具`
  
20. 安装GRUB启动引导器 -> `是`

21. 安装启动引导器设备 -> `/dev/sda`

```bash
    #查看系统信息
    cat /etc/os-release 

    #查看所有开机自启动项
    systemctl list-unit-files --type=service | grep enabled
```

## Debian 11 (bullseye) 国内软件源

- 修改`/etc/apt/sources.list`文件

    <details>

    <summary>国内常见镜像站点</summary>

    ```
    #阿里云镜像站 
    deb https://mirrors.aliyun.com/debian/ bullseye main non-free contrib
    deb-src https://mirrors.aliyun.com/debian/ bullseye main non-free contrib
    deb https://mirrors.aliyun.com/debian-security/ bullseye-security main
    deb-src https://mirrors.aliyun.com/debian-security/ bullseye-security main
    deb https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
    deb-src https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
    deb https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
    deb-src https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
    ```

    ```
    #清华大学镜像站
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
    ```

    ```
    #腾讯云镜像站
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
    deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
    ```

    ```
    #网易镜像站 
    deb https://mirrors.163.com/debian/ bullseye main non-free contrib
    deb-src https://mirrors.163.com/debian/ bullseye main non-free contrib
    deb https://mirrors.163.com/debian-security/ bullseye-security main
    deb-src https://mirrors.163.com/debian-security/ bullseye-security main
    deb https://mirrors.163.com/debian/ bullseye-updates main non-free contrib
    deb-src https://mirrors.163.com/debian/ bullseye-updates main non-free contrib
    deb https://mirrors.163.com/debian/ bullseye-backports main non-free contrib
    deb-src https://mirrors.163.com/debian/ bullseye-backports main non-free contrib
    ```

    ```
    #华为镜像站 
    deb https://mirrors.huaweicloud.com/debian/ bullseye main non-free contrib
    deb-src https://mirrors.huaweicloud.com/debian/ bullseye main non-free contrib
    deb https://mirrors.huaweicloud.com/debian-security/ bullseye-security main
    deb-src https://mirrors.huaweicloud.com/debian-security/ bullseye-security main
    deb https://mirrors.huaweicloud.com/debian/ bullseye-updates main non-free contrib
    deb-src https://mirrors.huaweicloud.com/debian/ bullseye-updates main non-free contrib
    deb https://mirrors.huaweicloud.com/debian/ bullseye-backports main non-free contrib
    deb-src https://mirrors.huaweicloud.com/debian/ bullseye-backports main non-free contrib
    ```

    <details>

- 修改之后再运行`apt update`更新索引

## Debian Linux root用户启用SSH登录

1. 要首先配置SSH服务器。
    - 安装完成后SSH服务默认开启
    - 手动启动：
        ```bash
        systemctl start ssh.service

        ```

2. 切换用户
    1. 先由普通用户登录Debian服务器，`su root`切换到root用户
        ```bash
            #安装vim
            apt-get install vim

        ```

3. 利用vim打开并修改`/etc/ssh/sshd_config`文件
    - 将`PermitRootLogin`设置为`yes`, `PasswordAuthentication`设置为`yes`即可，`:wq`保存退出即可

4. 重启SSH服务器
    ```bash
        /etc/init.d/ssh restart

    ```


## 参考资料：
- [手把手教你VMware虚拟机详细安装Debian 11 图文教程](https://blog.csdn.net/networkTalent/article/details/123375048)
- [2023-03-06 debian11 最小安装记录](https://blog.csdn.net/m0_38010621/article/details/129363462)
- [Debian 11 (bullseye) 国内软件源 设置修改](https://freeloong.top/article/471.html)