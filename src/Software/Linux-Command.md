
# Linux-Command

## 目录

* [端口](#端口)
	* [nmap](#nmap)
	* [netstat](#netstat)
* [进程](#进程)
	* [ps](#ps)
	* [kill](#kill)
* [主机状态监控](#主机状态监控)
	* [top](#top)
	* [dh](#dh)
	* [iostat](#iostat)

---

## Content

- ### 端口

    - #### nmap

    ```shell

        #yum安装nmap
        yum install nmap -y

        #nmap IP地址,查看指定IP的对外暴露端口
        #语法格式
        nmap [Options] <target>
        
        -O   #激活探测操作
        -P0  #只进行扫描，不ping主机
        -PT  #是同TCP的ping
        -sV  #显示服务版本信息
        -sP  #ping扫描，仅发现目标主机是否存活
        -ps  #发送同步（SYN）报文
        -PU  #发送udp ping
        -PE  #强制执行直接的ICMPping
        -PB  #默认模式
        -6   #使用IPv6地址
        -v   #详细信息
        -d   #增加调试信息地输出
        -A   #使用所有高级扫描选项
        --resume  #恢复（继续上次）中止的扫描
        -P  #指定要扫描的端口，可以是一个端口，用逗号隔开多个端口，使用“-”表示端口范围
        -e  #在多网络接口Linux系统中，指定扫描使用的网络接口
        -g  #将指定的端口作为源端口进行扫描
        --ttl   #指定发送的扫描报文的生存期
        --packet-trace  #显示扫描过程中收发报文统计
        --scanflags     #设置在扫描报文中的TCP标志
        --send-eth/--send-ip  #使用原始以太网发送/构造指定IP发送

    ```

    - #### netstat

    ```shell

        #yum安装netstat
        yum install net-tools -y       
    
        #查看本机端口号被程序占用的情况
        netstat -anp

        #查看本机指定端口号被程序占用的情况
        netstat -anp | grep 端口号

    ```

    PS: [linux-comm-netstat](https://www.runoob.com/linux/linux-comm-netstat.html)

- ### 进程

    - #### ps

    ```shell

        #显示全部进程的全部信息
        ps -ef 

        #过滤指定关键字进程信息
        ps -ef | grep 关键字

    ```

     - UID  :进程所属的用户ID
     - PID  :进程的进程号ID
     - PPID :进程的父ID(启动此进程的其他进程)
     - C    :此进程的CPU占用率(百分比)
     - TTY  :启动此进程的终端序号,如显示?,表示非终端启动
     - TIME :进程占用CPU的时间
     - CMD  :进程对应的名称或启动路径或启动命令

    PS: [linux-comm-ps](https://www.runoob.com/linux/linux-comm-ps.html)

    - #### kill

    ```bash

        #通过kill关闭进程
        #-9,表示强制关闭
        kill [-9] 进程ID

    ```
    
    PS: [linux-comm-kill](https://www.runoob.com/linux/linux-comm-kill.html)

- ### 主机状态监控

    - #### top

    ```shell

        #系统资源监控
        top

    ```

    PS: [linux-comm-top](https://www.runoob.com/linux/linux-comm-top.html)

    - #### dh

    ```shell

        #磁盘信息监控
        #-h,更加人性化的单位显示
        dh [-h]

    ```

    - #### iostat

    ```shell

        #iostat 可查看CPU、磁盘的相关信息
        #-x,显示更多信息
        #num1:数字,刷新间隔; num2:数字,刷新几次
        iostat [-x] [num1] [num2]

    ```

    - #### sar

    ```shell

        #网络状态监控
        #-n,查看网络
        #DEV,表示查看网络接口
        #num1:数字,刷新间隔(不填即查看一次结束); num2:数字,查看次数(不填无限次数)
        sar -n DEV num1 num2

    ```
