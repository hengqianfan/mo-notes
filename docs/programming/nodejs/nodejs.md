# node

## 下载与安装

## npm 的使用
### 查看已经安装的 npm 
#### 过滤依赖
`--depth 0`
#### 查看全局已安装  

```shell
$ npm ls -g
```  

过滤依赖，则多加 `--depth 0`  ，后文不z

```shell
npm ls -g --depth 0
```

#### 查看项目中已安装  

```shell
$ npm ls
```  

#### 查看开发环境的包  

```shell
$ npm ls --depth 0 --dev

```  
#### 查看生产环境的包  

```shell
$ npm ls --depth 0 --prod

```  

## pnpm 

### 安装pnpm 
```shell
npm install pnpm -g

```

### 源设置
```shell
// 查看源
pnpm config get registry
// 切换淘宝源
pnpm config set registry https://registry.npmmirror.com/
```

### 使用
```shell
pnpm install 包名称
pnpm i 包名称
pnpm add 包名称    // -S  默认写入dependencies
pnpm add -D    // -D devDependencies
pnpm add -g    // 全局安装
```
### 移除
```shell
pnpm remove 包名称  // 移除包
pnpm remove 包名称 --global  // 移除全局包
```

### 更新
```shell
pnpm up  // 更新所有依赖项
pnpm upgrade 包  // 更新包
pnpm upgrade 包 --global  // 更新全局包
```

### 设置存储路径
```shell
pnpm config set store-dir /path/to/.pnpm-store

```

### 常见问题，脚本允许
```
# 以管理员身份运行power shell
set-executionpolicy remotesigned

```