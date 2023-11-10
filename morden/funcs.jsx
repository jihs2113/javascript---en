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
