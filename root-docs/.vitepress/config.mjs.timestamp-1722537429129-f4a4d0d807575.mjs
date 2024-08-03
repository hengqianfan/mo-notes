// root-docs/.vitepress/config.mjs
import { defineConfig } from "file:///E:/codes/web/mo-notes/node_modules/.pnpm/vitepress@1.0.0-rc.45_@algolia+client-search@4.22.1_sass@1.71.1_search-insights@2.13.0/node_modules/vitepress/dist/node/index.js";
import markdownItFootnote from "file:///E:/codes/web/mo-notes/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";

// root-docs/.vitepress/fans-tools/tools/autoSidebar.js
import path from "node:path";
import fs from "node:fs";
var __vite_injected_original_dirname = "E:\\codes\\web\\mo-notes\\root-docs\\.vitepress\\fans-tools\\tools";
var root = path.resolve(__vite_injected_original_dirname, "../../..");
var ignore_list = ["index.md", ".vitepress", "node_modules", ".idea", "assets", "embedded_notes", "xrepo"];
var isDir = (path3) => fs.lstatSync(path3).isDirectory();
var process_filename = (momo) => {
  let res1 = momo.split(".md")[0];
  let res2 = res1.split(" ")[1];
  return res2;
};
var process_filename_part = (momo) => {
  let res1 = momo.split(".md")[0];
  return res1;
};
var create_sidebar = (dir_unprocessed, folder_level) => {
  const dir_path = path.join(root, dir_unprocessed);
  const files_all = fs.readdirSync(dir_path);
  const is_effective = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));
  const files_effective = is_effective(files_all, ignore_list);
  const new_level = 0;
  const create_list = (items, repo_path, dir_unprocessed2, folder_level2, now_level) => {
    const final_list = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const item_path = path.join(repo_path, item);
      const isDir_res = isDir(item_path);
      if (isDir_res) {
        const new_items = fs.readdirSync(item_path);
        let dir_name_processed = process_filename(item);
        let new_floder = `${dir_unprocessed2}/${item}`;
        if (!now_level) {
          now_level = 1;
        }
        let next_level = now_level + 1;
        let collapsed_state = Boolean;
        if (now_level > folder_level2) {
          collapsed_state = true;
        } else {
          collapsed_state = false;
        }
        final_list.push({
          text: dir_name_processed,
          collapsed: collapsed_state,
          items: create_list(new_items, item_path, new_floder, folder_level2, next_level)
        });
      } else {
        const file_name = path.basename(item_path);
        const file_ext = path.extname(item_path);
        if (file_ext !== ".md") {
          continue;
        }
        let file_name_processed = process_filename(file_name);
        let file_name_processed_part = process_filename_part(file_name);
        final_list.push({
          text: file_name_processed,
          link: `${dir_unprocessed2}/${file_name}`
        });
      }
    }
    return final_list;
  };
  return create_list(files_effective, dir_path, dir_unprocessed, folder_level, new_level);
};
var setAllSidebars = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let repo = arr[i];
    let repo_name = repo[0];
    let level = repo[1];
    obj[repo_name] = create_sidebar(repo_name, level);
  }
  return obj;
};

// root-docs/.vitepress/fans-tools/tools/createArticleIndexes.js
import path2 from "node:path";
import fs2 from "node:fs";
var __vite_injected_original_dirname2 = "E:\\codes\\web\\mo-notes\\root-docs\\.vitepress\\fans-tools\\tools";
var runing = () => {
  const root2 = __vite_injected_original_dirname2.split(".vitepress")[0];
  const repo_dir = path2.resolve(root2, "articles");
  const files_all = fs2.readdirSync(repo_dir);
  const articlesCounts = files_all.length;
  const repoindex = [];
  for (let i = 0; i < files_all.length; i++) {
    const obj = {};
    obj.zoid = files_all[i].split(" ")[0];
    obj.title = files_all[i].split(" ")[1];
    console.log(obj);
  }
};
var createArticleIndexes = () => {
  runing();
};

