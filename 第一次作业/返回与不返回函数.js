//有返回函数
function add_func(a=0,b=0){  //包含默认值
    return a+b
}

console.log(add_func(1,2))


//无返回函数
function add_func_1(a,b){
    console.log(a+b)
}

add_func_1(1,4)