import { Container, AgentProfile, AgentSelectArea,MidAgentSection,LockInButton, AgentIcon, CompTeam, SelectedAgentInfos,
        Skills, SkillsButtonsKey, SkillsButtonsIcon, SkillDescription, SkillsBox}  from './AgentSelect';
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
                              },
                              {
                                abilityName: item.abilities[0].displayName,
                                abilityIcon: item.abilities[0].displayIcon,
                                abilityDescription: item.abilities[0].description,
                              },
                              {
                                abilityName: item.abilities[1].displayName,
                                abilityIcon: item.abilities[1].displayIcon,
                                abilityDescription: item.abilities[1].description,
                              },
                              {
                                abilityName: item.abilities[2].displayName,
                                abilityIcon: item.abilities[2].displayIcon,
                                abilityDescription: item.abilities[2].description,
                              },
                              {
                                abilityName: item.abilities[3].displayName,
                                abilityIcon: item.abilities[3].displayIcon,
                                abilityDescription: item.abilities[3].description,
                              },
                     ]
                    }
                })
             
            }
        })
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
            <h1>{state.name} </h1>
            
            <Skills> 
                {state.abilities.map((ability: any) => (
                    <SkillsBox key={ability.abilityName}>
                         <div className='btn-key'>Infos</div>  
                         <div className='btn-icon'> <img src={state.roleIcon} /> </div>
                    </SkillsBox>
                ))}

              
                <SkillsButtonsIcon>
                    
                    <div className='btn-icon'> <img src={state.roleIcon} alt="" /></div>
                    {state.abilities.map((ability)=> (
                        <div className='btn-icon' key={ability.abilityName}><img src={ability.abilityIcon} alt=""/></div>
                    ))}
                   
                </SkillsButtonsIcon>
                <SkillsBox>
                    
                    <div className="skill-box">
                        {state.abilities.map((ability)=> (
                            <div key={ability.abilityName}>{ability.abilityName}</div>
                        ))}

                    </div>
                </SkillsBox>
            </Skills>
            <SkillDescription> 
                <p>{state.description}</p>
            </SkillDescription>
            
        </SelectedAgentInfos>
        
            
        </Container>
    )
}

export default AgentSelect;