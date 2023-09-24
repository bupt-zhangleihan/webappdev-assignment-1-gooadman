//计算三角形面积
function TriangleAreacalculation(base, height) {
    var area = (base * height) / 2;
    return area;
}

// 调用函数计算三角形面积
var triangleArea = TriangleAreacalculation(6, 4);

// 打印结果
console.log("三角形的面积为：" + triangleArea);

