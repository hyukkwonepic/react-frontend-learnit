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
