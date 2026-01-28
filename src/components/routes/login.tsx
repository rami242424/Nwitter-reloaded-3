import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../auth-components";
import GithubBtn from "../github-btn";


export default function Login(){
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { target : {name, value} } = e;
        if (name === "password"){
            setPassword(value);
        } else if(name === "email"){
            setEmail(value);
        }
    }
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || email === "" || password === "") return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch(e) {
            if(e instanceof FirebaseError){
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <Wrapper>
            <Title>log into 𝕏</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required/>
                <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required/>
                <Input type="submit" value={ isLoading ? "Loading..." : "Login"}/>
            </Form>
            <GithubBtn />
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account?
                <Link to="/create-account"> Create One &rarr;</Link>
            </Switcher>
            <Switcher>
                Forgot your password?
                <Link to="/reset-password"> Reset password &rarr;</Link>
            </Switcher>
        </Wrapper>
    );
}