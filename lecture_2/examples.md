# 리액트 익숙해지기 - 코드 예제

## 목차

- create-react-app 설치하기
- 컴포넌트 props & 엘리먼트 반복하기
- 컴포넌트 state & 이벤트 핸들러
- 복합 컴포넌트
- 실습: To-do 앱 만들기


## 컴포넌트 props & 엘리먼트 반복하기

### <List />

```
import React from "react";

// 컴포넌트 props

// 1) 하드코딩
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>한국의 아티스트</h1>
        <ul>
          <li>악동뮤지션</li>
          <li>방탄소년단</li>
          <li>걸스데이</li>
          <li>나인뮤지스</li>
          <li>트와이스</li>
          <li>모모랜드</li>
        </ul>
      </div>
    );
  }
}

// // 2) 컴포넌트 분리
// class Artists extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>악동뮤지션</li>
//         <li>방탄소년단</li>
//         <li>걸스데이</li>
//         <li>나인뮤지스</li>
//         <li>트와이스</li>
//         <li>모모랜드</li>
//       </ul>
//     );
//   }
// }

// class List extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>한국의 아티스트</h1>
//         <Artists />
//       </div>
//     );
//   }
// }

// // 3) props 렌더링하기
// class Artists extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <ul>
//         {list.map((item) => {
//           return (
//             <li>{item}</li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// class List extends React.Component {
//   render() {
//     const artists = [
//       '악동뮤지션',
//       '방탄소년단',
//       '걸스데이',
//       '나인뮤지스',
//       '트와이스',
//       '모모랜드'
//     ];
//     return (
//       <div>
//         <h1>한국의 아티스트</h1>
//         <Artists list={artists} />
//       </div>
//     );
//   }
// }

export default List;

```

## 컴포넌트 state & 이벤트 핸들러

### <Color />

```
import React from "react";

// 1) 하드코딩
class Color extends React.Component {
  render() {
    return (
      <div>
        <span>선택한 색깔: RED</span>
        <div>
          <button>RED</button>
          <button>GREEN</button>
          <button>BLUE</button>
        </div>
      </div>
    );
  }
}

// // 2) state 설정
// class Color extends React.Component {
//   constructor(props) {
//     super(props); // React.Component 의 constructor를 실행 => Color constructor에 props를 전달
//     this.state = { // state 설정
//       selectedColor: 'red'
//     }
//   }

//   render() {
//     return (
//       <div>
//         <span>선택한 색깔: RED</span>
//         <div>
//           <button>RED</button>
//           <button>GREEN</button>
//           <button>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }

// // 2) state 렌더링
// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedColor: "RED"
//     };
//   }

//   render() {
//     // this.state에 접근
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button>RED</button>
//           <button>GREEN</button>
//           <button>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }

// // 3) 이벤트 핸들링
// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedColor: "RED"
//     };
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = e => {
//     e.preventDefault(); // 이벤트의 기본 액션을 취소
//     alert("버튼이 눌렸다!");
//   };

//   render() {
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button onClick={this.handleClick}>RED</button>
//           <button onClick={this.handleClick}>GREEN</button>
//           <button onClick={this.handleClick}>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }

// // 4) 이벤트 핸들링 - 값 전달하기
// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedColor: "RED"
//     };
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = (e, value) => {
//     e.preventDefault(); // 이벤트의 기본 액션을 취소
//     alert(value + "버튼이 눌렸다!");
//   };

//   render() {
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button onClick={e => this.handleClick(e, "RED")}>RED</button>
//           <button onClick={e => this.handleClick(e, "GREEN")}>GREEN</button>
//           <button onClick={e => this.handleClick(e, "BLUE")}>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }

// // 5) state 변경하기
// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedColor: "RED"
//     };
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = (e, value) => {
//     e.preventDefault();
//     // this.setState 메소드 호출
//     this.setState({
//       selectedColor: value
//     });
//   };

//   render() {
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button onClick={e => this.handleClick(e, "RED")}>RED</button>
//           <button onClick={e => this.handleClick(e, "GREEN")}>GREEN</button>
//           <button onClick={e => this.handleClick(e, "BLUE")}>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }

export default Color;

```

## 복합 컴포넌트

### <Search />

