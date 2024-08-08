import path from 'node:path'
import fs from 'node:fs'


// 找到项目的根目录 
// .vitepress 文件夹具有唯一性，它作为分隔符号能快速定位项目根目录
const root = __dirname.split('.vitepress')[0]

// 生成数据库文件
export const createArticleDatabase = () => {


    // 文章仓库的位置

    const repo_dir = path.resolve(root, 'articles')

    // 通过文件夹，读取里面的所有文章的：标题 和 编号 以及总数量

    const files_all = fs.readdirSync(repo_dir)

    // 获取文章的数量
    const articlesCounts = files_all.length

    let arr = []


    for (let i = 0; i < files_all.length; i++) {
        let obj = {}

        // 添加标题、zoid数据 
        obj.zoid = files_all[i].split(' ')[0]
        obj.title = files_all[i].split(' ')[1]

        // 获取文件名称
        let nowFilename = files_all[i]

        // 添加链接
        obj.link = `/articles/${nowFilename.split('.md')[0]}`





        let content = fs.readFileSync(`${repo_dir}/${nowFilename}`, 'utf8')

        let res = content.indexOf('zoinfo: ')
        let res_end = content.indexOf('zoend')

        if (res == -1) {
            // 没有索引信息，返回基本的【zoid】和【title】
            arr.push(obj)
        } else {
            // 提取索引信息
            let info = content.slice(res + 8, res_end - 1)

            // 将字符串转化为对象
            let obj2 = eval('(' + info + ')');


            arr.push(Object.assign(obj, obj2))
        }






    }



    const inforepo = path.resolve(root, 'data/ArticleDatabase.json')

    fs.writeFileSync(inforepo, JSON.stringify(arr))






}

// 读取数据库数据
export const readArticleDatabase = () => {
    // 数据库位置
    let db = path.resolve(root, 'data/ArticleDatabase.json')


    let res = fs.readFileSync(db)

    let alldata = JSON.parse(res)


    let articles_sum = alldata.length






    return {
        alldata: alldata,
        articles_sum,


    }



}



