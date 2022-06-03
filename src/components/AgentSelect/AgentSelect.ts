import styled from "styled-components"
import  breezeBg  from  "../../images/Valorant-Breeze.png"
import bindBg from "../../images/bind-valorant.jpeg"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bindBg});
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
    height: 100%;
    color: #fff;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 16px;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 3.5em;
        color: #d8e89e;
        font-weight: bold;
        margin-top: 0;
    }

    h3 {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5em;
        font-weight: 400;
    }
`
export const Skills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SkillsBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    .btn-icon{
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin-right: 5px;
        padding: 5px;
        img {
            width: 50px;
            height: 50px;
        }
    };

    .btn-key{
        display: flex;
        width: 50px;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin-right: 5px;
        margin-bottom: 5px;
        background-color:#bfbfbf;
        padding: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .btn-key:hover {
        background-color: #d8e89e;
    }
`

export const SkillDescription = styled.div`
`