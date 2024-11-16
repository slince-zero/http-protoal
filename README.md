## 安装依赖和运行代码

首先，确保你已安装了 Node.js 和 TypeScript。可以通过以下命令安装 TypeScript 编译器：

```bash
npm install -g typescript
```

然后初始化一个 Node.js 项目（如果还没有的话）：

```bash
npm init -y
```

安装 TypeScript 类型定义：

```bash
npm install --save-dev @types/node
```

接着将上述代码保存到 server.ts 和 client.ts 文件中。

编译 TypeScript 代码：

```bash
tsc server.ts
tsc client.ts
```

运行服务器：

```bash
node server.js
```

服务器会启动并监听 http://127.0.0.1:3000/。

运行客户端：
在另一个终端中，运行：

```bash
node client.js
```

客户端将向服务器发送 GET 请求，并打印响应内容。
