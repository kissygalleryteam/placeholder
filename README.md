## placeholder

* 版本：1.0
* 教程：[http://gallery.kissyui.com/placeholder/1.0/guide/index.md](http://gallery.kissyui.com/placeholder/1.0/guide/index.md)
* demo：[http://gallery.kissyui.com/placeholder/1.0/demo/index.html](http://gallery.kissyui.com/placeholder/1.0/demo/index.html)

## changelog

### V1.0
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


