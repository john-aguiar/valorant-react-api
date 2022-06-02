import styled from "styled-components"
import  breezeBg  from  "../../images/Valorant-Breeze.png"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${breezeBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`

export const MidAgentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AgentProfile = styled.img`
    width: 500px;
    height: 500px;
    padding-bottom: 3em;
`
export const LockInButton = styled.button`

`

export const AgentSelectArea = styled.div`
    max-width: 580px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    padding: 16px;

`

export const AgentIcon = styled.img`
    background-color: rgba(100, 100, 100, 0.1);
    width: 50px;
    height: 50px;
    border: 2px solid #ccc;
`

export const CompTeam = styled.div`
    position: absolute;
    left: 0;
    width: 200px;
    height: 400px;
    background-color: aliceblue;
`

export const SelectedAgentInfos = styled.div`
    position: absolute;
    right: 0;
    max-width: 27.5%;
    background-color: violet;
`
export const Skills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(100, 100, 100, 0.1);
`

export const SkillsBox = styled.div`
    display: flex;
    flex-direction: column;
    .btn-icon{
        max-width: 50px;
        min-width: 30px;
        height: 30px;
        text-align: center;
        margin-right: 5px;
        background-color: rgba(255, 255, 255, 0.4);
        padding: 5px;
        border: 2px solid black;
        img {
            width: 100%;
            height: 100%;
        }
    .btn-key{
        max-width: 50px;
        min-width: 30px;
        height: 30px;
        text-align: center;
        margin-right: 5px;
        background-color: rgba(255, 255, 255, 0.4);
        padding: 5px;
        border: 2px solid black;
        img {
            width: 100%;
            height: 100%;
        }
        }
    }
`

export const SkillDescription = styled.div`
`