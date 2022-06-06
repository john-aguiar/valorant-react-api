import { Container, AgentProfile, AgentSelectArea,MidAgentSection,LockInButton, AgentIcon, CompTeam, SelectedAgentInfos,
        Skills, SkillDescription, SkillsBox, CompAgentSelected}  from './AgentSelect';

import { useState, useEffect, useReducer } from 'react';
import { API_KEY } from '../AgentCard';

import { agentInfosReducer, agentInitialState } from '../../reducers/agentInfosReducer';


type compSelectedType = {
    name: string,
    roleIcon: string,
    displayIcon: string
}

export const AgentSelect = () => {

    const [state, dispatch] = useReducer(agentInfosReducer, agentInitialState);

    const [agents, setAgents] = useState<any>([]);
    const [agentSelectedAbilityName, setAgentSelectedAbilityName] = useState<any>('');
    const [isLocked, setIsLocked] = useState<boolean>(false);    
    const [isCharSelected, setIsCharSelected] = useState(false)
    const [abilityClicked, setAbilityClicked] = useState(0)
    const [compSelected, setCompSelected] = useState<compSelectedType[]>([    ])
    const [indexAgent, setIndexAgent] = useState(0)

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
            if(!isLocked){
                if(item.uuid === id && item){     
                    setIndexAgent(agents.indexOf(item))
    
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
            } 
        })
    }

    function saveIndexSkill(index: any){
        setAbilityClicked(index);
    }

    function handleLockAgent(){
       setIsLocked(true)
    }

    return(
        <Container>
            <CompTeam> 
                <CompAgentSelected> 
                    <div className="box-agent-img">
                     {isCharSelected ? 
                     <> 
                        <div id='agent-icon-comp' > 
                            <img src={agents[indexAgent].displayIcon} alt="" />
                            <img id="role-icon-comp-absolute" src={state.roleIcon} alt="" /> 
                        </div>

                     </>
                        :
                        <> 
                        <div id="agent-icon-comp-unknown">?</div>
                        <img id="role-icon-comp-absolute" src={state.roleIcon} alt="" />
                     </>
                     }   
                    </div>
                    <h2 className='agent-name'>{state.name}</h2>
                </CompAgentSelected>

            </CompTeam>

            <MidAgentSection> 

                <AgentProfile isVisible={isCharSelected} src={state.img}/>

                <LockInButton isVisible={isCharSelected} disabled={isLocked} onClick={()=>handleLockAgent()}>
                    {isLocked ? 'LOCKED' : 'LOCK IN'}
                </LockInButton>


                <AgentSelectArea >
                    {agents.filter((playable: { isPlayableCharacter: any }) => playable.isPlayableCharacter)
                    .map((agent: any) => (
                        <AgentIcon locked={isLocked} onClick={()=>handleSelectedAgent(agent.uuid)} key={agent.uuid} src={agent.displayIcon} alt={agent.displayName}/> 
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
                    {ability.abilitySlot === "Info" &&
                        <p id='agent-description'>{state.description}</p>
                    }

                    <span id='skill-name'>{ability.abilityName.toUpperCase()}</span> 
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