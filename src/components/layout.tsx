import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <>
            <h1>저는 레이아웃입니다.</h1>
            <Outlet />
        </>
    );
}