// root-docs/.vitepress/config.mjs
createArticleIndexes();
var config_default = defineConfig({
  lang: "cn",
  title: "\u9B54\u7B14\u8BB0",
  description: "A VitePress Site",
  // gitee 打包请替换为/mo_notes/避免样式错误
  base: "/mo-notes/",
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }]
  ],
  // srcDir: 'docs',
  // lastUpdated: true,
  themeConfig: {
    siteTitle: "mo-notes",
    logo: "/icon/png/logo.png",
    nav: [
      {
        text: "\u7F51\u5740\u805A\u5408 \u{1F680}",
        items: [
          { text: "\u9605\u89C8\u6A21\u5F0F", link: "/pages/all-sites" },
          // { text: '搜索模式', link: '/pages/all-sites-search' }
          { text: "\u641C\u7D22\u6A21\u5F0F", link: "/pages/test" }
        ]
      },
      { text: "\u6587\u7AE0\u805A\u5408 \u{1F4F0}", link: "/pages/all-articles" },
      { text: "\u7B14\u8BB0\u805A\u5408 \u{1F4DA}", link: "/pages/all-notes" },
      {
        text: "\u5EFA\u7AD9\u4E13\u9898 \u{1F310}",
        items: [
          { text: "\u5168\u6D41\u7A0B", link: "/repo/build-site/00 \u7B80\u8FF0" },
          { text: "vitepress", link: "/repo/vitepress/00 \u7B80\u8FF0" },
          { text: "vuepress", link: "/repo/vuepress/00 \u7B80\u8FF0" }
        ]
      },
      {
        text: "\u524D\u7AEF\u4E13\u9898 \u{1F4DA}",
        items: [
          {
            text: "1\uFE0F\u20E3 \u57FA\u7840\u90E8\u5206",
            items: [
              { text: "HTML", link: "/repo/programming/html/00 \u7B80\u8FF0" },
              { text: "SCSS", link: "/repo/programming/scss/00 \u7B80\u8FF0" },
              { text: "JavaScript", link: "/repo/programming/javascript/00 \u7B80\u8FF0" },
              { text: "network-request", link: "/repo/programming/network-request/01 axios/00 \u7B80\u8FF0" }
            ]
          },
          {
            text: "2\uFE0F\u20E3 \u8FDB\u9636\u77E5\u8BC6",
            items: [
              { text: "Node.js", link: "/repo/programming/nodejs/00 \u7B80\u8FF0" },
              { text: "TypeScript", link: "/repo/programming/typescript/01 \u57FA\u7840\u5185\u5BB9/01 \u4ECB\u7ECD\u4E0E\u5B89\u88C5" },
              { text: "React", link: "/repo/programming/react/00 \u7B80\u8FF0" },
              { text: "Vue", link: "/repo/programming/vue/00 \u7B80\u8FF0" }
            ]
          },
          {
            text: "3\uFE0F\u20E3 \u5E94\u7528\u9636\u6BB5",
            items: [
              { text: "Uniapp", link: "/repo/programming/uniapp/00 \u7B80\u8FF0" },
              { text: "Electron", link: "/repo/programming/electron/00 \u7B80\u8FF0" },
              { text: "Docker", link: "/repo/programming/docker/00 \u7B80\u8FF0" },
              { text: "SQL\u6570\u636E\u5E93", link: "/repo/programming/mysql/00 \u7B80\u8FF0" },
              { text: "cocos", link: "/repo/cocos-creator/00 \u7B80\u8FF0" }
            ]
          }
        ]
      },
      // {
      //   text: 'C语言 📓', items: [
      //     { text: 'C# ', link: '/repo/programming/c-sharp/00 简述' }
      //   ]
      // },
      // {
      //   text: '爬虫 📓', items: [
      //     { text: 'python', link: '/repo/programming/python/00 简述' }
      //   ]
      // },
      {
        text: "\u5176\u4ED6\u6742\u9879 \u{1F3B0}",
        items: [
          { text: "\u66F4\u65B0\u65E5\u5FD7 \u2699", link: "/pages/history-updated/01 \u5EFA\u8BBE\u8BA1\u5212\u4E0E\u8FDB\u5EA6" },
          { text: "\u7248\u6743\u58F0\u660E \u{1F4E3}", link: "/pages/copyright" },
          { text: "\u6E38\u620F\u4E16\u754C \u{1F3AE}", link: "/repo/game/00 \u7B80\u8FF0" },
          { text: "\u6CD5\u5F8B\u7B14\u8BB0 \u{1F4D3}", link: "https://hengqianfan.github.io/mo-notes-for-law/" },
          { text: "\u6D4B\u8BD5\u9875\u9762 \u{1F3A8}", link: "/pages/test" },
          { text: "\u672C\u7AD9\u5730\u5740 GP", link: "https://hengqianfan.github.io/mo-notes/" },
          { text: "\u5176\u4ED6\u9879\u76EE\u4E0E\u8BA1\u5212", link: "pages/plans" }
        ]
      }
    ],
    sidebar: setAllSidebars([
      ["/repo/computer-init", 1],
      ["/repo/build-site", 1],
      ["/repo/computer", 1],
      ["/repo/programming/html", 1],
      ["/repo/programming/scss", 1],
      ["/repo/programming/javascript", 1],
      ["/repo/programming/typescript", 1],
      ["/repo/programming/nodejs", 1],
      ["/repo/programming/network-request", 1],
      ["/repo/programming/react", 1],
      ["/repo/programming/vue", 1],
      ["/repo/programming/mysql", 1],
      ["/repo/programming/electron", 1],
      ["/repo/programming/uniapp", 1],
      ["/repo/programming/docker", 1],
      ["/repo/vitepress", 1],
      ["/repo/github", 1],
      ["/repo/vscode", 1],
      ["/repo/programming/python", 1],
      ["/repo/cocos-creator", 1],
      ["/pages/history-updated", 1],
      ["/repo/game", 1]
    ]),
    // outline: [1, 6],
    outline: {
      label: "\u76EE\u5F55",
      // 因为要占用h1做网页副标题
      level: [2, 6]
    },
    // lastUpdated: true,
    search: {
      provider: "local"
      // provider: 'algolia'
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/hengqianfan/mo-notes" }
    ],
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8"
  },
  markdown: {
    config: (md) => {
      md.use(markdownItFootnote);
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicm9vdC1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm1qcyIsICJyb290LWRvY3MvLnZpdGVwcmVzcy9mYW5zLXRvb2xzL3Rvb2xzL2F1dG9TaWRlYmFyLmpzIiwgInJvb3QtZG9jcy8udml0ZXByZXNzL2ZhbnMtdG9vbHMvdG9vbHMvY3JlYXRlQXJ0aWNsZUluZGV4ZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2Rlc1xcXFx3ZWJcXFxcbW8tbm90ZXNcXFxccm9vdC1kb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVzXFxcXHdlYlxcXFxtby1ub3Rlc1xcXFxyb290LWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2Rlcy93ZWIvbW8tbm90ZXMvcm9vdC1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm1qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuLy8gXHU2M0QyXHU0RUY2XHJcbmltcG9ydCBtYXJrZG93bkl0Rm9vdG5vdGUgZnJvbSAnbWFya2Rvd24taXQtZm9vdG5vdGUnXHJcblxyXG4vLyBcdTgxRUFcdTVERjFcdTc2ODRcdTgxMUFcdTY3MkNcclxuaW1wb3J0IHsgc2V0QWxsU2lkZWJhcnMgfSBmcm9tICcuL2ZhbnMtdG9vbHMvdG9vbHMvYXV0b1NpZGViYXInXHJcblxyXG5cclxuLy8gXHU2NTg3XHU3QUUwXHU3RDIyXHU1RjE1XHU3NTFGXHU2MjEwXHJcbmltcG9ydCB7IGNyZWF0ZUFydGljbGVJbmRleGVzIH0gZnJvbSAnLi9mYW5zLXRvb2xzL3Rvb2xzL2NyZWF0ZUFydGljbGVJbmRleGVzJ1xyXG5cclxuXHJcbmNyZWF0ZUFydGljbGVJbmRleGVzKClcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGxhbmc6ICdjbicsXHJcbiAgdGl0bGU6IFwiXHU5QjU0XHU3QjE0XHU4QkIwXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiQSBWaXRlUHJlc3MgU2l0ZVwiLFxyXG4gIC8vIGdpdGVlIFx1NjI1M1x1NTMwNVx1OEJGN1x1NjZGRlx1NjM2Mlx1NEUzQS9tb19ub3Rlcy9cdTkwN0ZcdTUxNERcdTY4MzdcdTVGMEZcdTk1MTlcdThCRUZcclxuICBiYXNlOiAnL21vLW5vdGVzLycsXHJcbiAgaGVhZDogW1xyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy4vZmF2aWNvbi5pY28nIH1dXHJcbiAgXSxcclxuXHJcblxyXG4gIC8vIHNyY0RpcjogJ2RvY3MnLFxyXG4gIC8vIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBzaXRlVGl0bGU6ICdtby1ub3RlcycsXHJcbiAgICBsb2dvOiAnL2ljb24vcG5nL2xvZ28ucG5nJyxcclxuICAgIG5hdjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1N0Y1MVx1NTc0MFx1ODA1QVx1NTQwOCBcdUQ4M0RcdURFODAnLCBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU5NjA1XHU4OUM4XHU2QTIxXHU1RjBGJywgbGluazogJy9wYWdlcy9hbGwtc2l0ZXMnIH0sXHJcbiAgICAgICAgICAvLyB7IHRleHQ6ICdcdTY0MUNcdTdEMjJcdTZBMjFcdTVGMEYnLCBsaW5rOiAnL3BhZ2VzL2FsbC1zaXRlcy1zZWFyY2gnIH1cclxuICAgICAgICAgIHsgdGV4dDogJ1x1NjQxQ1x1N0QyMlx1NkEyMVx1NUYwRicsIGxpbms6ICcvcGFnZXMvdGVzdCcgfVxyXG5cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7IHRleHQ6ICdcdTY1ODdcdTdBRTBcdTgwNUFcdTU0MDggXHVEODNEXHVEQ0YwJywgbGluazogJy9wYWdlcy9hbGwtYXJ0aWNsZXMnIH0sXHJcblxyXG4gICAgICB7IHRleHQ6ICdcdTdCMTRcdThCQjBcdTgwNUFcdTU0MDggXHVEODNEXHVEQ0RBJywgbGluazogJy9wYWdlcy9hbGwtbm90ZXMnIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NUVGQVx1N0FEOVx1NEUxM1x1OTg5OCBcdUQ4M0NcdURGMTAnLCBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1MTY4XHU2RDQxXHU3QTBCJywgbGluazogJy9yZXBvL2J1aWxkLXNpdGUvMDAgXHU3QjgwXHU4RkYwJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAndml0ZXByZXNzJywgbGluazogJy9yZXBvL3ZpdGVwcmVzcy8wMCBcdTdCODBcdThGRjAnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICd2dWVwcmVzcycsIGxpbms6ICcvcmVwby92dWVwcmVzcy8wMCBcdTdCODBcdThGRjAnIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTUyNERcdTdBRUZcdTRFMTNcdTk4OTggXHVEODNEXHVEQ0RBXCIsIGl0ZW1zOiBbXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMVx1RkUwRlx1MjBFMyBcdTU3RkFcdTc4NDBcdTkwRThcdTUyMDYnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0hUTUwnLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvaHRtbC8wMCBcdTdCODBcdThGRjAnIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnU0NTUycsIGxpbms6ICcvcmVwby9wcm9ncmFtbWluZy9zY3NzLzAwIFx1N0I4MFx1OEZGMCcgfSxcclxuXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnSmF2YVNjcmlwdCcsIGxpbms6ICcvcmVwby9wcm9ncmFtbWluZy9qYXZhc2NyaXB0LzAwIFx1N0I4MFx1OEZGMCcgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICduZXR3b3JrLXJlcXVlc3QnLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvbmV0d29yay1yZXF1ZXN0LzAxIGF4aW9zLzAwIFx1N0I4MFx1OEZGMCcgfSxcclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMlx1RkUwRlx1MjBFMyBcdThGREJcdTk2MzZcdTc3RTVcdThCQzYnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ05vZGUuanMnLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvbm9kZWpzLzAwIFx1N0I4MFx1OEZGMCcgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdUeXBlU2NyaXB0JywgbGluazogJy9yZXBvL3Byb2dyYW1taW5nL3R5cGVzY3JpcHQvMDEgXHU1N0ZBXHU3ODQwXHU1MTg1XHU1QkI5LzAxIFx1NEVDQlx1N0VDRFx1NEUwRVx1NUI4OVx1ODhDNScgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdSZWFjdCcsIGxpbms6ICcvcmVwby9wcm9ncmFtbWluZy9yZWFjdC8wMCBcdTdCODBcdThGRjAnIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnVnVlJywgbGluazogJy9yZXBvL3Byb2dyYW1taW5nL3Z1ZS8wMCBcdTdCODBcdThGRjAnIH0sXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnM1x1RkUwRlx1MjBFMyBcdTVFOTRcdTc1MjhcdTk2MzZcdTZCQjUnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1VuaWFwcCcsIGxpbms6ICcvcmVwby9wcm9ncmFtbWluZy91bmlhcHAvMDAgXHU3QjgwXHU4RkYwJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0VsZWN0cm9uJywgbGluazogJy9yZXBvL3Byb2dyYW1taW5nL2VsZWN0cm9uLzAwIFx1N0I4MFx1OEZGMCcgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdEb2NrZXInLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvZG9ja2VyLzAwIFx1N0I4MFx1OEZGMCcgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdTUUxcdTY1NzBcdTYzNkVcdTVFOTMnLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvbXlzcWwvMDAgXHU3QjgwXHU4RkYwJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvY29zJywgbGluazogJy9yZXBvL2NvY29zLWNyZWF0b3IvMDAgXHU3QjgwXHU4RkYwJyB9XHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHRleHQ6ICdDXHU4QkVEXHU4QTAwIFx1RDgzRFx1RENEMycsIGl0ZW1zOiBbXHJcbiAgICAgIC8vICAgICB7IHRleHQ6ICdDIyAnLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvYy1zaGFycC8wMCBcdTdCODBcdThGRjAnIH1cclxuICAgICAgLy8gICBdXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICB0ZXh0OiAnXHU3MjJDXHU4NjZCIFx1RDgzRFx1RENEMycsIGl0ZW1zOiBbXHJcbiAgICAgIC8vICAgICB7IHRleHQ6ICdweXRob24nLCBsaW5rOiAnL3JlcG8vcHJvZ3JhbW1pbmcvcHl0aG9uLzAwIFx1N0I4MFx1OEZGMCcgfVxyXG4gICAgICAvLyAgIF1cclxuICAgICAgLy8gfSxcclxuXHJcblxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTUxNzZcdTRFRDZcdTY3NDJcdTk4NzkgXHVEODNDXHVERkIwJywgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENyBcdTI2OTknLCBsaW5rOiAnL3BhZ2VzL2hpc3RvcnktdXBkYXRlZC8wMSBcdTVFRkFcdThCQkVcdThCQTFcdTUyMTJcdTRFMEVcdThGREJcdTVFQTYnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTcyNDhcdTY3NDNcdTU4RjBcdTY2MEUgXHVEODNEXHVEQ0UzJywgbGluazogJy9wYWdlcy9jb3B5cmlnaHQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTZFMzhcdTYyMEZcdTRFMTZcdTc1NEMgXHVEODNDXHVERkFFJywgbGluazogJy9yZXBvL2dhbWUvMDAgXHU3QjgwXHU4RkYwJyB9LFxyXG5cclxuICAgICAgICAgIHsgdGV4dDogJ1x1NkNENVx1NUY4Qlx1N0IxNFx1OEJCMCBcdUQ4M0RcdURDRDMnLCBsaW5rOiAnaHR0cHM6Ly9oZW5ncWlhbmZhbi5naXRodWIuaW8vbW8tbm90ZXMtZm9yLWxhdy8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTZENEJcdThCRDVcdTk4NzVcdTk3NjIgXHVEODNDXHVERkE4JywgbGluazogJy9wYWdlcy90ZXN0JyB9LFxyXG5cclxuICAgICAgICAgIHsgdGV4dDogJ1x1NjcyQ1x1N0FEOVx1NTczMFx1NTc0MCBHUCcsIGxpbms6ICdodHRwczovL2hlbmdxaWFuZmFuLmdpdGh1Yi5pby9tby1ub3Rlcy8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTUxNzZcdTRFRDZcdTk4NzlcdTc2RUVcdTRFMEVcdThCQTFcdTUyMTInLCBsaW5rOiAncGFnZXMvcGxhbnMnIH0sXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG5cclxuXHJcbiAgICBdLFxyXG5cclxuICAgIHNpZGViYXI6IHNldEFsbFNpZGViYXJzKFtcclxuICAgICAgWycvcmVwby9jb21wdXRlci1pbml0JywgMV0sXHJcblxyXG5cclxuICAgICAgWycvcmVwby9idWlsZC1zaXRlJywgMV0sXHJcbiAgICAgIFsnL3JlcG8vY29tcHV0ZXInLCAxXSxcclxuXHJcblxyXG5cclxuICAgICAgWycvcmVwby9wcm9ncmFtbWluZy9odG1sJywgMV0sXHJcbiAgICAgIFsnL3JlcG8vcHJvZ3JhbW1pbmcvc2NzcycsIDFdLFxyXG4gICAgICBbJy9yZXBvL3Byb2dyYW1taW5nL2phdmFzY3JpcHQnLCAxXSxcclxuICAgICAgWycvcmVwby9wcm9ncmFtbWluZy90eXBlc2NyaXB0JywgMV0sXHJcbiAgICAgIFsnL3JlcG8vcHJvZ3JhbW1pbmcvbm9kZWpzJywgMV0sXHJcbiAgICAgIFsnL3JlcG8vcHJvZ3JhbW1pbmcvbmV0d29yay1yZXF1ZXN0JywgMV0sXHJcblxyXG5cclxuXHJcbiAgICAgIFsnL3JlcG8vcHJvZ3JhbW1pbmcvcmVhY3QnLCAxXSxcclxuICAgICAgWycvcmVwby9wcm9ncmFtbWluZy92dWUnLCAxXSxcclxuXHJcbiAgICAgIFsnL3JlcG8vcHJvZ3JhbW1pbmcvbXlzcWwnLCAxXSxcclxuXHJcblxyXG4gICAgICBbJy9yZXBvL3Byb2dyYW1taW5nL2VsZWN0cm9uJywgMV0sXHJcbiAgICAgIFsnL3JlcG8vcHJvZ3JhbW1pbmcvdW5pYXBwJywgMV0sXHJcblxyXG4gICAgICBbJy9yZXBvL3Byb2dyYW1taW5nL2RvY2tlcicsIDFdLFxyXG5cclxuICAgICAgWycvcmVwby92aXRlcHJlc3MnLCAxXSxcclxuICAgICAgWycvcmVwby9naXRodWInLCAxXSxcclxuICAgICAgWycvcmVwby92c2NvZGUnLCAxXSxcclxuXHJcblxyXG4gICAgICBbJy9yZXBvL3Byb2dyYW1taW5nL3B5dGhvbicsIDFdLFxyXG5cclxuICAgICAgWycvcmVwby9jb2Nvcy1jcmVhdG9yJywgMV0sXHJcblxyXG4gICAgICBbJy9wYWdlcy9oaXN0b3J5LXVwZGF0ZWQnLCAxXSxcclxuXHJcbiAgICAgIFsnL3JlcG8vZ2FtZScsIDFdXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIF0pLFxyXG5cclxuICAgIC8vIG91dGxpbmU6IFsxLCA2XSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgbGFiZWw6IFwiXHU3NkVFXHU1RjU1XCIsXHJcbiAgICAgIC8vIFx1NTZFMFx1NEUzQVx1ODk4MVx1NTM2MFx1NzUyOGgxXHU1MDVBXHU3RjUxXHU5ODc1XHU1MjZGXHU2ODA3XHU5ODk4XHJcbiAgICAgIGxldmVsOiBbMiwgNl0sXHJcbiAgICB9LFxyXG4gICAgLy8gbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcclxuICAgICAgLy8gcHJvdmlkZXI6ICdhbGdvbGlhJ1xyXG4gICAgfSxcclxuICAgIGRvY0Zvb3Rlcjoge1xyXG4gICAgICBwcmV2OiAnXHU0RTBBXHU0RTAwXHU3QkM3JyxcclxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1N0JDNydcclxuICAgIH0sXHJcblxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oZW5ncWlhbmZhbi9tby1ub3RlcycgfVxyXG4gICAgXSxcclxuXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4J1xyXG4gIH0sXHJcblxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgICBtZC51c2UobWFya2Rvd25JdEZvb3Rub3RlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcY29kZXNcXFxcd2ViXFxcXG1vLW5vdGVzXFxcXHJvb3QtZG9jc1xcXFwudml0ZXByZXNzXFxcXGZhbnMtdG9vbHNcXFxcdG9vbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVzXFxcXHdlYlxcXFxtby1ub3Rlc1xcXFxyb290LWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxmYW5zLXRvb2xzXFxcXHRvb2xzXFxcXGF1dG9TaWRlYmFyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2Rlcy93ZWIvbW8tbm90ZXMvcm9vdC1kb2NzLy52aXRlcHJlc3MvZmFucy10b29scy90b29scy9hdXRvU2lkZWJhci5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXHJcblxyXG5cclxuLyoqXHJcbiAqIHZpdGVwcmVzc1x1OTg3OVx1NzZFRVx1NzY4NFx1NjgzOVx1NzZFRVx1NUY1NVxyXG4gKi9cclxuY29uc3Qgcm9vdCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLicpXHJcblxyXG4vKipcclxuICogXHU0RkE3XHU4RkI5XHU2ODBGXHU0RTJEXHU4OTgxXHU1RkZEXHU3NTY1XHU3Njg0XHU2NTg3XHU0RUY2XHU2MjE2XHU4MDA1XHU3NkVFXHU1RjU1XHJcbiAqL1xyXG5jb25zdCBpZ25vcmVfbGlzdCA9IFsnaW5kZXgubWQnLCAnLnZpdGVwcmVzcycsICdub2RlX21vZHVsZXMnLCAnLmlkZWEnLCAnYXNzZXRzJywgJ2VtYmVkZGVkX25vdGVzJywgJ3hyZXBvJ11cclxuXHJcbi8vIFx1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NjYyRlx1NjU4N1x1NEVGNlx1NTkzOVxyXG5jb25zdCBpc0RpciA9IChwYXRoKSA9PiBmcy5sc3RhdFN5bmMocGF0aCkuaXNEaXJlY3RvcnkoKVxyXG5cclxuXHJcbmNvbnN0IHByb2Nlc3NfZmlsZW5hbWUgPSAobW9tbykgPT4ge1xyXG4gICAgbGV0IHJlczEgPSBtb21vLnNwbGl0KCcubWQnKVswXVxyXG4gICAgbGV0IHJlczIgPSByZXMxLnNwbGl0KCcgJylbMV1cclxuICAgIHJldHVybiByZXMyXHJcbn1cclxuXHJcbmNvbnN0IHByb2Nlc3NfZmlsZW5hbWVfcGFydCA9IChtb21vKSA9PiB7XHJcbiAgICBsZXQgcmVzMSA9IG1vbW8uc3BsaXQoJy5tZCcpWzBdXHJcbiAgICByZXR1cm4gcmVzMVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFx1OEZEOVx1NjYyRlx1NEUwMFx1NEUyQVx1NTIxQlx1OTAyMFx1NEZBN1x1OEZCOVx1NjgwRlx1NzY4NFx1NTFGRFx1NjU3MFxyXG4gKiBAcGFyYW0ge1x1NzZFRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOX0gZGlyX3VucHJvY2Vzc2VkIFxyXG4gKiBAcGFyYW0ge1x1NUM1NVx1NUYwMFx1NzY4NFx1NUM0Mlx1N0VBN30gZm9sZGVyX2xldmVsIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZV9zaWRlYmFyID0gKGRpcl91bnByb2Nlc3NlZCwgZm9sZGVyX2xldmVsKSA9PiB7XHJcblxyXG4gICAgLy8gXHU4M0I3XHU1M0Q2XHU1QjhDXHU2NTc0XHU4REVGXHU1Rjg0XHJcbiAgICBjb25zdCBkaXJfcGF0aCA9IHBhdGguam9pbihyb290LCBkaXJfdW5wcm9jZXNzZWQpXHJcblxyXG4gICAgY29uc3QgZmlsZXNfYWxsID0gZnMucmVhZGRpclN5bmMoZGlyX3BhdGgpXHJcblxyXG5cclxuICAgIGNvbnN0IGlzX2VmZmVjdGl2ZSA9IChhcnIxLCBhcnIyKSA9PiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyMS5maWx0ZXIoKGl0ZW0pID0+ICFuZXcgU2V0KGFycjIpLmhhcyhpdGVtKSkpKVxyXG5cclxuXHJcbiAgICBjb25zdCBmaWxlc19lZmZlY3RpdmUgPSBpc19lZmZlY3RpdmUoZmlsZXNfYWxsLCBpZ25vcmVfbGlzdClcclxuXHJcbiAgICBjb25zdCBuZXdfbGV2ZWwgPSAwXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7XHU2NTg3XHU0RUY2XHU1OTM5XHU0RTJEXHU3Njg0XHU5ODc5XHU3NkVFXHU0RUVDfSBpdGVtcyBcclxuICAgICAqIEBwYXJhbSB7XHU4QkU1XHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU1QjhDXHU2NTc0XHU4REVGXHU1Rjg0fSByZXBvX3BhdGggXHJcbiAgICAgKiBAcGFyYW0ge1x1NzZGOFx1NUJGOVx1NzZFRVx1NUY1NX0gZGlyX3VucHJvY2Vzc2VkIFxyXG4gICAgICogQHBhcmFtIHtcdTYyOThcdTUzRTBcdTc2ODRcdTVDNDJcdTdFQTd9IGZvbGRlcl9sZXZlbCBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBjb25zdCBjcmVhdGVfbGlzdCA9IChpdGVtcywgcmVwb19wYXRoLCBkaXJfdW5wcm9jZXNzZWQsIGZvbGRlcl9sZXZlbCwgbm93X2xldmVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmluYWxfbGlzdCA9IFtdXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXVxyXG4gICAgICAgICAgICBjb25zdCBpdGVtX3BhdGggPSBwYXRoLmpvaW4ocmVwb19wYXRoLCBpdGVtKVxyXG4gICAgICAgICAgICBjb25zdCBpc0Rpcl9yZXMgPSBpc0RpcihpdGVtX3BhdGgpXHJcbiAgICAgICAgICAgIGlmIChpc0Rpcl9yZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NEUwQlx1N0VBN1x1NUZBQVx1NzNBRlx1NTE4NVx1NUJCOVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X2l0ZW1zID0gZnMucmVhZGRpclN5bmMoaXRlbV9wYXRoKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXJfbmFtZV9wcm9jZXNzZWQgPSBwcm9jZXNzX2ZpbGVuYW1lKGl0ZW0pXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld19mbG9kZXIgPSBgJHtkaXJfdW5wcm9jZXNzZWR9LyR7aXRlbX1gXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFub3dfbGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3dfbGV2ZWwgPSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRfbGV2ZWwgPSBub3dfbGV2ZWwgKyAxXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2xsYXBzZWRfc3RhdGUgPSBCb29sZWFuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vd19sZXZlbCA+IGZvbGRlcl9sZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZF9zdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkX3N0YXRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZpbmFsX2xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZGlyX25hbWVfcHJvY2Vzc2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VkX3N0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBjcmVhdGVfbGlzdChuZXdfaXRlbXMsIGl0ZW1fcGF0aCwgbmV3X2Zsb2RlciwgZm9sZGVyX2xldmVsLCBuZXh0X2xldmVsKSxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVfbmFtZSA9IHBhdGguYmFzZW5hbWUoaXRlbV9wYXRoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZV9leHQgPSBwYXRoLmV4dG5hbWUoaXRlbV9wYXRoKVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVfZXh0ICE9PSAnLm1kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmaWxlX25hbWVfcHJvY2Vzc2VkID0gcHJvY2Vzc19maWxlbmFtZShmaWxlX25hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVfbmFtZV9wcm9jZXNzZWRfcGFydCA9IHByb2Nlc3NfZmlsZW5hbWVfcGFydChmaWxlX25hbWUpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZpbmFsX2xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZmlsZV9uYW1lX3Byb2Nlc3NlZCxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBgJHtkaXJfdW5wcm9jZXNzZWR9LyR7ZmlsZV9uYW1lfWBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmluYWxfbGlzdFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3JlYXRlX2xpc3QoZmlsZXNfZWZmZWN0aXZlLCBkaXJfcGF0aCwgZGlyX3VucHJvY2Vzc2VkLCBmb2xkZXJfbGV2ZWwsIG5ld19sZXZlbClcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBbGxTaWRlYmFycyA9IChhcnIpID0+IHtcclxuICAgIGxldCBvYmogPSB7fVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCByZXBvID0gYXJyW2ldXHJcblxyXG4gICAgICAgIGxldCByZXBvX25hbWUgPSByZXBvWzBdXHJcblxyXG4gICAgICAgIGxldCBsZXZlbCA9IHJlcG9bMV1cclxuXHJcbiAgICAgICAgb2JqW3JlcG9fbmFtZV0gPSBjcmVhdGVfc2lkZWJhcihyZXBvX25hbWUsIGxldmVsKVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqXHJcblxyXG59XHJcblxyXG5cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2Rlc1xcXFx3ZWJcXFxcbW8tbm90ZXNcXFxccm9vdC1kb2NzXFxcXC52aXRlcHJlc3NcXFxcZmFucy10b29sc1xcXFx0b29sc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kZXNcXFxcd2ViXFxcXG1vLW5vdGVzXFxcXHJvb3QtZG9jc1xcXFwudml0ZXByZXNzXFxcXGZhbnMtdG9vbHNcXFxcdG9vbHNcXFxcY3JlYXRlQXJ0aWNsZUluZGV4ZXMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGVzL3dlYi9tby1ub3Rlcy9yb290LWRvY3MvLnZpdGVwcmVzcy9mYW5zLXRvb2xzL3Rvb2xzL2NyZWF0ZUFydGljbGVJbmRleGVzLmpzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgZnMgZnJvbSAnbm9kZTpmcydcclxuaW1wb3J0IHsgbG9nIH0gZnJvbSAnbm9kZTpjb25zb2xlJ1xyXG5cclxuLy8gY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5jb25zdCBydW5pbmcgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvb3QgPSBfX2Rpcm5hbWUuc3BsaXQoJy52aXRlcHJlc3MnKVswXVxyXG5cclxuXHJcbiAgICAvLyBcdTY1ODdcdTdBRTBcdTRFRDNcdTVFOTNcdTc2ODRcdTRGNERcdTdGNkVcclxuXHJcbiAgICBjb25zdCByZXBvX2RpciA9IHBhdGgucmVzb2x2ZShyb290LCAnYXJ0aWNsZXMnKVxyXG5cclxuICAgIC8vIFx1OTAxQVx1OEZDN1x1NjU4N1x1NEVGNlx1NTkzOVx1RkYwQ1x1OEJGQlx1NTNENlx1OTFDQ1x1OTc2Mlx1NzY4NFx1NjI0MFx1NjcwOVx1NjU4N1x1N0FFMFx1NzY4NFx1RkYxQVx1NjgwN1x1OTg5OCBcdTU0OEMgXHU3RjE2XHU1M0Y3IFx1NEVFNVx1NTNDQVx1NjAzQlx1NjU3MFx1OTFDRlxyXG5cclxuICAgIGNvbnN0IGZpbGVzX2FsbCA9IGZzLnJlYWRkaXJTeW5jKHJlcG9fZGlyKVxyXG5cclxuICAgIC8vIFx1ODNCN1x1NTNENlx1NjU4N1x1N0FFMFx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgY29uc3QgYXJ0aWNsZXNDb3VudHMgPSBmaWxlc19hbGwubGVuZ3RoXHJcblxyXG4gICAgLy8gXHJcbiAgICBjb25zdCByZXBvaW5kZXggPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNfYWxsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge31cclxuXHJcbiAgICAgICAgLy8gXHU2REZCXHU1MkEwXHU2ODA3XHU5ODk4XHUzMDAxem9pZFx1NjU3MFx1NjM2RSBcclxuICAgICAgICBvYmouem9pZCA9IGZpbGVzX2FsbFtpXS5zcGxpdCgnICcpWzBdXHJcbiAgICAgICAgb2JqLnRpdGxlID0gZmlsZXNfYWxsW2ldLnNwbGl0KCcgJylbMV1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQXJ0aWNsZUluZGV4ZXMgPSAoKSA9PiB7XHJcbiAgICBydW5pbmcoKVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUVqVixPQUFPLHdCQUF3Qjs7O0FDRm9WLE9BQU8sVUFBVTtBQUNwWSxPQUFPLFFBQVE7QUFEZixJQUFNLG1DQUFtQztBQU96QyxJQUFNLE9BQU8sS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFLL0MsSUFBTSxjQUFjLENBQUMsWUFBWSxjQUFjLGdCQUFnQixTQUFTLFVBQVUsa0JBQWtCLE9BQU87QUFHM0csSUFBTSxRQUFRLENBQUNBLFVBQVMsR0FBRyxVQUFVQSxLQUFJLEVBQUUsWUFBWTtBQUd2RCxJQUFN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QUFjLENBQUM7QUFBQSxJQVlsQixDQUFDO0FBQUE7QUFBQSxJQUdELFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQTtBQUFBLE1BRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLElBQ2Q7QUFBQTtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsSUFFWjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUVBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sMENBQTBDO0FBQUEsSUFDcEU7QUFBQSxJQUVBLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFFQSxVQUFVO0FBQUEsSUFDUixRQUFRLENBQUMsT0FBTztBQUNkLFNBQUcsSUFBSSxrQkFBa0I7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgImRpcl91bnByb2Nlc3NlZCIsICJmb2xkZXJfbGV2ZWwiLCAicGF0aCIsICJmcyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyb290IiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGgiLCAiZnMiXQp9Cg==
