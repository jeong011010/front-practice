import './Main.css';
import list from "../../db/data.json";
import { useState } from 'react';

export default function 메인(props){

    let [질문, 질문변경] = useState(list.질문[0].내용);
    let [답변1, 답변1변경] = useState(list.답변1[0].내용);
    let [답변2, 답변2변경] = useState(list.답변2[0].내용);
    const [mbti, setmbti] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

    const [n,setn] = useState(1);
    
    const 다음질문 = i => {
        
        let arr = [...mbti];
        console.log(i);
        arr[n-1]=i;
        setmbti(arr);
        if(n>11){
            window.history.pushState(mbti,'','/finish');
            window.location.replace("/finish");
        }
        else{
            질문변경(list.질문[n].내용);
            답변1변경(list.답변1[n].내용);
            답변2변경(list.답변2[n].내용);
        }
        setn(n+1);
    }

    return(
        <>
            <div className='항목개수'>{n}/12</div>
            <div className='질문'>{질문}</div>
            <div className='답변' onClick={()=>{다음질문(0); list.질문[n].mbti=0;}}>
                {답변1}
            </div>
            <div className='답변' onClick={()=>{다음질문(1); list.질문[n].mbti=1;}}>
                {답변2}
            </div>
        </>
    );
}