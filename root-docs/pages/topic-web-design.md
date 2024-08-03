---
layout: page
---

<page-topic :momo='mymomo'></page-topic>

<script setup>
    const mymomo =[

    {
        text: '基础部分', items: [
            { text: 'HTML', link: '/repo/programming/html/00 简述', icon: 'html' },
            { text: 'SCSS', link: '/repo/programming/scss/00 简述', icon: 'sass' },

            { text: 'JavaScript', link: '/repo/programming/javascript/00 简述', icon: 'javascript' },
            { text: 'network-request', link: '/repo/programming/network-request/01 axios/00 简述', icon: 'network' },

        ]
    },

    {
        text: '进阶知识', items: [
            { text: 'Node.js', link: '/repo/programming/nodejs/00 简述', icon: 'nodejs' },
            { text: 'TypeScript', link: '/repo/programming/typescript/01 基础内容/01 介绍与安装', icon: 'typescript' },
            { text: 'React', link: '/repo/programming/react/00 简述', icon: 'react' },
            { text: 'Vue', link: '/repo/programming/vue/00 简述', icon: 'vue' },
            {text:'组件库',link:'/repo/component-library/00 简述',icon:'note'}

        ]
    },
    {
        text: '应用阶段', items: [
            { text: 'Uniapp', link: '/repo/programming/uniapp/00 简述', icon: 'uniapp' },
            { text: 'Electron', link: '/repo/programming/electron/00 简述', icon: 'electron' },
            { text: 'Docker', link: '/repo/programming/docker/00 简述', icon: 'docker' },
            { text: 'SQL数据库', link: '/repo/programming/mysql/00 简述', icon: 'sqlite' },
            { text: 'cocos', link: '/repo/cocos-creator/00 简述', icon: 'cocoscreator' }

        ]
    }
]
</script>