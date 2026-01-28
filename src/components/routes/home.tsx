import styled from "styled-components";
import PostTweetForm from "../post-tweet-form";
import Timeline from "../timeline";

const Wrapper = styled.div``;

export default function Home(){
    return <Wrapper>
        <PostTweetForm />
        <Timeline />
    </Wrapper>
}