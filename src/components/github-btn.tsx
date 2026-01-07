import styled from "styled-components"

const Button = styled.span`
    margin-top: 40px;
    background-color: white;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    color: black;
    width: 100%;
`;
const Logo = styled.img`
    height : 25px;
`;
export default function GithubBtn(){
    return <Button>
        <Logo src="/public/github-logo.svg"/>
        Continue with Github
    </Button>
}