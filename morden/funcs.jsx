var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`name ${this.name}`);
    },
};

//person.name
//person.sayHello(); 메소드로 호출하면 .앞이 this를 가리킨다.
//person.sayHello.call(); 함수로 호출하면 this 지정이 되지않아서 name 반환을 못한다.

var circle = {
    radius: 5, //프로퍼티

    getDiameter: function () {
        //메서드
        return 2 * this.radius; //this는 circle을 가리킨다.
    },
};
circle.getDiameter(); // 10
const a = (cb) => cb(); //다른 함수로 callback으로 받은경우
a(circle.getDiameter); // NaN // 함수로 넘긴것, 메서드로 넘긴게 아니라, 다른 함수로 한번 더 감싼경우여서

var add1 = new Function('x', 'y', 'return x + y');
var add2 = function (x, y) {
    return x + y;
};
console.log(add(2, 5));
//위 두개는 동일하게 나온다.
// function 생성자를 생성한 함수는 closer를 생성하지 않는등 함수 선언문이나 함수 표현식으로 생성한 함수는 다르게 동작한다.

const add1 = function (x, y) {
    return x + y;
};
const add2 = (x, y) => x + y;
//화살표 함수 => 프로토타입이 없어서 생성자 함수 사용 불가능하다.