```
import React from "react";

// 1) 하드 코딩
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

class Search extends React.Component {
  render() {
    return (
      <div>
        <div>검색어: ?? </div>
        <SearchBar />
      </div>
    );
  }
}

// // 2) 상위 컴포넌트가 state를 관리
// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       keyword: ""
//     };
//   }

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar />
//       </div>
//     );
//   }
// }

// // 3) 상위 컴포넌트가 이벤트 핸들러 생성 및 props로 전달
// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       keyword: ""
//     };
//   }

//   // input의 입력 이벤트를 핸들링할 메소드
//   handleChange = e => {
//     e.preventDefault();
//     console.log("호출!");
//   };

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

// // 4) 하위 컴포넌트 이벤트 생성 시 상위컴포넌트의 핸들러 호출 및 setState
// class SearchBar extends React.Component {
//   render() {
//     // input의 onChange 이벤트
//     return <input onChange={this.props.onChange} />;
//   }
// }

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       keyword: ""
//     };
//   }

//   handleChange = e => {
//     e.preventDefault();
//     const value = e.target.value;
//     this.setState({
//       keyword: value
//     });
//   };

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

// // 5) state 값 바인딩
// class SearchBar extends React.Component {
//   render() {
//     const { keyword } = this.props;
//     return <input value={keyword} onChange={this.props.onChange} />;
//   }
// }

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       keyword: ""
//     };
//   }

//   handleChange = e => {
//     e.preventDefault();
//     const value = e.target.value;
//     this.setState({
//       keyword: value
//     });
//   };

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar keyworkd={keyword} onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

export default Search;

```

### Tags

```
import React from "react";

// 1) 하드코딩
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>태그</h1>
        <div>이태원카페</div>
        <div>신사동맛집</div>
        <div>가을코디</div>
      </div>
    );
  }
}

class Adder extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button>추가</button>
      </div>
    );
  }
}

class Tags extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Adder />
      </div>
    );
  }
}

// // 2) tags state 생성 및 렌더링
// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <h1>태그</h1>
//         {list.map(item => {
//           return <div>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }

// class Adder extends React.Component {
//   render() {
//     return (
//       <div>
//         <input />
//         <button>추가</button>
//       </div>
//     );
//   }
// }

// class Tags extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tags: ["이태원카페", "신사동맛집", "가을코디"]
//     };
//   }

//   render() {
//     const { tags } = this.state;
//     return (
//       <div>
//         <List list={tags} />
//         <Adder />
//       </div>
//     );
//   }
// }

// // 3) Adder state 관리 및 이벤트 핸들링
// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <h1>태그</h1>
//         {list.map(item => {
//           return <div>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }

// class Adder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({
//       value: e.target.value
//     });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div>
//         <input value={value} onChange={this.handleChange} />
//         <button>추가</button>
//       </div>
//     );
//   }
// }

// class Tags extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tags: ["이태원카페", "신사동맛집", "가을코디"]
//     };
//   }

//   render() {
//     const { tags } = this.state;
//     return (
//       <div>
//         <List list={tags} />
//         <Adder />
//       </div>
//     );
//   }
// }

// // 4) 태그 추가 이벤트 핸들링
// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <h1>태그</h1>
//         {list.map(item => {
//           return <div>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }

// class Adder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({
//       value: e.target.value
//     });
//   };

//   handleClick = () => {
//     const { value } = this.state;
//     this.props.onClick(value);
//     this.setState({
//       value: ""
//     });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div>
//         <input value={value} onChange={this.handleChange} />
//         <button onClick={this.handleClick}>추가</button>
//       </div>
//     );
//   }
// }

// class Tags extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tags: ["이태원카페", "신사동맛집", "가을코디"]
//     };
//   }

//   handleClick = value => {
//     if (value !== "") {
//       this.setState({
//         tags: [...this.state.tags, value]
//       });
//     }
//   };

//   render() {
//     const { tags } = this.state;
//     return (
//       <div>
//         <List list={tags} />
//         <Adder onClick={this.handleClick} />
//       </div>
//     );
//   }
// }

export default Tags;

```

## To-do 앱 만들기

### 디렉토리 구조

```
- public
- src
  - components
    - App
    - Todo
    - TodoList
    - TodoInput
  - index.js
  - styles.css
- package.json
```

### <Todo />

```
import React from "react";

import TodoList from "../TodoList";
import TodoInput from "../TodoInput";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleDelete = value => {
    const newTodos = this.state.todos.filter(item => item !== value);
    this.setState({
      todos: newTodos
    });
  };

  handleAdd = value => {
    this.setState({
      todos: [...this.state.todos, value]
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList list={todos} onDelete={this.handleDelete} />
        <TodoInput onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default Todo;

```

### <TodoList />

```
import React from "react";

class TodoList extends React.Component {
  handleDelete = value => {
    this.props.onDelete(value);
  };
  render() {
    const { list } = this.props;
    return list.map((item, index) => {
      return (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => this.handleDelete(item)}>삭제</button>
        </div>
      );
    });
  }
}

export default TodoList;

```

### <TodoInput />

```
import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAdd = () => {
    const { value } = this.state;
    this.props.onAdd(value);
    this.setState({
      value: ""
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>추가</button>
      </div>
    );
  }
}

export default TodoInput;

```