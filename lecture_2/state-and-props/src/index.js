import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import Color from "./components/Color";
import Search from "./components/Search";
import Tags from "./components/Tags";

function App() {
  return (
    <div>
      <List /> {/* props */}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Color /> {/* state */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Search />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Tags />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
