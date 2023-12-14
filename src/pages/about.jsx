import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function About() {

    const user = useContext(UserContext);

    return (
        <>
            <h1>🎅 Joyeux Nöel {user.pseudo} 🎅</h1>
            <p>This is a pharmaceutical product management app</p>
        </>
    );
}