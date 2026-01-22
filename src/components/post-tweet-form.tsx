import styled from "styled-components"

const Form = styled.form``;
const TextArea = styled.textarea``;
const AttachFileButton = styled.label``;
const AttachFileInput = styled.input`
    display: none;
`;
const SubmitBtn = styled.input``;


export default function PostTweetForm(){
    return <Form>
        <TextArea placeholder="What is happening?"/>
        <AttachFileButton htmlFor="file">Add photo</AttachFileButton>
        <AttachFileInput id="file" type="file" accept="image/*"/>
        <SubmitBtn type="submit" value="Post Tweet"/>
    </Form>
}