# 高校网站模仿--技术总结

## 1. 居中方法

### 1.1 垂直居中

#### 1.1.1 使用外边距居中

使用`margin:0 auto;`可以实现垂直居中

```css
div{
    width:300px;
    height:300px;
    background-color:#ddd;
}
div div{
    width:100px;
    height:100px;
    margin:0 auto;
    background-color:red;
}
```

<div style="width:300px;height:300px;background-color:#ddd;"><div style="width:100px;height:100px;margin:0 auto;background-color:red;"></div></div>

#### 1.1.2 通过`vertical-align:middle;`居中

通过`vertical-align:middle`实现CSS垂直居中

<div style="width: 300px; line-height: 300px; background-color: #ddd">
      <div style="display: inline-block;vertical-align: middle;height: 100px;width: 100px;background-color: red;"></div></div>

**注意:**

- 使用这种方法**只能水平居中**
- 子元素必须是行内块元素即`display:inline-block;`
- 父元素必须使用`line-height`替代`height`
- 这是一种经常失效的方法,必须十分掌握行内元素,块元素,行内块元素,高,行高的原理后,才不容易失效

#### 1.1.2 绝对定位居中

使用"子绝父相" 的方法，加上`left:50%;top:50%;`可以使子元素的左上角位于父元素的中心居中

要使子元素的中心和父元素的中心重合，需要使用`transform:translate(-50%,-50%);`

让子元素沿自己的中心点向左上角移动

此方法适用于垂直和水平居中

```css
div{
    position:relative;
    width:300px;
    height:300px;
    background-color:#ddd;
}
div div{
    position:absolute;
    left:50%;
    top:50%;
    width:100px;
    height:100px;
    background-color:red;
    transform:translate(-50%,-50%);
}
```


<div style="position:relative; width:300px;height:300px;background-color:#ddd;">
    <div style="position:absolute;left:50%;top:50%;width:100px;height:100px;background-color:red;transform:translate(-50%,-50%);"></div></div>

