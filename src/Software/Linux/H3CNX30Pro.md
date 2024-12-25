# H3C NX30 Pro 折腾记录

## 硬件配置

| 处理器                                                             | 射频芯片                                                     | 交换芯片 | 存储芯片                 |
| ------------------------------------------------------------------ | ------------------------------------------------------------ | -------- | ------------------------ |
| Filogic 820 MT7981B <br> 12nm A53 2x1.3GHz <br> HWNAT 2.4G&5G 基带 | MT7976CN <br> 3天线 160MHz 2402Mbps <br> 2天线 40MHz 576Mbps | MT7931AE | RAM 256MB <br> ROM 128MB |

## Telnet 连接

- IP address: `路由地址`
- Port: `99`
- Username: `H3C`
- Password: `路由登录密码`

## 开启 SSH

```bash
# 下载 dropbear.ipk
curl -o /tmp/dropbear.ipk https://downloads.openwrt.org/releases/packages-19.07/aarch64_cortex-a53/base/dropbear_2019.78-2_aarch64_cortex-a53.ipk

# 安装 dropbear.ipk
opkg install /tmp/dropbear.ipk

# 启动
/etc/init.d/dropbear enable
/etc/init.d/dropbear start
```

## 备份系统

- WinSCP，文件协议选择 SCP
      
  - 主机名: `路由地址`
  - 端口号: `22`
  - Username: `H3C`
  - Password: `路由登录密码`
  
- 在终端里执行这命令，将系统备份到 `tmp` 路径下 `backup.img` 文件，备份的过程比较慢，需要 1-2 分钟。`文件生成后请自行备份`。

   ```bash
   dd if=/dev/mtd5 of=/tmp/backup.img
   ```

## 刷写 uboot

- `uboot.bin` 文件上传自路由器 `tmp` 路径下
  
- 写入 uboot

   ```bash
   mtd write /tmp/uboot.bin FIP
   ```

## 进入 uboot (FIRMWARE UPDATE)

   - 路由器断电后，先按住背后 `Reset` 恢复按钮不放，再插电，等待 `10s` 左右松开背后 `Reset`
   - PC IP分配 -> 手动分配
     - IP地址: `192.168.1.2`
     - 子网掩码: `255.255.255.0`
     - 网关: `192.168.1.1`
     - DNS: `192.168.1.1`
   - 浏览器打开 `192.168.1.1` 就能打开 uboot 后台。
  
## H3C NX30 Pro 禁止更新

> PS: 刷回官方固件后经常一觉醒来路由器`自动更新`，导致路由器直接不能用，又要进uboot刷回去，很烦人

```bash
# 停止更新
/etc/init.d/onlineupdate stop
/etc/init.d/onlineupdate disable

# 检查是否还在运行
ps | grep onlineupdate
```
  
## 参考资料：
- [H3C NX30Pro 刷 openwrt 教程](https://blog.qust.me/nx30pro)
- [H3C NX30 Pro 禁止更新](https://www.right.com.cn/forum/thread-8399149-1-1.html)
