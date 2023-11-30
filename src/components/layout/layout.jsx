import NavBar from "../Nav-bar/nav-bar";
import { Outlet } from "react-router-dom";

export default function() {
    return(
        <>
            <nav>
                <NavBar />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}