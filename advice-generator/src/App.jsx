import React, { useEffect } from "react"
import AdviceApi from "./components/AdviceApi"
import CardContent from "./components/CardContent"
import PatternDivider from "./components/PatternDivider"
import { useState } from "react" 
import AdviceShow from "./components/AdviceShow"
function App() {

  const [advice, setAdvice] = useState([])
  
  const handleSubmit = async () => {

    const result = await AdviceApi();
    setAdvice(result)
    console.log(result)
  }
 useEffect(() => {
  handleSubmit()
 },[]);

  return (
    <main className=' flex items-center h-screen  bg-Dark-Grayish-Blue '>
      <article   className="bg-Grayish-Blue mx-auto px-10 py-10  rounded-[1rem] flex flex-col gap-10"  > 
       
        <AdviceShow advice={advice} />
        <PatternDivider />
        <CardContent onSubmit={handleSubmit}/>
      </article>
    </main>
   
  )
}

export default App
