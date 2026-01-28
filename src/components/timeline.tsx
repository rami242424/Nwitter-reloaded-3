import { useEffect, useState } from "react";
import styled from "styled-components";

export interface ITweet {
    photo: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
}

const Wrapper = styled.div`

`;
export default function Timeline(){
    const [tweets, setTweet] = useState<ITweet[]>([]);
    const fetchTweets = async() => {}
    useEffect(() => {
        fetchTweets();
    }, []);
    return <Wrapper>{JSON.stringify(tweets)}</Wrapper>;
}