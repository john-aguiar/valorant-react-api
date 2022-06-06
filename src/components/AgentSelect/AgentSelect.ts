import styled from "styled-components"
import  breezeBg  from  "../../images/Valorant-Breeze.png"
import bindBg from "../../images/bind-valorant.jpeg"


type Props ={
    isVisible?: boolean;
    locked?: boolean;
}

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

export const AgentProfile = styled.img<Props>`
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
    width: 500px;
    height: 500px;
    padding-bottom: 3em;
`


export const LockInButton = styled.button<Props>`
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
    :disabled {
        background-color: rgba(10,154,142, 0.85);
    }

    width: 180px;
    height: 50px;
    background-color: rgba(134,202,191, 0.85);
    padding: 10px;
    color: white;
    border: none;
    border-radius: 1px;
    font-size: 1.2em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const AgentSelectArea = styled.div`
    max-width: 580px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: 16px 0;

`

export const AgentIcon = styled.img<Props>`
    background: ${props => props.locked ? 'red' : 'rgba(100, 100, 100, 0.1)' };
    height: 50px;
    border: 2px solid #ccc;

`

export const CompTeam = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
`

export const CompAgentSelected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-left: 10px;
    width: 180px;
    .box-agent-img{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    #agent-icon-comp {
        position: relative;
        background-color:  rgba(100, 100, 100, 0.6);
        border: 2px solid rgba(255, 255, 255, 0.3);
       
        img {
            width: 60px;
            height: 60px;
        }

        #role-icon-comp-absolute {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
         }

    }

    #agent-icon-comp-unknown{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: rgba(100, 100, 100, 0.6);
        font-size: large;
        color: white;
    }



`



export const SelectedAgentInfos = styled.div`
    position: absolute;
    right: 0;
    width: 22%;

    height: 80%;
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
        margin-right: 5px;
    :hover {
        background-color: rgba( 255, 255, 255, 0.3 );
        transition: ease-in-out 0.05s;
        .btn-key{
        background-color: rgba(216,232,158, 0.75)
    }
    }
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    .btn-icon{
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        text-align: center;
        align-items: center;

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
        margin-bottom: 5px;
        background-color: rgba(191,191,191, 0.25);
        padding: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }




    
`

export const SkillDescription = styled.div`
    padding-top: 1em;

    p {
        margin-top: 0.2em;
    }

    #skill-name {
        font-weight: bold;
        margin-bottom: 0;
    }
    #agent-description {
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
        font-weight: bold;
        color: #d8e89e;
    }
`