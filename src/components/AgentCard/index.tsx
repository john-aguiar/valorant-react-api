import { Container, Header, Card, CardImg, CardInfos, AgentPicture, AgentName, AgentDescription} from './AgentCard';
import { useState, useEffect } from 'react';


const API_KEY = `https://valorant-api.com/v1/agents`;

export const AgentCard = () => {

    const [agents, setAgents] = useState<any>([]);

    async function getAgents(){
        const response = await fetch(API_KEY);
        const json = await response.json();
        const data = json.data;
        setAgents(data);
        console.log(data);
        return agents;
 }

    useEffect(()=>{
    getAgents();
    }, []);


    function formatDescription(desc: string){
        if(desc.length >= 140){
            return desc.substring(0, 140) + '...';
        }
    }

    function handleAgentModal(id: any){
        let selectedAgent = agents.filter((agent: { uuid: any; }) => agent.uuid === id)

        console.log(selectedAgent);
    }

    return(
        <Container>
            <Header>Valorant Agents</Header>
            {agents.map((agent: any) => (
                <Card onClick={()=>handleAgentModal(agent.uuid)}  key={agent.uuid}>
                    <CardImg> 
                        <AgentPicture src={agent.displayIcon} alt {...agent.displayName} />
                    </CardImg>
                    <CardInfos>
                        <AgentName> {agent.displayName} </AgentName>    
                        <AgentDescription> {formatDescription(agent.description)} </AgentDescription>
                    </CardInfos>
                </Card>
                
            ))}
        </Container>
    )
}