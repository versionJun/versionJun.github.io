# X96MaxPlus搭建Armbian

## 准备工作

1. 确认`X96Max+`版本为`X96MaxPlusQ2`
    - SoC:S905X3 + 4GB 内存 + 64GB 闪存+ 1000M 网口 + 2.4G/5G 双频 WiFi + 蓝牙

2. ophub/amlogic-s9xxx-armbian<sup>[[Github](https://github.com/ophub/amlogic-s9xxx-armbian)]</sup> 根据芯片型号下载镜像
   - Armbian_24.8.0_amlogic_s905x3_bullseye_6.6.36_server_2024.07.01.img.gz <sup>[[Releases/Armbian_bullseye_save_2024.07](https://github.com/ophub/amlogic-s9xxx-armbian/releases/tag/Armbian_bullseye_save_2024.07)]</sup>

3. [balenaEtcher](https://etcher.balena.io/) - Flash OS images to SD cards & USB drives

## 刷入镜像至U盘

1. 打开balenaEtcher

2. `Flash from file` -> `Armbian_24.8.0_amlogic_s905x3_bullseye_6.6.36_server_2024.07.01.img.gz` -> `Select Target`

3. 选择U盘（请备份好u盘中的重要文件）

4. `Flash` -> 刷完之后 弹出u盘

## boot dtb 配置

1. 插入U盘 -> boot驱动器并打开

2. 找到并修改`uEnv`文件的`FDT`参数

    > - `FDT`参数来源于`BOOT/dtb/amlogic`下以`.dtb` 为扩展名的文件
    > - 版本为`X96MaxPlusQ2`对应为`meson-sm1-x96-max-plus-q2.dtb`
   
    ```
    FDT=meson-sm1-x96-max-plus-q2.dtb

    ```

## 盒子 U盘启动

1. 断电，插入U盘`(记得插入USB3.0口，否则可能不识别)`

2. 插进AV口按下里头的复位键，不松开。(可用牙签或者较小的螺丝刀)

3. 上电，看到X96的封面就可以松手


## 参考资料：
- [[已更新]从零开始给X96 Max+刷上Armbian系统,完善千兆网卡以及刷入EMMC！](https://blog.mashiro.pro/331.html)
- [外贸盒子x96max+ 搭建Armbian系统 （附国内可用的img镜像下载地址）](https://blog.csdn.net/corefunction/article/details/118250652)
