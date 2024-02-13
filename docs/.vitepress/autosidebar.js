import path from 'node:path'
import fs from 'node:fs'
import { log } from 'node:console'




// 文件根目录
const DIR_PATH = path.resolve(__dirname, '..')
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress', 'node_modules', '.idea', 'assets', 'embedded_notes']


// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))

// 把方法导出直接使用
function getList(params, path1, pathname, level,) {
    // 存放结果
    const res = []
    let now_level = 1


    let collapsed_state = Boolean
    // 开始遍历params
    for (let file in params) {
        // 拼接目录
        const dir = path.join(path1, params[file])
        // 判断是否是文件夹
        const isDir = isDirectory(dir)


        if (isDir) {
            如果是文件夹, 读取之后作为下一次递归参数
            const files = fs.readdirSync(dir)

            const moname = params[file]

            const moname2 = moname.split(' ')[1]

            const isLevel = () => {
                if (now_level > level) {
                    collapsed_state = true
                } else {
                    collapsed_state = false
                }
            }
            isLevel()



            level = level + 1

            res.push({

                text: moname2,
                collapsed: collapsed_state,
                items: getList(files, dir, `${pathname}/${params[file]}`, level),
            })
        } else {
            // 获取名字
            const name = path.basename(params[file])


            // 排除非 md 文件
            const suffix = path.extname(params[file])
            if (suffix !== '.md') {
                continue
            }


            const newname = name.split('.md')[0]
            const newname2 = newname.split(' ')[1]


            res.push({
                text: newname2,
                link: `${pathname}/${name}`,
            })
        }
    }
    return res
}

export const set_sidebar = (pathname, level) => {
    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname)
    // 读取pathname下的所有文件或者文件夹
    const files = fs.readdirSync(dirPath)
    // 过滤掉
    const items = intersections(files, WHITE_LIST)
    // getList 函数后面会讲到
    return getList(items, dirPath, pathname, level)
}