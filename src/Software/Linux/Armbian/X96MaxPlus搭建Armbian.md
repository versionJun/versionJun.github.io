# X96MaxPlus搭建Armbian

## 准备工作

1. 确认`X96Max+`版本为`X96MaxPlusQ2`
    - SoC:S905X3 + 4GB 内存 + 64GB 闪存+ 1000M 网口 + 2.4G/5G 双频 WiFi + 蓝牙

2. ophub/amlogic-s9xxx-armbian<sup>[[Github](https://github.com/ophub/amlogic-s9xxx-armbian)]</sup> 根据型号下载系统镜像
   - Armbian_24.8.0_amlogic_s905x3_bullseye_6.6.36_server_2024.07.01.img.gz <sup>[[Releases/Armbian_bullseye_save_2024.07](https://github.com/ophub/amlogic-s9xxx-armbian/releases/tag/Armbian_bullseye_save_2024.07)]</sup>

3. [balenaEtcher](https://etcher.balena.io/) - Flash OS images to SD cards & USB drives

## 刷入镜像至U盘

1. 打开balenaEtcher

2. `Flash from file` -> `Armbian_24.8.0_amlogic_s905x3_bullseye_6.6.36_server_2024.07.01.img.gz` -> `Select Target`

3. 选择U盘（请备份好u盘中的重要文件）

4. `Flash` -> 刷完之后 弹出u盘

## boot dtb 配置

1. 插入U盘 -> boot驱动器并打开

2. 找到并修改`uEnv.txt`文件的`FDT`参数

    > - `FDT`参数来源于`BOOT/dtb/amlogic`下以`.dtb` 为扩展名的文件
    > - 版本为`X96MaxPlusQ2`对应为`meson-sm1-x96-max-plus-q2.dtb`
   
    ```
    FDT=meson-sm1-x96-max-plus-q2.dtb

    ```

## 盒子 U盘启动

1. 断电，插入U盘`(记得插入USB3.0口，否则可能不识别)`

2. 插进AV口按下里头的复位键，不松开。(可用牙签或者较小的螺丝刀)

3. 上电，看到X96的封面就可以松手

## 控制LED显示屏
    
- 登录到 Armbian 系统→输入命令：

    ``` bash 

    armbian-openvfd

    ```

## 备份/恢复 EMMC 原始系统

1. 请从 TF/SD/USB → 启动 Armbian 系统 输入命令：

    ```bash
    
    armbian-ddbr

    ```

2. 根据提示输入
   - `b` 备份系统
   - `r` 恢复系统

## 刷入EMMC 

1. ssh或终端中运行以下命令（以root的身份）

    ```bash

    armbian-install

    ```

2. 据盒子版本来填入ID，例如`X96MaxPlusQ2`版本就填入`508`

    <details>

    <summary>详情 -> <strong>Armbian_24.8.0_amlogic_s905x3_bullseye_6.6.36_server_2024.07.01.img.g</strong> </summary>

    ```bash

        root@armbian:~# armbian-install
        [ STEPS ] Installing Armbian to internal eMMC...
        [ STEPS ] Checking dependencies...
        [ INFO ] Dependency check completed. Proceeding installation...
        [ STEPS ] Initializing the environment...
        [ INFO ] Use mainline u-boot: [ no ]
        [ INFO ] Use ampart tool: [ yes ]
        [ INFO ] Show all devices: [ no ]
        [ INFO ] Internal eMMC : [ /dev/mmcblk2 ]
        [ STEPS ] Start selecting device...
        -----------------------------------------------------------------------------------------------------
        ID    SOC        MODEL                                         DTB
        -----------------------------------------------------------------------------------------------------
        501   s905x3     X96-Max+_100Mb                                meson-sm1-x96-max-plus-100m.dtb
        502   s905x3     X96-Max+_1GB                                  meson-sm1-x96-max-plus.dtb
        503   s905x3     X96-Max+(OverClock)                           meson-sm1-x96-max-plus-oc.dtb
        504   s905x3     X96-Max+(IP1001M)                             meson-sm1-x96-max-plus-ip1001m.dtb
        505   s905x3     X96-Max+_A100                                 meson-sm1-x96-max-plus-a100.dtb
        506   s905x3     X96-Max+_2101                                 meson-sm1-x96-max-plus-2101.dtb
        507   s905x3     X96-Max+Q1                                    meson-sm1-x96-max-plus-q1.dtb
        508   s905x3     X96-Max+Q2,X96-Air-Q1000                      meson-sm1-x96-max-plus-q2.dtb
        509   s905x3     X96-Air-1Gb                                   meson-sm1-x96-air-gbit.dtb
        510   s905x3     X96-Air,X96-Max+100W,100Mb                    meson-sm1-x96-air.dtb
        -----------------------------------------------------------------------------------------------------
        511   s905x3     Tencent-Aurora-3Pro                           meson-sm1-skyworth-lb2004-a4091.dtb
        512   s905x3     HK1-Box,Vontar-X3                             meson-sm1-hk1box-vontar-x3.dtb
        513   s905x3     HK1-Box(OverClock)                            meson-sm1-hk1box-vontar-x3-oc.dtb
        514   s905x3     H96-Max-X3,Infinity-B32                       meson-sm1-h96-max-x3.dtb
        515   s905x3     H96-Max-X3(OverClock),B32                     meson-sm1-h96-max-x3-oc.dtb
        516   s905x3     Ugoos-X3                                      meson-sm1-ugoos-x3.dtb
        517   s905x3     Ugoos-X3(OverClock)                           meson-sm1-ugoos-x3-oc.dtb
        518   s905x3     TX3-1Gb                                       meson-sm1-tx3-qz.dtb
        519   s905x3     TX3-1Gb(OverClock)                            meson-sm1-tx3-qz-oc.dtb
        520   s905x3     TX3-100Mb                                     meson-sm1-tx3-bz.dtb
        -----------------------------------------------------------------------------------------------------
        521   s905x3     TX3-100Mb(OverClock)                          meson-sm1-tx3-bz-oc.dtb
        522   s905x3     A95XF3-Air-1Gb                                meson-sm1-a95xf3-air-gbit.dtb
        523   s905x3     A95XF3-Air-100Mb                              meson-sm1-a95xf3-air.dtb
        524   s905x3     X88-Pro-X3,X99-Max+,Transpeed-X3+             meson-sm1-x88-pro-x3.dtb
        525   s905x3     Whale                                         meson-sm1-x96-max-plus.dtb
        0     Other      Customize                                     Enter-custom-dtb-name
        -----------------------------------------------------------------------------------------------------
        [ OPTIONS ] Please Input ID: 508
        
    ```

    </details>

3. 选择分区格式 -> ext4 (即输入`1`)

4. 耐心等待拷贝文件进入EMMC ，速度由u盘/sd卡内系统的大小以及u盘/sd卡读写的速度影响

5. 写入EMMC结束 -> 先运行 `poweroff` 拔下u盘（sd卡）再拔插一下电源

## 参考资料：
- [[已更新]从零开始给X96 Max+刷上Armbian系统,完善千兆网卡以及刷入EMMC！](https://blog.mashiro.pro/331.html)
- [外贸盒子x96max+ 搭建Armbian系统 （附国内可用的img镜像下载地址）](https://blog.csdn.net/corefunction/article/details/118250652)
- [ophub/amlogic-s9xxx-armbian](https://github.com/ophub/amlogic-s9xxx-armbian)
