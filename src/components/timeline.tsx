import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { database } from "../firebase";

export interface ITweet {
    id: string;
    photo?: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
}

const Wrapper = styled.div`

`;
export default function Timeline(){
    const [tweets, setTweet] = useState<ITweet[]>([]);
    const fetchTweets = async() => {
        const tweetsQuery = query(
            collection(database, "tweets"),
            orderBy("createdAt", "desc"),            
        );
        const snapshot = await getDocs(tweetsQuery);
        const tweets = snapshot.docs.map((doc) => {
            const {photo, tweet, userId, username, createdAt} = doc.data();
            return {
                id:doc.id, 
                photo, 
                tweet, 
                userId, 
                username, 
                createdAt
            }
        });
        setTweet(tweets);
    }
    useEffect(() => {
        fetchTweets();
    }, []);
    return <Wrapper>{JSON.stringify(tweets)}</Wrapper>;
}