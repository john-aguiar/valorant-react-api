import { Container, AgentProfile, AgentSelectArea,MidAgentSection,LockInButton, AgentIcon, CompTeam, SelectedAgentInfos,
        Skills, SkillDescription, SkillsBox}  from './AgentSelect';
import { useState, useEffect, useReducer } from 'react';
import { API_KEY } from '../AgentCard';

import { agentInfosReducer, agentInitialState } from '../../reducers/agentInfosReducer';

export const AgentSelect = () => {

    const [state, dispatch] = useReducer(agentInfosReducer, agentInitialState);

    const [agents, setAgents] = useState<any>([]);
    const [agentSelectedAbilityName, setAgentSelectedAbilityName] = useState<any>('');
    const [isLocked, setIsLocked] = useState<boolean>(false);
    const [isCharSelected, setIsCharSelected] = useState(false)
    const [abilityClicked, setAbilityClicked] = useState(0)

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
                setIsCharSelected(true)

            }
        })
    }

    function saveIndexSkill(index: any){
        setAbilityClicked(index);
    }
    console.log(abilityClicked)

    function showAbilitiesInfos(){
        
    }

    return(
        <Container>

            <CompTeam />

            <MidAgentSection> 

                
            {isCharSelected &&
            <> 
                <AgentProfile src={state.img}/>

                <LockInButton disabled={isLocked} onClick={()=> {setIsLocked(true)}}>
                    {isLocked ? 'LOCKED' : 'LOCK IN'}
                </LockInButton>
            </>
            }


                <AgentSelectArea>
                    {agents.filter((playable: { isPlayableCharacter: any }) => playable.isPlayableCharacter)
                    .map((agent: any) => (
                        <AgentIcon onClick={()=>handleSelectedAgent(agent.uuid)} key={agent.uuid} src={agent.displayIcon} alt={agent.displayName}/> 
                    ))}
                </AgentSelectArea>
                
            </MidAgentSection>


            {isCharSelected &&
            <>
            <SelectedAgentInfos> 
                <h3>{state.role}</h3>
                <h1>{state.name.toUpperCase()}</h1>
                
                <Skills> 
                <h2>{agentSelectedAbilityName}</h2>

                    {state.abilities.map((ability: any, index) => (
                        <SkillsBox  onClick={()=>saveIndexSkill(index)} key={index}>
                            <div className="btn-key">{ability.abilitySlot}</div>
                            <div className="btn-icon">
                                <img src={ability.abilityIcon} alt={ability.abilityName}/>
                            </div> 
                        </SkillsBox>
                    ))}
                </Skills>


                
                {state.abilities.map((ability: any, index) => (
                <SkillDescription key={index}> 
                    <span>{ability.abilityName}</span> 
                        <p>{ability.abilityDescription}</p>
                    </SkillDescription>
                )).filter((item: any, index) => index === abilityClicked)
                }
                
            
            </SelectedAgentInfos>
            </>
            }
           
        
            
        </Container>
    )
}

export default AgentSelect;