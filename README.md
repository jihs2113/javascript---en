# javascript basic morden

<h3>자주 쓰이는 문법 array 와 object</h3>
<ul>
  <li>indexOf | findIndex() | lastIndexOf() | const count = s.slice(0, i).lastIndexOf(char);  : slice로 자른 후 거꾸로 탐색을 한다.</li>
  <li>sort() | sort((a,b) => a-b)</li>
  <li>at() | array.sort((a,b)=>{return a-b;}).at(Math.floor(array.length/2));  : at은 배열 요소에 접근하여 index값을 아는 경우 루프를 돌리지 않고 value를 가져올수있다.</li>
  <li>some() | includes()   : true false를 반환해준다.</li>
  <li>replace() | replaceAll() | string.replace(/[aeiou]/g, ''); const newList = list.replaceAll('B', ""); : String 해당하는 문자들을 전부 ""로 바꾸고 리턴해준다.</li>
  <li>set() | const newArr = [...new Set(arr)]</li>
  <li>repeat() |  fill()  | arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);    : repeat대신 fill을 활용했다.</li>
  <li>reduce() , concat() | const reduceNewArray = exampleArray.reduce((acc, x) => acc.concat(x), []);</li>
  <li>forEach() , arr.forEach(function(item,index,arr2){}; : 콜백을 사용하여 새로운 배열을 반환한다</li>
  <li>flatMap()  | arr1.flatMap(x => [x * 2]);</li>
  <li>flat()  | const newArray = exampleArray.flat();  const newArray = exampleArray.flat(2); ex)[2,[1,[]]]</li>
  <li>apply()  | const maxValue = Math.max.apply(null, arr);   Math.max(...arr);</li>
  <li>concat()  | const newArr = arr.concat('a', ['b', ['c']], 'abc'); const allRecords =[].concat(...response); : flat과 비슷하지만 배열을 합치면서 이중문 까지만 풀어준다.</li>
  <li>Array.isArray()  | Array.isArray(obj); object를 반환하여 확인한다. but typeof는 객체를 반환 </li>
  <li>Array.from()  | Array.from(arrayLike[, mapFn[, thisArg]]) : [배열로 변환하고자 하는 객체 [,map함수[,this로 사용할 값]] Array.from({length: 5나 다른 조건}, (v, i) => i + 1));Array.from([1, 2, 3], x => x + x);</li>
</ul>

<h3>정규식 표현</h3>
<ul>
  <li>'숫자0~9'가 아닌 것을 모두 찾는다. /^[0-9]+$/.test(str)</li>
  <li>'영어알파벳 대문자/소문자'를 모두 찾는다. /[a-zA-Z]/g.test(str)</li>
  <li>'숫자로만 이루어져있는지 검사. /\D+/</li>
  <li>'한글로만 이루어져있는지 검사. /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;</li>
  <li>'특정 단어로 끝나는지 검사. const fileName = 'index.html'; /html$/</li>
</ul>

<h3>유형 분석</h3>
<ul>
  <li>그리디</li>
  <li>완전탐색</li>
  <li>다이나믹</li>
  <li>탐색</li>
</ul>

<h3>함수 예제</h3>
<ul>
  <li>구조 분해할당</li>
  <h6>실전 사용 예시</h6> 
  
  function solution(binomial) {
    const [a,ex,b] = binomial.split(" ");    
    return (ex === "+")? +a+ +b : (ex === "-")? a - b : a*b
  }

  let id_pw = ["meosseugi", "1234"];
  let db = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]];
  
  function solution(id_pw, db) {
    const [ userId, userPw ] = id_pw;
    for (const [ dbId, dbPw ] of db) {
        if (userId === dbId && userPw === dbPw) return "login";
        else if (userId === dbId && userPw !== dbPw) return "wrong pw";
    }
    return "fail";
}
  
  <h6>한번에 인덱스끼리 swap </h6> 
    let arr = "hello";
    let newArray = arr.split('');

    [newArray[1],newArray[2]] = [newArray[2],newArray[1]];
    result => newArray.join('');
    result = 'hlelo'

  <h6>함수의 반환된 배열 </h6> 
   function foo() {
  return [1, 2];
}

