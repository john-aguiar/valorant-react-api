import { useEffect, useState } from "react";
import { AgentCard } from "./components/AgentCard";
import { ModalAgent } from "./components/ModalAgent";




function App() {
  


  return (
    <>    
      <AgentCard />
      <ModalAgent display="none"/>

    </>
  )
}

export default App
