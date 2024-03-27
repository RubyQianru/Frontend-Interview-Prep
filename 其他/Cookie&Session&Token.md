# HTTP 无状态

HTTP是无状态的

# Cookie

服务器发送HTTP请求，客户端发送set-cookie

# Session 会话

服务器吧Session ID（一个乱七八糟的字符串）和会话结束时间发送给浏览器，浏览器再用Set-Cookie发送给服务器，Session会话会有一个Session有效期。在Cookie失效之后，用户再次需要重新登陆
Session会在网页关闭后结束会话

# Token

JWT
JWT签名秘文
存储在用户端
session会占用服务器内存，token不占服务器内存