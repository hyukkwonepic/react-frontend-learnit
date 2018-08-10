# 리액트 입문 - 과제

## 복습

- ES6 문법 익히기
- 교재 읽기 => `2-1 리액트의 기본적인 사용법` 부터 `2.4 리액트로 컴포넌트 만들기`

## 과제

1. 인물 정보 표현하기

- 특정 인물의 데이터를 `let`과 `const`를 활용하여 작성합니다.
- 절대 변하지 않을 데이터는 `const`로 작성합니다
- 시간이 흐름에 따라 변할 수 있는 데이터는 `let`으로 작성합니다.

```
// 예시
const name = '미야와키 사쿠라';
const birthYear = '1998';
const height = 163;
let weight = '48kg';
let hobbies = [ '영화 감상', '게임' ];
```

2. Array 데이터 조작하기

- 주어진 array `alphabet`의 내용 중 모음(a, e, i, o, u)인 것만 `console.log()`를 활용하여 출력하는 코드를 작성합니다.

```
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
```

3. 함수 리팩토링

- 다음의 함수 `messageGenerator`를 화살표 함수로 변형하여 표현합니다.
- 템플릿 리터럴(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)을 참고해 작성할 수 있습니다.

```
function messageGenerator ({ name, address }) {
  let message = `안녕하세요? 제 이름은 ${name} 입니다. 저는 ${address}에 살죠.`;
  return message;
}
```

4. 동물의 왕국

- 다음의 `Animal` 클래스의 인스턴스를 생성해주세요.
- `Animal`을 상속하는 클래스 `Dog`, `Cat`을 만들어 주세요. 

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log('')
  }
}
```

5. 객체 분리하기

- 다음의 객체의 각 속성의 값을 전개 연산자를 활용하여 `name`, `age`, `isPresident`, `gender` 변수를 생성해 주세요.

```
const person = {
  name: 'moon-jaein',
  age: 26,
  isPresident: true,
  gender: 'male',
}
```

6. 컴포넌트 생성하기

- 다음의 템플릿에 `Weather` 컴포넌트를 작성하고 DOM에 렌더링 해주세요.
- `Weather` 컴포넌트에는 `<span>지역</span>`, `<span>최저기온</span>`, `<span>최고기온</span>` 요소들을 포함하여 자유롭게 만들어 주세요.

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
    // 
  </script>
</body>
</html>
```

7. 컴포넌트 분리하기

- 다음의 `<App />` 컴포넌트를 `<MemoList />` 컴포넌트로 분리하여 다시 작성 해주세요.

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
    class Memo extends React.Component {
      render() {
        return (
          <div>
            <h1>메모장</h1>
            <div>
              <h2>리스트</h2>
              <div>
                <h3>오늘 찹쌀떡을 먹었다</h3>
                <p>3천원 밖에 안했는데 너무너무 맛있었다. 다음에도 먹어야겠다.</p>
              </div>
              <div>
                <h3>장보기</h3>
                <p>마늘, 감자, 스파게티면, 스파게티 소스를 사야한다.</p>
              </div>
              <div>
                <h3>소개팅</h3>
                <p>다음 주 소개팅이다. 홧팅</p>
              </div>
              <div>
                <h3>배고파</h3>
                <p>오늘 저녁엔 치킨을 한마리 시켜서 맥주와 같이 먹어야겠다.</p>
              </div>
            </div>
          </div>
        )        
      }
    }
    ReactDOM.render(<Memo />, document.querySelector('#app'));
  </script>
</body>
</html>
```


## 해야할 것

- node & npm 설치하기 => https://nodejs.org/en/
- 원하는 에디터 설치하기
  - [VS code](https://code.visualstudio.com/)
  - [Atom](https://atom.io/)
  - [Sublime Text](https://www.sublimetext.com/)