import { Modal } from "./ModalAgent"
import { useState } from "react";
import { SkillDescription } from "../AgentSelect/AgentSelect";

type Props = {
    display: string,
}


export const ModalAgent = (props: Props) => {

    const [display, setDisplay] = useState('');

    

    return(
        <SkillDescription>
            
        </SkillDescription>
    )
}