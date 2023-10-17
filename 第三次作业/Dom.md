选取Dom中的Document接口作为讲解对象

选取游戏“以撒的结合”灰机wiki网页作为示例 https://isaac.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5

以下面这段代码为例：
```js
AnmPlayer.createSvgFilterElement = function(R, G, B, A, RO, GO, BO) {
    var NS = "http://www.w3.org/2000/svg";
    if (AnmPlayer.svgRoot == undefined) {
        AnmPlayer.svgRoot = document.createElementNS(NS, "svg");       
        AnmPlayer.svgRoot.setAttribute("style", "display:none");
        document.body.appendChild(AnmPlayer.svgRoot);                   
    }
    var filter = document.createElementNS(NS, "filter");
    var id = "AnmPlayerSvgFilter_" + (AnmPlayer.svgfilter_incrid++);
    filter.setAttribute("id", id);
    var colormat = document.createElementNS(NS, "feColorMatrix");
    colormat.setAttribute("in", "SourceGraphic");
    colormat.setAttribute("type", "matrix");
    colormat.setAttribute("color-interpolation-filters", "sRGB");
    var mat = "";
    mat += R + " 0 0 0 " + RO + "\n";
    mat += "0 " + G + " 0 0 " + GO + "\n";
    mat += "0 0 " + B + " 0 " + BO + "\n";
    mat += "0 0 0 " + A + " 0";
    colormat.setAttribute("values", mat);
    filter.appendChild(colormat);
    AnmPlayer.svgRoot.appendChild(filter);
    return id;
}
```

其中：

document.createElementNS,用给定标签名和命名空间创建一个新的元素；

document.body 表示当前文档中的 body 或 frameset 元素；

document.body.appendChild是为其添加svg元素；

注释版：
```js
AnmPlayer.createSvgFilterElement = function(R, G, B, A, RO, GO, BO) {
    var NS = "http://www.w3.org/2000/svg";  #创建一个命名空间(Namespace)变量NS，用于指定XML命名空间。SVG意为可缩放矢量图形，使用 XML 格式定义图像。
    if (AnmPlayer.svgRoot == undefined) {
        AnmPlayer.svgRoot = document.createElementNS(NS, "svg");       
        AnmPlayer.svgRoot.setAttribute("style", "display:none");
        document.body.appendChild(AnmPlayer.svgRoot);                   
    }  #检查是否已经存在一个全局的SVG根元素（AnmPlayer.svgRoot）。如果不存在，它会创建一个新的SVG根元素，设置其样式为"display:none"，然后将其附加到文档的<body>元素中。


    var filter = document.createElementNS(NS, "filter"); #创建一个新的SVG滤镜元素，以便在后续的代码中添加滤镜效果。这里通过createElementNS方法指定XML命名空间，即前面定义的NS

    var id = "AnmPlayerSvgFilter_" + (AnmPlayer.svgfilter_incrid++);
    filter.setAttribute("id", id);

    var colormat = document.createElementNS(NS, "feColorMatrix"); #同理，创建一个新的svg滤镜元素，用于颜色矫正。该矩阵通过设置不同通道的颜色值（R、G、B、A）和偏移值（RO、GO、BO）来实现颜色处理
    colormat.setAttribute("in", "SourceGraphic");
    colormat.setAttribute("type", "matrix");
    colormat.setAttribute("color-interpolation-filters", "sRGB");
    var mat = "";
    mat += R + " 0 0 0 " + RO + "\n";
    mat += "0 " + G + " 0 0 " + GO + "\n";
    mat += "0 0 " + B + " 0 " + BO + "\n";
    mat += "0 0 0 " + A + " 0";
    colormat.setAttribute("values", mat);
    filter.appendChild(colormat);
    AnmPlayer.svgRoot.appendChild(filter);
    return id;
}



```



