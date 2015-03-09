## 甜品礼物WEB前端开发规范（V0.1）

### 总原则

tab键统一为 <strong>4个空格</strong> 代替
  因为在不同系统中，编辑工具对tab解析不一样，windows下tab键是4个空格位置，而在linux下是8个

### 文件规范：
* 文件目录: 所有前端静态资源存放到res/static目录，子目录分为lib、js、css、html、img（lib存放公共资源）
* 文件分离: html和css、js代码不能互相入侵，做到严格分离，比如对应的css代码需要放在css文件中，然后通过外部引用到html文件
* 文件命名: 只能出现小写引文字母，且只包含字母和数字，多个单词以连字符 ( - ) 连接，首页一般采用index命名，eg：my-table.js
* 文件注释: 每个文件需要写明注释信息，方便其他人员维护和再开发
  
  ```
    /**
    *Name: index.html
    *Description: topic list page
    *Author: put(chenmingwu@itianpin.com)
    *Date: 2014\01\01
    **/
  ```
* 文件编码：UTF-8无BOM格式

### 编码规范：

#### 1、通用规范
* 所有的js、css结束行都要有“;”，保证压缩工具断行
* 对于属性定义，确保全部使用双引号，不要使用单引号
* 命名规则：内容优先，表现为辅，可适当缩写

#### 2、HTML
* 每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的表现

  ```
    <!DOCTYPE html>
    <html>
      <head>
      </head>
    </html>
  ```
* 页面统一用UTF-8编码
 
  ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      </head>
    </html>
  ```
* Meta标签的使用（根据需要选择）：

  ```
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Cache-Control" content="max-age=7200" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
* <strong>不准</strong>使用表格(table)布局
* 代码书写严格参照xhtml规范，标签必须全是小写，所有标签都要关闭，即有开始和结束标签，单个标签使用“/”自关闭
* 一个标记必须占用一行，不得出现两个标记在同一行的情况

  ```
    <div>
      <div>
        <span>demo</span>
      </div>
    </div>
  ```
* 不使用已经废弃的标签，如\<center>、\<font>等
* 使用data-xxx形式自定义属性，且属性值必须添加双引号

  ```
    <input data-id="1" data-name="zhangsan">
  ```
