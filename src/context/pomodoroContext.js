import { createContext,useState,useEffect } from "react";

const PomodoroContext = createContext()

export const PomodoroProvider = ({children})=>{

    const [quotes, setquotes] = useState([]);

    const fetchQuote = async ()=>{
        const response = await fetch("https://motivational-quote-api.herokuapp.com/quotes");
       var data = await response.json();
       console.log( data)
       setquotes(data)
      }

      useEffect(()=>{
        fetchQuote()
      },[])

      console.log( quotes);


      return <PomodoroContext.Provider value={{quotes}}>
            {children}
      </PomodoroContext.Provider>

}

export default PomodoroContext