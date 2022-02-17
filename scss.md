# SCSS
## Scss变量
1. $变量名


# CSS
#### var()
var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）
#### :root
:root是一个伪类，表示文档根元素，非IE及ie8及以上浏览器都支持，在:root中声明相当于全局属性，只要当前页面引用了:root segment所在文件，都可以使用var()来引用
~~~
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
~~~