# 高级组件用法

## 1. 插槽slot

- slot会接收由外部传入的数据并渲染它
- 子组件的样式，应用从子组件内传入的样式数据
- 命名插槽
- 未命名插槽会被视为默认插槽，未命名内容会在默认插槽中渲染

## 2. 动态组件

- ```html
  <component :is="selected"></component>
  ```

- is是关键字

- 动态组件是被销毁后再次创建

- 但利用  <keep-alive> 可确保组件不被销毁

  ### 动态组件生命周期钩子

  1. deactivated
     - 载入另外一个组件时调用

  2. activated
     - 载入该动态组件时调用