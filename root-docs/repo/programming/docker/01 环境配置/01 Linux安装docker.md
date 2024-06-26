## 1️⃣ docker的预先移除

> 如果不确定服务器电脑是否已经安装docker，先预先移除docker

```shell
yum remove docker
```

## 配置docker的yum库

```shell
yum install -y yum-utils
```

## 配置Docker的yum源
```shell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```
## 安装 docker

```shell
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## 检查是否安装完成

```shell
docker -v
```

```shell
docker images
```

## 启动 docker

```shell
# 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
```

## 镜像加速

创建目录

```shell
sudo mkdir -p /etc/docker
```

进入目录
```shell
cd /etc/docker
```

创建文件

```shell
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://这是你的地址.mirror.aliyuncs.com"]
}
EOF
```

重启配置
```shell
sudo systemctl daemon-reload
```