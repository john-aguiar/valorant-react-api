import {  useReducer } from "react";

type abilitiesTypeSlot = {
        abilityName: string, 
        abilityDescription: string, 
        abilityIcon: string  
}

type reducerState = {
    name: string,
    role: string,
    roleIcon: string,
    description: string,
    img: string,
    abilities: abilitiesTypeSlot[]
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
        {
            abilityName: 'Olho',
            abilityDescription: 'Olho',
            abilityIcon: 'olho'
        }
    ]

}

export const agentInfosReducer = (state: reducerState, action: reducerActionType) => {
    switch (action.type) {
        case "SET_AGENT_INFOS":
           return  {
               ...state, 
               name: action.payload.name,
               role: action.payload.role,
               roleIcon: action.payload.roleIcon,
               description: action.payload.description,
               img: action.payload.img,
               abilities: [ 
                    {
                        abilityName: action.payload.role.displayName,
                        abilityDescription: action.payload.role.description,
                        abilityIcon: action.payload.role.displayIcon,
                        abilityInfo: action.payload.abilityInfo
                    },
                   {
                    abilityName: action.payload.role.displayName,
                    abilityDescription: action.payload.role.description,
                    abilityIcon: action.payload.role.displayIcon
                   },
                   {
                    abilityName: action.payload.role.displayName,
                    abilityDescription: action.payload.role.description,
                    abilityIcon: action.payload.role.displayIcon
                    },
                    {
                        abilityName: action.payload.role.displayName,
                        abilityDescription: action.payload.role.description,
                        abilityIcon: action.payload.role.displayIcon
                    },
                    {
                        abilityName: action.payload.role.displayName,
                        abilityDescription: action.payload.role.description,
                        abilityIcon: action.payload.role.displayIcon
                    },

                ]
           }
           
        default:
        return state;
    }
}