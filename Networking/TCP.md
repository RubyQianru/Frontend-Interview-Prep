# TCP

应用层：http协议组装数据包（GET/HTTP/1.1）
传输层：tcp头部，包含端口号、序列号（port 80）
网络互联层：ip头部（ip地址）
网络访问层：以太网头部，包含mac地址（硬件物理地址）

# SYN（三次握手）/FIN（四次挥手）

需要对端确认的，一定消耗tcp报文的序列号，防止丢包情况时重复

# HTTP

- Socket：是对TCP/IP的封装。
- 报文格式
    - 请求行：method URL 协议版本 /r/n
    - key: value /r/n
    - 请求体（内容）

# HTTPS SSL/TLS

- SSL: 
    - SSL握手：握手的过程都是明文，重点是如何在不安全的网络中安全地进行密钥交换
    - RSA算法交换密钥
    - 证书


