# Vue3 + TSX 项目

## 注意

- src/views 文件中只存放可以直接用于 config/routes.tsx 中的“组件”

- 组件可以放在 src/shared 和 src/components 中，shared 放全局通用的。components 放就一个页面用的，组件使用原子化 css 写法时只能使用 class 写法，因为优先级最低，可被外部样式覆盖
