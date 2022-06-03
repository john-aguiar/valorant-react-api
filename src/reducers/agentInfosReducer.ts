import {  useReducer } from "react";

type abilitiesTypeSlot = {
        abilityName: string, 
        abilityDescription: string, 
        abilityIcon: string ,
        abilitySlot: string
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
            abilityIcon: 'olho',
            abilitySlot: "slot 1"
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
                        abilityName: action.payload.abilities[0].abilityName,
                        abilityDescription: action.payload.abilities[0].abilityDescription,
                        abilityIcon: action.payload.abilities[0].abilityIcon,
                        abilitySlot: action.payload.abilities[0].abilitySlot
                    },
                    {
                        abilityName: action.payload.abilities[1].abilityName,
                        abilityDescription: action.payload.abilities[1].abilityDescription,
                        abilityIcon: action.payload.abilities[1].abilityIcon,
                        abilitySlot: action.payload.abilities[1].abilitySlot
                    },
                    {
                        abilityName: action.payload.abilities[2].abilityName,
                        abilityDescription: action.payload.abilities[2].abilityDescription,
                        abilityIcon: action.payload.abilities[2].abilityIcon,
                        abilitySlot: action.payload.abilities[2].abilitySlot
                    },
                    {
                        abilityName: action.payload.abilities[3].abilityName,
                        abilityDescription: action.payload.abilities[3].abilityDescription,
                        abilityIcon: action.payload.abilities[3].abilityIcon,
                        abilitySlot: action.payload.abilities[3].abilitySlot
                    },
                    {
                        abilityName: action.payload.abilities[4].abilityName,
                        abilityDescription: action.payload.abilities[4].abilityDescription,
                        abilityIcon: action.payload.abilities[4].abilityIcon,
                        abilitySlot: action.payload.abilities[4].abilitySlot
                    },
                ]
           }
           
        default:
        return state;
    }
}