## 综述
支持内部修改input的value时，监测重置placeholder状态的组件
## 组件快速使用

初始化代码：

<code>
var placeholder = new Placeholder({
             node : '#J_Test'
         });
</code>

能监听通过val()方法修改input的value值时重置placeholder状态

同时也提供方法：

<code>
placeholder.check();//外部调用方法重置状态
</code>