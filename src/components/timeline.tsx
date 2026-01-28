import { useState } from "react";

export interface ITweet {
    photo: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
}

export default function Timeline(){
    const [tweet, setTweet] = useState<ITweet[]>([]);
    return <></>;
}