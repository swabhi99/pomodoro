import React ,{useState,useEffect} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Pomodoro = () => {
  
   
    const [isBreak, setisBreak] = useState(false);
    const [sec, setsec] = useState(60);
    const [min, setmin] = useState(24);
    const [pause, setpause] = useState(false);
    const [r, setr] = useState(false);

   useEffect(()=>{
        let inteval = setInterval(()=>{
            clearInterval(inteval);
            if(pause) return
            if(r===true) {
                setmin(24)
                setsec(60)
                setr(false)
            }
            if(sec===0 && min!==0){
                setmin(m=>m-1);
                setsec(59)
                return
            }
            if(sec===0 && min===0) {
               if(!isBreak) {
                setisBreak(true)
                setmin(4)
                setsec(59)
                setpause(true)
               }else{
                setisBreak(false)
                setmin(25)
                setsec(60)
               }
            }
            setsec(s=>s-1)
        },1000)
   },[min,sec,pause,isBreak,r]) 



    return (

        <div className='flex flex-col justify-center' style={{height:'70vh'}}>

        <div style={{textAlign:'center'}} className='flex flex-col'>

            <div >
            {isBreak?'break Time':'Work time'}
            <p className='text-8xl'>
              {min<10? '0':''}{ min}:{sec<10? '0':''}{ sec }
            </p>
            </div>

            <div>
        <button onClick={()=>setpause(!pause)}>
            {!pause ? <PauseIcon style={{fontSize:50}}/>:<PlayArrowIcon style={{fontSize:50}}/>}
        </button>
        <button onClick={()=>{
          setr(true)
        }}><RestartAltIcon style={{fontSize:40}}></RestartAltIcon></button>
        </div>

        </div>

        </div>
      
    );
}

export default Pomodoro;
