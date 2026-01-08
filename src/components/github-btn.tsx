import styled from "styled-components"
import { auth } from "../firebase";
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Button = styled.span`
    background-color: white;
    font-weight: 600;
    padding: 5px 0px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    color: black;
    width: 100%;
    cursor: pointer;
    background-color: #bdb4b4;
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
            navigate("/");
            // reset password
            //sendPasswordResetEmail(auth, email)
        } catch(error) {
            console.error(error);
        }
    }
    return <Button onClick={onClick}>
        <Logo src="/public/github-logo.svg"/>
        Continue with Github
    </Button>
}