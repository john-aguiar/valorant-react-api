import { Container, AgentProfile, AgentSelectArea,MidAgentSection,LockInButton, AgentIcon, CompTeam, SelectedAgentInfos,
        Skills, SkillsButtonsKey, SkillsButtonsIcon, SkillDescription}  from './AgentSelect';
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
        agents.filter((item: any)=> {
            if(item.uuid === id){

                dispatch({
                    type: 'SET_AGENT_INFOS',
                    payload: {
                        name: item.displayName,
                        role: item.role.displayName,
                        roleIcon: item.role.displayIcon,
                        description: item.description,
                        img: item.fullPortrait,
                        abilities: [
                                item.abilities[0].displayName,
                                item.abilities[1].displayName,
                                item.abilities[2].displayName,
                                item.abilities[3].displayName,
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
                    {agents.map((agent: any) => (
                        <AgentIcon onClick={()=>handleSelectedAgent(agent.uuid)} key={agent.uuid} src={agent.displayIcon} alt={agent.displayName}/> 
                    ))}
                </AgentSelectArea>
            </MidAgentSection>



            <SelectedAgentInfos> 
            <h3>{state.role}</h3>
            <h1>{state.name} </h1>
            
            <Skills> 
                <SkillsButtonsKey> 
                    <div className='btn-key'>Infos</div>
                    <div className='btn-key'>C</div>
                    <div className='btn-key' >Q</div>
                    <div className='btn-key'>E</div>
                    <div className='btn-key'>X</div>
                </SkillsButtonsKey>
                <SkillsButtonsIcon>
                    <div className='btn-icon'>{state.roleIcon}</div>
                    <div className='btn-icon'>{state.abilities[1]}</div>
                    <div className='btn-icon'>{state.abilities[2]}</div>
                    <div className='btn-icon'>{state.abilities[3]}</div>
                    <div className='btn-icon'>{state.abilities[4]}</div>
                </SkillsButtonsIcon>
            </Skills>
            <SkillDescription> 
                <p>{state.description}</p>
            </SkillDescription>
            
        </SelectedAgentInfos>
        
            
        </Container>
    )
}

export default AgentSelect;