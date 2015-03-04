## 甜品礼物WEB前端开发规范（V0.1）

### 总原则

tab键统一为 <strong>4个空格</strong> 代替
  因为在不同系统中，编辑工具对tab解析不一样，windows下tab键是4个空格位置，而在linux下是8个

### 文件规范：
* 文件目录: 所有前端静态资源存放到res/static目录，子目录分为lib、js、css、html、img（lib存放公共资源）
* 文件分离: html和css、js代码不能互相入侵，做到严格分离，比如对应的css代码需要放在css文件中，然后通过外部引用到html文件
* 文件命名: 只能出现小写引文字母，且只包含字母和数字，多个单词以连字符 ( - ) 连接，首页一般采用index命名，eg：index.js
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

#### 3、CSS（麻烦全龙补充）
* 统一个页面CSS尽量都写到同一个css文件中（oop组件化最终也会打包压缩到同一文件中）
* 从外部文件加载CSS，尽可能减少文件数，加载标签必须放在文件的 HEAD 部分
* CSS的外部引用 LINK 标签加载，尽量避免使用@import
* 禁止使用table布局，div也要避免多层嵌套，尽量少使用id，原则上Id用于父级别大规模单一元素，class用于重复使用的子模块中
* 颜色统一使用十六进制的颜色单位，使用color: #FF0000替代color: red，特殊场景需要用到rgba除外
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

#### 4、JAVASCRIPT
* 类命名：首字母大写，驼峰命名，eg： TabPanel
* 函数命名：首字母小写，驼峰命名，eg：getValue()
* 变量命名：首字母小写，驼峰命名，eg：myCount
* jQuery变量要求首字符为 $， 私有变量:首字符为_， 常量：全大写

  ```
    var $name = $('#nameId');
    var _sex = '女';
    var PI = 3.1415926;
  ```
* JSON 格式风格：属性名和值添加双引号，值与属性间一个空格，最后一个属性后不要添加逗号

  ```
    var record = {
      "id": "1",
      "name": "zhangsan",
      "sex": "男"
    }
  ```
* JS尽量使用oop思想做到组件化，每一个组件是一个单独的文件（或文件夹）
* 变量声明必须使用var，避免全局变量的使用，如window.name = '' 或者 name = ''
* 所有的前端异常，需要做到单一性处理，不能一个try catch里面包含多个可能性
* 良好的注释信息：每个方法定义前需要注明方法作用，参数说明

  ```
    /**
     * 功能描述
     * @param <String> arg1 参数1
     * @param <Number> arg2 参数2，默认为0
     * @return <Boolean> 返回值类型和说明
     */
     function getValue (arg1, arg2) {

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
* 条件判断请用 "===" ，尽量不要用 "=="
* if、while、for、do语句的执行体总是用"{"和"}"括起来，即使在其结构体内只有一条语句

  ```
    if(true){
      console.log(hello word!);
    }
  ```

### 工具使用(MAC)：
  * 建议用sublime（不做强制，sublime的插件机制实在太赞了）
  * HTTP抓包及Post/Get模拟：[Charles](http://www.charlesproxy.com/)
  * markdown 语法使用 [mou](http://25.io/mou/)