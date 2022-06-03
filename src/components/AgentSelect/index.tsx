import { Container, AgentProfile, AgentSelectArea,MidAgentSection,LockInButton, AgentIcon, CompTeam, SelectedAgentInfos,
        Skills, SkillDescription, SkillsBox}  from './AgentSelect';
import { useState, useEffect, useReducer } from 'react';
import { API_KEY } from '../AgentCard';

import { agentInfosReducer, agentInitialState } from '../../reducers/agentInfosReducer';

export const AgentSelect = () => {

    const [state, dispatch] = useReducer(agentInfosReducer, agentInitialState);

    const [agents, setAgents] = useState<any>([]);

    async function getAgents(){
        const response = await fetch(API_KEY);
        const json = await response.json();
        const data = json.data;
        setAgents(data);
        return agents;
 }

    useEffect(()=>{
        getAgents();

    }, []);


    function handleSelectedAgent(id: string){
        agents.filter((playable: { isPlayableCharacter: any }) => playable.isPlayableCharacter)
        .filter((item: any)=> {
            if(item.uuid === id && item){      

                dispatch({
                    type: 'SET_AGENT_INFOS',
                    payload: {
                        name: item.displayName,
                        role: item.role.displayName,
                        roleIcon: item.role.displayIcon,
                        description: item.description,
                        img: item.fullPortrait,
                        abilities: [

                             {
                                abilityName: item.role.displayName,
                                abilityIcon: item.role.displayIcon,
                                abilityDescription: item.role.description,
                                abilitySlot: "Info"
                              },
                              {
                                abilityName: item.abilities[0].displayName,
                                abilityIcon: item.abilities[0].displayIcon,
                                abilityDescription: item.abilities[0].description,
                                abilitySlot: "C"
                              },
                              {
                                abilityName: item.abilities[1].displayName,
                                abilityIcon: item.abilities[1].displayIcon,
                                abilityDescription: item.abilities[1].description,
                                abilitySlot: "Q"
                              },
                              {
                                abilityName: item.abilities[2].displayName,
                                abilityIcon: item.abilities[2].displayIcon,
                                abilityDescription: item.abilities[2].description,
                                abilitySlot: "E"
                              },
                              {
                                abilityName: item.abilities[3].displayName,
                                abilityIcon: item.abilities[3].displayIcon,
                                abilityDescription: item.abilities[3].description,
                                abilitySlot: "X"
                              },

                     ]
                    }
                })
                
            }
        })
    }

    function handleClickSkills(id: string){
        /// Trabalhar com  o ID
    }

    return(
        <Container>
            <CompTeam />

            <MidAgentSection> 

                <AgentProfile src={state.img}/>

                <LockInButton>Lock</LockInButton>

                <AgentSelectArea>
                    {agents.filter((playable: { isPlayableCharacter: any }) => playable.isPlayableCharacter)
                    .map((agent: any) => (
                        <AgentIcon onClick={()=>handleSelectedAgent(agent.uuid)} key={agent.uuid} src={agent.displayIcon} alt={agent.displayName}/> 
                    ))}
                </AgentSelectArea>
                
            </MidAgentSection>

            <SelectedAgentInfos> 
            <h3>{state.role}</h3>
            <h1>{state.name.toUpperCase()}</h1>
            
            <Skills> 
                {state.abilities.map((ability: any, index) => (
                    <SkillsBox key={index}>
                        <div className="btn-key">{ability.abilitySlot}</div>
                        <div onClick={()=>handleClickSkills("")} className="btn-icon">
                            <img src={ability.abilityIcon} alt={ability.abilityName}/>
                        </div> 
                    </SkillsBox>
                ))}
            </Skills>

            <SkillDescription> 
                {state.abilities.filter((ability: any) => ability.abilitySlot === ability.abilitySlot).map((ability: any) => (
                    <p key={ability.abilitySlot}>{ability.abilityDescription}</p>
                ))}
                
                <h3>{state.role}</h3>
                <p>{state.description}</p>
            </SkillDescription>
            
        </SelectedAgentInfos>
        
            
        </Container>
    )
}

export default AgentSelect;