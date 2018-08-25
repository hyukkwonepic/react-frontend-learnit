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
