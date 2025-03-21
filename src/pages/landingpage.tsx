import { Outlet } from "react-router-dom"
import { NavigationBar } from "../UI/navigationbar"


export const LandingPage = () => {

    return(
        <>
        <NavigationBar />
        <Outlet />
        </>
    )
}