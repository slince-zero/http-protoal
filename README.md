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

## chunk

在 Node.js 中，chunk 是指通过流（stream）传输的数据片段。

解释：
- 流（Stream）：Node.js 中的 response 对象是一个 流（stream）。流是用于处理连续数据的抽象。流可以分为两类：可读流（Readable Streams）和 可写流（Writable Streams）。HTTP 请求的响应体通常是一个可读流。
- 数据片段（chunk）：HTTP 响应的数据可能会被拆分成多个片段（chunks），而不是一次性发送完。每个 chunk 都是一个数据块，它可以是一个字符串、Buffer 或其他数据格式。每次接收到一个 chunk，就会触发 data 事件。
- 累加数据：在你的代码中，data 变量用来累加从流中获取到的所有 chunk 数据。当数据传输完成时（即响应结束），可以通过 end 事件来确认数据已全部接收。

### chunk 是什么类型？
chunk 的类型通常是 Buffer，或者在某些情况下，它也可能是字符串，具体取决于服务器响应的内容类型和编码。例如：

- 如果响应是二进制数据（如图片、文件等），chunk 通常是一个 Buffer。
- 如果响应是文本（如 HTML 或 JSON），chunk 可能是一个字符串，尤其是如果服务器返回的是 UTF-8 编码的文本。

### 为什么需要 chunk？
由于 HTTP 响应可能非常大，无法一次性加载到内存中，因此数据会以 分块（chunk） 的方式逐渐传输。

这样可以：处理大文件或大量数据时不消耗过多内存。让客户端在接收到部分数据时就可以开始处理，而不是等到所有数据都下载完毕。提高数据传输的效率，减少等待时间。
