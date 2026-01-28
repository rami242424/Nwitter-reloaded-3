import styled from "styled-components";
import type { ITweet } from "./timeline";


const Wrapper = styled.div``;
const Column = styled.div``;
const Username = styled.span``;
const Payload = styled.p``;
const Photo = styled.img``;


export default function Tweet({username, photo, tweet}: ITweet){
    return <Wrapper>
        <Column>
            <Username>{username}</Username>
            <Payload>{tweet}</Payload>
            <Photo />
        </Column>
        {photo ? <Column>
            <Photo src={photo}/>
        </Column> : null}
    </Wrapper>
}