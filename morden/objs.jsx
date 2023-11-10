//다른 부분들은 객체 생성할때 클래스 만들어서 생성해야된다.
//객체 === 인스턴스 , 프로퍼티
//syntax에러가 나기떄문에 항상 camel case로 작성한다.

var person = {
    name: 'Lee',
    age: 20,
    firstName: 'Un-mo',
};

var obj = {};
var key = 'hello';

obj['hello'] = 'world';
obj.hello = 'world';
//var obj = {[key] : 'world'};

console.log(obj);

var foo = {
    '': 'a',
};
foo['']; // 'a'

var prefix = 'prop';
var i = 0;

var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
console.log(obj); //{prop-1: 1, prop-2: 2, prop-3: 3}

var obj = {
    say: function () {
        //프로토타입 o, argument, caller등 x
        console.log();
    },
};
var obj2 = {
    say() {
        //프로토타입 x, argument, caller등 o
        console.log();
    },
};
const a = new obj.say(); //"hi"
const b = new obj2.say(); //undefined
//생성자 함수를 쓸수 있었는데 안된다. 프로토타입이 비어있기 떄문에
console.dir(Array);
//array 열어보면 프로토타입을 인스턴스에 프로토를 연결시켜주는것이라 this 객체를 생성해주는건데 프로토타입이 없어서 안되는것이다.

str.slice(2, 3);
const temps = new String(str);
temps.slice(2, 3); //"l"
//인스턴스로 매서드 적용하고 결과값 얻은 참조가 없어서 다음 날린다.

const c = new String(str);
//생성자 => 객체 생성
//유사배열객체
//배열과 비슷한 인덱스로 프로퍼티에 접근 가능하고 length 프로퍼티를 갖는 객체이다.
