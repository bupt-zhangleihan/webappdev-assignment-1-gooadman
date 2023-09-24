//判断是否为素数
function is_prime(num) {
    if (num<=1){return false;}; //1和0不是素数
    
    for (let i =2;i<=parseInt(Math.sqrt(num));i++){
        if (num%i===0){return false}
    }; //判断一个数是否为素数时，只需要判断它是否能被小于等于它平方根的所有质数整除即可

    return true;   
}

//打印给定两个数值之间所有素数的函数
  function PrimesBetweenNumbersJudge(num1=1, num2=100) {  //设定默认值
      let primes = [];
      for (let i = num1; i <= num2; i++) {
          if (is_prime(i)) {
              primes.push(i);
          }
      }
      if (primes.length === 0) {
          console.log("none");
      } else {
          console.log("这两个数字之间的素数为: " + primes.join(", "));
      }
  }

  //输入两个数字即可
  var test = PrimesBetweenNumbersJudge(3,7)