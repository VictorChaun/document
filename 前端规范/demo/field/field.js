/**
 * class Field
 * extends core/view
 * @param {object} [options] 配置参数
 *    name             :  {String} name
 *    value            :  {String} 值
 *    validateonblur   :  {boolean} 是否焦点离开时验证，默认false
 *    validateonchange :  {boolean} 是否文本改变时验证，默认true
 *    allowblank       :  {boolean} 是否允许为空，默认true
 *    emptytext        :  {String} 为空时，错误提示显示信息
 *    regex            :  {String|RegExp} 规则验证正则表达式
 *    regexinvalidtype :  {boolean} 表达式匹配结果，true表示正则表达式正确匹配时，验证失败；false表示表达所没有正确匹配时，验证失败。默认false
 *    invalidtext      :  {String} 验证失败时提示信息
 *    type             :  {String} 输入框类型
 *    width            :  {String} 宽度
 *    isdisabled       :  {boolean} 是否置为不可用，默认为false
 *    maxlength        :  {number} 最大长度
 *    minlength        :  {number} 最小长度
 *    copywriter       :  {String} 提示文案
 */
var Field = function(){};
View._extend(Field, {
  _className : 'field',
  value : '',
  validateonblur : false,
  validateonchange : true,
  allowblank : true,
  emptytext : '不能为空!',
  invalidtext : '',
  regexinvalidtype : false,
  type : 'text',
  isvalidatesuccess : true,
  formfield : true,
  isdisabled : false,
  copywriter: '',
  _tplName : 'field',
  _cssName : [],
  _loadCss : function(done){
    // 加载CSS
  },
  _loadTpls : function(done){
    // 加载模板
  },
  init : function(){
    // 初始化
  },
  initEvents : function(){
    // 初始化组件相关事件
  },
  initData : function(){
    // 初始化数据 
  },
  afterCompile : function(){
    // 组件初始化完成后执行
  },
  afterRender : function(){
    // 组件dom渲染完执行
  },
  getValue : function(){
    // 获取值
  },
  validate : function(){
    // 正则校验
  },
  focus : function(){
    // 获取焦点
  },
  disabled : function(){
    // disbale
  },
  enabled : function(){
    // enable
  },
  getLength: function(str){
    // 获取输入长度
  }
});