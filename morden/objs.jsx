//다른 부분들은 객체 생성할때 클래스 만들어서 생성해야된다.
//객체 === 인스턴스 , 프로퍼티
//syntax에러가 나기떄문에 항상 camel case로 작성한다.

var person ={
    name: 'Lee',
    age: 20,
    firstName : 'Un-mo',
};

var obj ={};
var key ='hello';

obj['hello'] = 'world';
obj.hello = 'world';
//var obj = {[key] : 'world'};

console.log(obj);

var foo ={
    "": 'a'
}
foo[""] // 'a'
