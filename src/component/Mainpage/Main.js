import './Main.css';
import { useState } from 'react';

export default function 메인(){

    var 질문배열 = ['질문1','질문2','질문3','질문4','질문5','질문6','질문7','질문8'];
    var 답1 = ['답변1-1','답변1-2','답변1-3','답변1-4','답변1-5','답변1-6','답변1-7','답변1-8'];
    var 답2 = ['답변2-1','답변2-2','답변2-3','답변2-4','답변2-5','답변2-6','답변2-7','답변2-8'];
    let [질문, 질문변경] = useState(질문배열[0]);
    let [답변1, 답변1변경] = useState(답1[0]);
    let [답변2, 답변2변경] = useState(답2[0]);
    
    const [n,setn] = useState(1);

    function 다음질문(){
        setn(n+1);
        if(n>7) 
            window.location.href='/finish';
        else{
            console.log(n);
            질문변경(질문배열[n]);
            답변1변경(답1[n]);
            답변2변경(답2[n]);
        }
    }

    return(
        <>
            <div className='질문'>{질문}</div>
            <div className='답변'>
                {답변1}
            </div>
            <div className='답변'>
                {답변2}
            </div>
            <button onClick={다음질문}>버튼</button>

        </>
    );
}