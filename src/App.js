import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // destructuring 문법
  // [10, 100] 각각 변수에 담고 싶으면
  // var [a,b] = [10,100];

  let [제목, 제목변경] = useState(['남자 코트 추천','강남 고기 맛집','함평 국밥 맛집']);
  // state를 사용하는 이유는 웹이 app처럼 동작하게 만들고 싶어서.
  // 새로고침 없이 렌더링이 됨. (해당 위치에 다른 글이 와야할 때. ex) 우선순위 정렬)
  // 자주 바뀌는 중요한 데이터는 state로.



  // 중괄호로 데이터 바인딩이 가능.
  let posts = '강남 고기 맛집';

  // - 표시는 빼기이므로 camelCase 작명관습 사용
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        
      </div>
      <div className="list">
        <h3>{ 제목[0] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
