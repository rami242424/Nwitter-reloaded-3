import styled from "styled-components"
import { auth } from "../firebase";
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { error } from "console";
import { useNavigate } from "react-router-dom";

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
    cursor: pointer;
`;
const Logo = styled.img`
    height : 25px;
`;
export default function GithubBtn(){
    const navigate = useNavigate();
    const onClick = async() => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/")
        } catch(error) {
            console.error(error);
        }
    }
    return <Button onClick={onClick}>
        <Logo src="/public/github-logo.svg"/>
        Continue with Github
    </Button>
}