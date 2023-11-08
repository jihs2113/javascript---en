//morden basic

console.log(0 === -0); //true
Object.is(0,-0) // false

typeof NAN === 'number' //true

1237819273123n === BigInt(1237819273123) // true

'a\'' //"a'"

typeof null // object

1 + true // 2

1 + false // 1

1 + null // 1

undefined // NaN

1 + undefined // NaN

123 + ''   // '123'

+'0123456'  // 123456

NaN == NaN // false

Object.is(NaN, NaN) // true

let month =10;
let monthName;

switch(month){
    case 1 : monthName = "J"; break;
    case 2 : monthName = "t"; break;
    default:
}

do{
    console.log(count);
    count++;
}
while(true)
    count++;
    if(count===3);


//레이블 for문
//가독성도 나쁘고 객체와 헷갈려서 안쓰는게 좋다.
outer: for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        if(i+j ===3)break outer;
        //break만 하면 내부 for문에서만 빠져나오지만, outer를 선언해주면 outer 스코프 안에 있는 for문을 빠져나온다.
    }
}