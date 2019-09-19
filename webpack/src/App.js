import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import logo from './logo.png'
const App = () => {
    // 注意如果是（），则其中只能包含一个子元素
  return (
    <div>
      <p>React here!11</p>
      <img src={logo}/>
    </div>
  )
}

// render是将jsx语法转变成虚拟DOM
ReactDOM.render(<App />, document.getElementById("app"));
export default App;