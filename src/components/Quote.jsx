import {useContext} from "react";
import PomodoroContext from "../context/pomodoroContext";
const Quote = () => {
  const{quotes} =useContext(PomodoroContext);
  let i = Math.round(Math.random()*quotes.length)
    return (
        <div>
           {
            quotes.map((q,idx)=>{
             return idx==i ? <div className="flex flex-col">
               <div className="text-3xl">{q.quote}</div>
               <div className="text-2xl"> -{q.person}</div>
               </div>:null
            })
           }
        </div>
    );
}

export default Quote;
