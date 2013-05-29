## 综述
支持内部修改input的value时，监测重置placeholder状态的组件
## 组件快速使用

初始化代码：

```javascript
var placeholder = new Placeholder({
             node : '#J_Test'
         });
```

能监听通过val()方法修改input的value值时重置placeholder状态

同时也提供方法：

```javascript
placeholder.check();//外部调用方法重置状态
```

配置

| 参数名称        | 类型           | 默认值  | 必填 | 备注|| :------------- |:-------------| :-----|:------|:------|| node      | String\|NodeList | null |    是   |  绑定的输入框 || labelTmpl      | HtmlString | \<label class="placeholder-text" style="display: none;color:#9a9a9a;line-height:1.5;position:absolute;left:0;top:0;">&nbsp;\</label> |    否   |  placeholder文字的结构和样式模板 || wapperTmpl      | HtmlString | \<span class="placeholder-wrap" style="position: relative;display:inline-block;zoom:1;">\</span> |    否   |  绑定的输入框 || region      | Object | {width:120,height:20,left:0,top:0} |    否   |  label的定位和宽高设定，不设定将依赖input的宽高去计算label的位置 |

方法

| 方法名称        | 参数           | 备注|| :------------- |:-------------| :-----|| check      | 无| 触发placeholder检查自身应该显示还是隐藏 |