var [a, b] = foo();
console.log(a); // 1
console.log(b); // 2

  <h6>기본 변수 할당 </h6> 
var a = { p: 42, q: true };
var { p, q } = a;

console.log(p); // 42
console.log(q); // true


  <h6>새로운 변수 이름에 할당 </h6> 
var a = { p: 42, q: true };
var { p: foo, q: bar };

console.log(foo); // 42
console.log(bar); // true

  <h6>매개변수에서 구조분해 </h6> 
var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: { firstName: 'John', lastName: 'Doe' },
};

function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42

  <h6>동적 변수 이름 사용 </h6> 
let target = "z"; 
let { [target]: foo } = { z: "bar" };

console.log(foo); // "bar"


  <li>콜백함수:   </li>
    <h6> 1) let arr = [1,2,3,31]; </h6> 
      const nums =(callback) => {
  for(value of arr){
    callback(value)
  }
}

const print =(i) => {
  console.log(i)
}

nums(print)
<h6> 2) let arr = [1,2,3,31]; </h6> 
const indexs = (callback) => {
  for(index in arr){
    callback(index)
  }
}

indexs(function(index){
  console.log(index)
  })


</ul>

<ul>
  <li>forEach:   </li>
    <h6> 1) const numbers = [65, 44, 12, 4]; </h6> 
     numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

</ul>
<h3>nodeJS Jenkins | CI/CD 구축</h3>
<ul>
<h6> Jenkins </h6>
  
<h6> https://choseongho93.tistory.com/297"</h6>
 
<h6>Github Action</h6>
<img width="311" alt="스크린샷 2023-08-23 오후 1 20 20" src="https://github.com/jihs2113/algorithm/assets/48509331/5d0651b9-57e4-4a15-ba03-9de25ba71a81"><br/>
<img width="330" alt="스크린샷 2023-08-23 오후 1 20 31" src="https://github.com/jihs2113/algorithm/assets/48509331/c6b74836-b4ef-4814-987d-f721bb60e527">

<h6>$ npm install jest --save-dev</h6>
<h6>"test": "jest"</h6><br/>

<img width="435" alt="스크린샷 2023-08-23 오후 1 26 51" src="https://github.com/jihs2113/algorithm/assets/48509331/1269f183-55cc-439e-b72b-c4bcba525e84">

<h6>$ npm install @babel/core @babel/preset-env --save-dev</h6>

<img width="629" alt="스크린샷 2023-08-23 오후 1 29 13" src="https://github.com/jihs2113/algorithm/assets/48509331/44838c5f-173a-4db4-9fb6-9f42b928eeb6">



  
핵심 기능으로

ESLint를 통한 코드 스타일 체크
Prettier 적용 여부 체크
jest를 이용한 테스팅 자동화 가 있다.
이 정도만으로도 여러 개발자가 함께 작업할 때, 효율성과 정확성을 매우 높일 수 있다.

위 기능 외에도, ESLint를 통한 체크 후 fix 자동화나 자동 Prettier 적용 등으로 CI에서 기능을 더 추가할 수 있다.

또 만약 typescript를 사용하는 프로젝트라면, ESLint를 비롯한 여러 라이브러리에서 typescript를 컴파일 하는 과정 때문에, 설정이 달라질 수 있으니, 주의해야 한다.

여기에 CD workflow까지 추가하여 자동으로 배포까지 진행할 수 있도록 만든다면, 개발 및 배포에 있어서 최소한의 CI/CD를 구축했다고 말할 수 있곘다.

</ul>


<h3>sever state 및 성능 팁</h3>
<h6>react-query의 활용도 및 성능관리</h6>
<ul>
  <li>caching</li>
  <li>server 데이터 중복 호출 방지
</li>
  <li>out-of-date 파악 후, stale 데이터를 백그라운드에서 제거
</li>
  <li>데이터가 언제 stale되는지 알고 있기
</li>
  <li>만료된 데이터를 빠르게 업데이트하기
</li>
  <li>페이지네이션, lazy loading 데이터의 성능 최적화
</li>
  <li>state의 메모리나 가비지 컬렉터 관리
</li>

</ul>
