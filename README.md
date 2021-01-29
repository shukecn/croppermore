# croppermore 多规格用户头像生成,FLASH替代品；
##  实现多个不同大小图片缩略图效果
鉴于FLASH永远退出了历史的舞台。由FLASH生成缩略图成为了新的问题。  
本教程使用JS来完整实现，用户拖动图片生成三张缩略图效果；   
canvas 分别生成三张图片缩略图效果 
[ 162*162, 48*48, 20*20 ]

    
## 所用前端框架
- bootstrap4
- vuejs
- cropperjs

## 可扩展移植后端（web）
- php
- java
- node
- python



## dist/croppermore.js
该文件为vue原文件+实例，使用Webpack生成后可直接使用！
样式文件

```css
    .cropper-container{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.cropper-container img{width:100%;height:100%;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important}.cropper-modal,.cropper-canvas{position:absolute;top:0;right:0;bottom:0;left:0}.cropper-canvas{background-color:#fff;opacity:0;filter:alpha(opacity=0)}.cropper-modal{background-color:#000;opacity:.5;filter:alpha(opacity=50)}.cropper-dragger{position:absolute;top:10%;left:10%;width:80%;height:80%}.cropper-viewer{display:block;width:100%;height:100%;overflow:hidden;outline-width:1px;outline-style:solid;outline-color:#69f;outline-color:rgba(51,102,255,.75)}.cropper-dashed{position:absolute;display:block;border:0 dashed #fff;opacity:.5;filter:alpha(opacity=50)}.cropper-dashed.dashed-h{top:33.3%;left:0;width:100%;height:33.3%;border-top-width:1px;border-bottom-width:1px}.cropper-dashed.dashed-v{top:0;left:33.3%;width:33.3%;height:100%;border-right-width:1px;border-left-width:1px}.cropper-face,.cropper-line,.cropper-point{position:absolute;display:block;width:100%;height:100%;opacity:.1;filter:alpha(opacity=10)}.cropper-face{top:0;left:0;cursor:move;background-color:#fff}.cropper-line{background-color:#69f}.cropper-line.line-e{top:0;right:-3px;width:5px;cursor:e-resize}.cropper-line.line-n{top:-3px;left:0;height:5px;cursor:n-resize}.cropper-line.line-w{top:0;left:-3px;width:5px;cursor:w-resize}.cropper-line.line-s{bottom:-3px;left:0;height:5px;cursor:s-resize}.cropper-point{width:5px;height:5px;background-color:#69f;opacity:.75;filter:alpha(opacity=75)}.cropper-point.point-e{top:50%;right:-3px;margin-top:-3px;cursor:e-resize}.cropper-point.point-n{top:-3px;left:50%;margin-left:-3px;cursor:n-resize}.cropper-point.point-w{top:50%;left:-3px;margin-top:-3px;cursor:w-resize}.cropper-point.point-s{bottom:-3px;left:50%;margin-left:-3px;cursor:s-resize}.cropper-point.point-ne{top:-3px;right:-3px;cursor:ne-resize}.cropper-point.point-nw{top:-3px;left:-3px;cursor:nw-resize}.cropper-point.point-sw{bottom:-3px;left:-3px;cursor:sw-resize}.cropper-point.point-se{right:-3px;bottom:-3px;width:20px;height:20px;cursor:se-resize;opacity:1;filter:alpha(opacity=100)}.cropper-point.point-se:before{position:absolute;right:-50%;bottom:-50%;display:block;width:200%;height:200%;content:" ";background-color:#69f;opacity:0;filter:alpha(opacity=0)}@media(min-width:768px){.cropper-point.point-se{width:15px;height:15px}}@media(min-width:992px){.cropper-point.point-se{width:10px;height:10px}}@media(min-width:1200px){.cropper-point.point-se{width:5px;height:5px;opacity:.75;filter:alpha(opacity=75)}}.cropper-hidden{display:none!important}.cropper-invisible{position:fixed;top:0;left:0;z-index:-1;width:auto!important;max-width:none!important;height:auto!important;max-height:none!important;opacity:0;filter:alpha(opacity=0)}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-canvas,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}
    .eg-wrapper {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC);border:4px solid black;box-shadow:inset 0 0 3px #f7f7f7;height:400px;width:400px;overflow:hidden}
    .eg-wrapper img {width:100%}
```


---------------------------------------
  
auther:shuke  
qq:896158959@qq.com  
time:20210129  
  