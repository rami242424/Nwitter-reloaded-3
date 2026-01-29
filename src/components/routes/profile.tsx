import styled from "styled-components"
import { auth } from "../../firebase"

const Wrapper = styled.div`

`;
const AvatarUpload = styled.label`

`;
const AvatarImg = styled.img`

`;
const AvatarInput = styled.input`
    display: none;
`;
const UserName = styled.span`

`;

export default function Profile(){
    const user = auth.currentUser;
    //console.log(user, "user")
    return <Wrapper>
        <AvatarUpload>
            <AvatarImg/>
        </AvatarUpload>
        <AvatarInput type="file" accept="image/*" />
        <UserName>{user?.displayName ?? "Anonymous"}</UserName>
    </Wrapper>
}