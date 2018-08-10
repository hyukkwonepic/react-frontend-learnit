# 리액트 입문 - 코드 예제

## 목차

- [ES6](#es6)
  - [let 과 const](#let-과-const)
  - [forEach, map](#foreach-map)
  - [화살표 함수 (Arrow function)](#화살표-함수-arrow-function)
  - [class](#class)
  - [전개 연산자](#전개-연산자)
  - [객체 줄여쓰기](#객체-줄여쓰기)
- [컴포넌트 작성하기](#컴포넌트-작성하기)
- [챌린지: 컴포넌트 작성하기](#챌린지-컴포넌트-작성하기)
- [챌린지: 컴포넌트 분리하기](#챌린지-컴포넌트-분리하기)

## ES6

### let 과 const

```
var name = 'alex';
var age = '26';
var address = 'Seoul';
```

```
const name = 'alex';
let age = '26';
let address = 'Seoul';
```
`let`은 선언 후 할당이 가능하고 `const`는 새로운 값을 할당할 수 없습니다.

```
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2
```
`var`는 function 스코프(scope)에서 변수를 선언합니다.

```
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```
`const`, `let`은 block 스코프(scope)에서 변수를 선언합니다.


### forEach, map

```
const before = [ 1, 2, 3, 4, 5 ];
const after = [];

before.forEach((item) => {
  after.push(item * 2);
});

console.log(after); // [ 2, 4, 6, 8, 10 ];
```
forEach는 Array를 루프를 돌면서 작업을 수행합니다. 각 요소는 함수의 첫번째 인자 item입니다.

```
const before = [ 1, 2, 3, 4, 5 ];

const after = before.map((item) => {
  return item * 2;
});

console.log(after); // [ 2, 4, 6, 8, 10 ];
```
map은 Array를 루프를 돌면서 작업을 수행하고 새로운 Array를 생성합니다.

### 화살표 함수 (Arrow function)

```
// 일반적인 함수

function square (input) {
  return input * input;
}
```

```
// 화살표 함수

const square = (input) => input * input;

const square = (input) => {
  return input * input;
}
```
화살표 함수에서는 중괄호를 작성하지 않으면 선언문이 return 됩니다.

### class

```
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const doggy = new Animal('멍뭉이', 'dog');
console.log(doggy.name) // 멍뭉이
console.log(doggy.type) // dog
```

`class`를 사용하여 클래스를 선언합니다.

```
// 클래스 상속

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.type = 'bird';
  }
}

const birdy = new Bird('짹짹이');
console.log(birdy.name); // 짹짹이
console.log(birdy.type); // bird
```

`class ... extends`로 클래스를 상속할 수 있습니다.

### 전개 연산자

```
const obj = {
  a: '1',
  b: '2', 
  c: '3',
}

const { a, b, c } = obj;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

```
객체의 속성명을 변수명으로 선언하고 값을 할당합니다.

```
const list = [ 1, 2, 3, 4, 5, 6 ];
const [ a, b, ...rest ] = list;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [ 3, 4, 5, 6 ]
```
Array의 값을 변수에 할당합니다.


### 객체 줄여쓰기

```
const name = 'alex';
const age = '26';
const address = 'seoul';

const obj = {
  name: name,
  age: age,
  address: address
}
```

```
const name = 'alex';
const age = '26';
const address = 'seoul';

const obj = {
  name,
  age,
  address
}
```

객체의 속성과 속성에 지정하는 값의 변수명이 같으면 줄여서 작성할 수 있습니다.

## 컴포넌트 작성하기

```
class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className='large'>Hello World</h1>
    );
  }
}
```
JSX를 사용해 작성한 컴포넌트입니다.

```
class HelloWorld extends React.Component {
  render() {
    return (
      React.createElement(
        'h1',
        {className: 'large'},
        'Hello World'
      )
    );
  }
}
```
JSX 없이 작성한 컴포넌트 입니다.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <!-- Script tags including React -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    var app = <h1>Hello world</h1>
    var mountComponent = document.querySelector('#app');
    ReactDOM.render(app, mountComponent);
  </script>
</body>
</html>
```
HTML 스크립트 위에 리액트 컴포넌트를 작성할 수 있습니다. 리액트 패키지와 babel 패키지를 script로 삽입합니다. 그 후 새로운 script 태그 내부에 리액트 코드를 작성합니다.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <!-- Script tags including React -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    class App extends React.Component {
      render() {
        return <h1>Hello from our app</h1>
      }
    }
    ReactDOM.render(<App />, document.querySelector('#app'));
  </script>
</body>
</html>
```
<App /> 컴포넌트를 작성했습니다.


## 챌린지: 컴포넌트 작성하기

```
// challenge

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>자기소개</h1>
        // img src
        // span 한줄 소개
        // ul
          // li 이름
          // li 사는 동네
          // li 회사, 학교 동네
      </div>
    );
  }
}
```

위의 컴포넌트에서, 각 위치에 알맞은 엘리먼트를 사용하여 컴포넌트를 완성해 주세요.

```
// solution

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>자기소개</h1>
        <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t31.0-8/16665220_1341861682536945_6515544790253936304_o.jpg?_nc_cat=0&oh=d9729f1dd5c1239d01c7ea6ff53e4bbb&oe=5C0A254B" />
        <span>저는 주짓수를 즐겨합니다.</span>
        <ul>
          <li>이름: 권혁우</li>
          <li>사는 동네: 서울 강북구</li>
          <li>회사 동네: 내가 있는 모든 곳!</li>
        </ul>
      </div>
    );
  }
}
```

## 챌린지: 컴포넌트 분리하기

```
// challenge

class Profile extends React.Component {
  render() {
    return (
      ...
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>자기소개</h1>
        <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t31.0-8/16665220_1341861682536945_6515544790253936304_o.jpg?_nc_cat=0&oh=d9729f1dd5c1239d01c7ea6ff53e4bbb&oe=5C0A254B" />
        <span>저는 주짓수를 즐겨합니다.</span>
        // Profile
      </div>
    );
  }
}
```

이전 챌린지의 코드에 이어, `ul` 요소의 영역을 `Profile`이라는 새로운 컴포넌트로 분리하여 작성해 주세요.

```
// solution

class Profile extends React.Component {
  render() {
    return (
      <ul>
        <li>이름: 권혁우</li>
        <li>사는 동네: 서울 강북구</li>
        <li>회사 동네: 내가 있는 모든 곳!</li>
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>자기소개</h1>
        <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t31.0-8/16665220_1341861682536945_6515544790253936304_o.jpg?_nc_cat=0&oh=d9729f1dd5c1239d01c7ea6ff53e4bbb&oe=5C0A254B" />
        <span>저는 주짓수를 즐겨합니다.</span>
        <Profile />
      </div>
    );
  }
}
```
