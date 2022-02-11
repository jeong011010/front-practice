import { useState } from 'react';
import './Finish.css';

export default function 끝 (){

    let [mbti,setmbti] = useState(window.history.state);
    let 속성 = ['E','I','S','N','T','F','J','P'];
    let [ans, setans] = useState("");
    function mbti검사 (){
        let arr = ([]);
        for(let j=0;j<4;j++){
            let num=0;
            for(let i=0;i<3;i++){
                num+=mbti[(j*2)+i];
            }
            if(num>1){
                arr[j]=ans+속성[(j*2)+1];
            }
            else{
                arr[j]=ans+속성[(j*2)];
            }
        }
        setans(arr);
    }

    return(
        <>

            <button onClick={mbti검사}>결과</button>
            <p>{ans}</p>
        </>

    );
}