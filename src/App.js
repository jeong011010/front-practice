import logo from './logo.svg';
import './App.css';

function App() {
// 중괄호로 데이터 바인딩이 가능.
let posts = '강남 고기 맛짐';
function 함수(){
  return 100
}

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <img src={ logo } />
      <h4> { posts } </h4>
    </div>
  );
}

export default App;
