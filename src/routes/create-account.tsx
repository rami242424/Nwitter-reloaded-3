import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";



export default function CreateAccount(){
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { target : {name, value} } = e;
        if(name === "name") {
            setName(value);
        } else if (name === "password"){
            setPassword(value);
        } else if(name === "email"){
            setEmail(value);
        }
    }
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        try {
            setLoading(true);
            // create an account
            if(isLoading || name === "" || email === "" || password === "") return;
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user)
            // set the name of the user profile
            await updateProfile(credentials.user, {
                displayName: name,
            })
            // redirect to the homepage
            navigate("/");
        } catch(e) {
            if(e instanceof FirebaseError){
                //console.log("이건에러코드", e.code, "이건에러메세지", e.message)
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
        //console.log(name, email, password);
    }
    
    return (
        <Wrapper>
            <Title>Join ✖️</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required/>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required/>
                <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required/>
                <Input type="submit" value={ isLoading ? "Loading..." : "Create Account"}/>
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
               Already have an account yet? <Link to="/login">Login &rarr;</Link>
            </Switcher>
        </Wrapper>
    );
}