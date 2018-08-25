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
