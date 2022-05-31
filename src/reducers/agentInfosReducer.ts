import {  useReducer } from "react";

type reducerState = {
    name: string,
    role: string,
    roleIcon: string,
    description: string,
    img: string,
    abilities: string[]
}

type reducerActionType = {
    type: string,
    payload: {
        [key: string]: any;
    }
}

export const agentInitialState: reducerState = {
    name: "Reyna",
    role: "Duelist",
    roleIcon: "ksajak",
    description: "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
    img: '',
    abilities: [
        "skill_1", 
        "skill_2", 
        "skill_3", 
        "skill_4"
    ]

}

export const agentInfosReducer = (state: reducerState, action: reducerActionType) => {
    switch (action.type) {
        case "SET_AGENT_INFOS":
           return  {
               ...state, 
               name: action.payload.name,
               role: action.payload.role.role,
               roleIcon: action.payload.role.roleIcon,
               description: action.payload.description,
               img: action.payload.img,
               abilities: [ 
                    action.payload.abilities.skill_1, 
                    action.payload.abilities.displayName, 
                    action.payload.abilities.displayName, 
                    action.payload.abilities.displayName, 
                ]
           }
           
        default:
        return state;
    }
}