* 能以背景形式呈现的图片, 尽量写入css样式中，小图片采用css sprite或data url
* html中尽量避免使用style="xxx:xxx"的内嵌样式表
* 段落分隔符要使用实际对应的\<p>元素，而不是用多个\<br>标签。
* 特殊符号需要做转义，参考HTML [符号实体](http://www.w3school.com.cn/html/html_entities.asp)
* HTML属性顺序（建议），保证易读性
  
  ```
    id、class、name、data-*、src/for/type/href、title/alt
    eg: <div id="myId", class="my" title="hello world">
          ……
        </div>
  ```
* 减少标签数量，避免多余的父节点。
  
  ```
    <!-- Not so great -->
    <span class="avatar">
      <img src="...">
    </span>

    <!-- Better -->
    <img class="avatar" src="...">
  ```
* 在 JavaScript 文件中生成标签让内容变得更难查找，更难编辑，性能更差，尽量避免这种情况的出现

#### 3、CSS（麻烦全龙补充）
* 统一个页面CSS尽量都写到同一个css文件中（oop组件化最终也会打包压缩到同一文件中）
* 从外部文件加载CSS，尽可能减少文件数，加载标签必须放在文件的 HEAD 部分
* CSS的外部引用 LINK 标签加载，尽量避免使用@import

  ```
    import会额外增加页面请求，还可能导致不可预见的问题，可以改用以下方法：
      1、多用几个<link>标签
      2、将css编译到一个文件
  ```
* 禁止使用table布局，div也要避免多层嵌套，尽量少使用id，原则上Id用于父级别大规模单一元素，class用于重复使用的子模块中
* 颜色统一使用十六进制的颜色单位，使用color: #ff0000替代color: red，特殊场景需要用到rgba除外
* 所有十六进制值都应该使用小写字母(因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来)，例如：<font color="FF0000">#fff</font>，尽量使用 <font color="ff0000">#fff</font> 替代<font color="ff0000">#ffffff</font>
* 正确使用缩写，例如navigation就可以缩写为nav，而author就不要缩写
* 书写格式，每个属性值独占一行（禁止写成单行），同时注意缩进规范，(如下例)

  ```
    .header {
      width: 100px;
      height: 100px;
      border: 1px solid #9c9c9c;
    }
  ```
* CSS命名不推荐驼峰，推荐用“-”代替，做到语义化

  ```
    .font{
      width: 100px;
    }
    .font-item{
      height: 100px;
    }
  ```
* 禁止使用"*"来选择元素

  ```
  * {
    margin: 0px;
    padding: 0px;
  }
  ```
* 为每个选择符及每个属性申明单独使用一行

  ```
  h1,
  h2,
  h3 {
    font-size: 20px;
    line-height: 25px;
  }
  ```
* 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;

更多CSS语法问题，请参考[Wikipedia](http://en.wikipedia.org/wiki/Cascading_Style_Sheets#Syntax)

* CSS属性声明顺序：
  
  ```
    基本原则： 
      1、Positioning
      2、Box model 盒模型
      3、Typographic 排版
      4、Visual 外观
    eg：
      .declaration-order {
          /* Positioning */
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 100;

          /* Box-model */
          display: block;
          float: right;
          width: 100px;
          height: 100px;

          /* Typography */
          font: normal 13px "Helvetica Neue", sans-serif;
          line-height: 1.5;
          color: #333;
          text-align: center;

          /* Visual */
          background-color: #f5f5f5;
          border: 1px solid #e5e5e5;
          border-radius: 3px;

          /* Misc */
          opacity: 1;
      }
    Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。
    盒模型紧跟其后，因为他决定了一个组件的大小和位置。
    其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。

  ```
 关于完整的属性以及他们的顺序，请参考 [Recess](http://twitter.github.io/recess/)

 * 减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内

  ```
    .main .content .content-item{
      ……
    }
  ```

#### 4、JAVASCRIPT
* JS尽量使用oop思想做到组件化，每一个组件是一个单独的文件（或文件夹）
* 所有的前端异常，需要做到单一性处理，不能一个try catch里面包含多个可能性
* 类命名：首字母大写，驼峰命名，eg： TabPanel
* 函数命名：首字母小写，驼峰命名，eg：getValue()
* 变量命名：首字母小写，驼峰命名，带有常用名词全部大写

  ```
    var myHomeAddress;
    var phtoneID;
    var imageURL;
  ```
* 变量声明必须使用var，避免全局变量的使用，如window.name = '' 或者 name = ''
* jQuery变量要求首字符为 $， 私有变量:首字符为_， 常量：全大写

  ```
    var $name = $('#nameId');
    var _sex = '女';
    var PI = 3.1415926;
  ```
* 良好的注释信息

  ```
    多行注释：每个方法定义前需要注明方法作用，参数说明
    /**
     * 功能描述
     * @param <String> arg1 参数1
     * @param <Number> arg2 参数2，默认为0
     * @return <Boolean> 返回值类型和说明
     */
     function getValue (arg1, arg2) {

     }

     单行注释：
    // variable declaration
    var name = '';
    var sex = '男';
    ……
  ```

* 何时使用注释
  
  ```
    难于理解的代码段
    可能存在错误的代码段
    浏览器特殊的HACK代码
    复杂或者想吐槽的业务逻辑代码
    业务逻辑强相关的代码
  ```

* 数组和对象声明
  
  ```
    <!-- Array -->
    // Bad
    var colors = new Array("red", "green", "blue");
    var numbers = new Array(1, 2, 3, 4);

    // Good
    var colors = [ "red", "green", "blue" ];
    var numbers = [ 1, 2, 3, 4 ];

    <!-- Object -->
    // Bad
    var team = new Team();
    team.title = "AlloyTeam";
    team.count = 25;

    // Good
    var team = {
        title: "AlloyTeam",
        count: 25
    };
  ```
* JSON 格式风格：属性名和值添加双引号，值与属性间一个空格，最后一个属性后不要添加逗号

  ```
    var record = {
      "id": "1",
      "name": "zhangsan",
      "sex": "男"
    }
  ```
* 空行的使用

  ```
    1、方法之间添加：
      <!-- 注释信息 -->
      funciton fun1(){
        ……
      }

      <!-- 注释信息 -->
      funciton fun2(){
        ……
      }

    2、单行或多行注释前添加
      function fun1(){
        var _self = this;

        <!-- 注释信息 -->
        ……
      }

    3、逻辑块之间添加空行增加可读性
      function fun1(){
        var _self = this;

        for(var i = 0, len = arr.length; i < len; i++){
          ……（这是一块单独的逻辑处理）
        }
      }
  ```
* 如果是异步编程，回调函数遵循cb(err, data)模式，第一个参数为异常信息，第二个为正常返回值

  ```
    readFile('XXX', function(err, data){
      if(err){
        //异常处理
        return;
      }
      console.log(data);
    });
  ```
* for in 不要用在遍历array上，只能用在object上

  ```
    for(var i = 0, len = arr.length; i < len; i ++){

    }
  ```
* if、while、for、do语句的执行体总是用"{"和"}"括起来，即使在其结构体内只有一条语句

  ```
    if(true){
      console.log(hello word!);
    }
  ```
* 使用字符串 "undefined" 替代 undefined 对变量进行判断
* 条件判断请用 "===" "!==" ，尽量不要用 "=="、"!="
* 除非特殊情况，否则不要使用eval函数

### 工具使用(MAC)：
  * 在线评定网站 [Google PageSpeed](http://developers.google.com/speed/pagespeed/insights/)
  * 建议用sublime（不做强制，sublime的插件机制实在太赞了）
  * HTTP抓包及Post/Get模拟：[Charles](http://www.charlesproxy.com/)
  * markdown 语法使用 [mou](http://25.io/mou/)

### 推荐阅读
  * [web缓存](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
  * [浏览器渲染原理简介](http://coolshell.cn/articles/9666.html)
  * [NodeJS浅谈](http://nqdeng.github.io/7-days-nodejs/)
