import styled from "styled-components"
import { auth } from "../../firebase"

const Wrapper = styled.div`
    
`;
const AvatarUpload = styled.div`
    
`;
const AvatarImg = styled.div`
    
`;
const AvatarInput = styled.div`
    
`;
const UserName = styled.div`
    
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