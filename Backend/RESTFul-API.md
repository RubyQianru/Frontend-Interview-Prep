# RESTFul API

Representation State Transfer Application Program Interface

### API 设计规范

- 将一切数据视作资源
- 利用HTTP请求方式，描述对资源的操作
- 利用HTTP响应状态码，描述对资源操作的结果

### 效果

- URL表示资源地址
- Method表示对资源进行什么操作
- Response Code表示操作成功与否

### Method规范

- GET 读取资源
- POST 创建资源
- PUT 更新资源
- Patch 局部更新
- DELETE 删除资源

### Response

保持统一结构，code对其HTTP状态码

### 优势

- 降低沟通成本
- 前后端分裂更彻底
- 前端更多业务灵活性