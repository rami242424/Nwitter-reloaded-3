import styled from "styled-components";
import PostTweetForm from "../post-tweet-form";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Home(){
    return <Wrapper>
        <PostTweetForm />
    </Wrapper>
}