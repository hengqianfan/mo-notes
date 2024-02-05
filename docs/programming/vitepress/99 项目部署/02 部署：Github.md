# Github Pages

如果你不知道Github点击此处补课  


::: tip  
## :yellow_circle: 前置步骤  
---
> **:star:已经把项目代码提交到github的远端仓库**  
> `不会提交，请参考这里`
---


##  :yellow_circle: 开启actions功能
### :one: 在仓库中找到page设置
![](/notesPic/202401071805.png)

### :two: 开启actions功能
![](/notesPic/202401071810.png)


##  :yellow_circle:添加配置动化文件

### `方法一：在线添加`

---

#### :one: 打开actions页面
![](/notesPic/202401071813.png)

#### :two: 前往创建文件
![](/notesPic/202401071814.png)

#### :three: 创建deploy.yml文件
![](/notesPic/202401071819.png)

#### :four: 添加代码

[点击此处前往官网复制代码](https://vitepress.dev/zh/guide/deploy#github-pages)

![](/notesPic/202401071821.png)

#### :five: 保存`deploy.yml`文件

> 把复制好的代码粘贴到刚才网页新建的`deploy.yml`文件中  
> **`注意` 代码有一处可能需要修改** main 或者 master 这取决你的分支名  

![](/notesPic/202401071851.png)

#### :six: 完成

---

### 方法二：本地添加

---

#### :one: 在项目中，按照图示结构创建 `deploy.yml` 文件  
```
.
├─ docs
│  ├─ .github
│  │  └─ workflows
│  │    └─ deploy.yml  // [!code warning]  
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

#### :two: 在文档中添加代码

[点击此处前往官网复制代码](https://vitepress.dev/zh/guide/deploy#github-pages)

![](/notesPic/202401071821.png)

#### :three: 保存`deploy.yml`文件

> 把复制好的代码粘贴到刚才网页新建的`deploy.yml`文件中  
> **`注意` 代码有一处可能需要修改** main 或者 master 这取决你的分支名  

![](/notesPic/202401071851.png)

#### :four: 完成

:::