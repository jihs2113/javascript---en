var person = {
    name: 'Lee',
    sayHello: function(){
        console.log(`name ${this.name}`);
    }
};

//person.name
//person.sayHello(); 메소드로 호출하면 .앞이 this를 가리킨다.
//person.sayHello.call(); 함수로 호출하면 this 지정이 되지않아서 name 반환을 못한다.




