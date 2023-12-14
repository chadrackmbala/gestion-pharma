import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLoginSubmit }) {

    const [pseudoInput, setPseudoInput] = useState("");
    const navigate = useNavigate();

    const handleLoginSubmit = () => {
        onLoginSubmit(pseudoInput);
        navigate("/home");
    }

    return (
        <>
            <header>
                <h1>Login</h1>
            </header>
            <main>
                <label>Pseudo : </label>
                <input type="text"
                    value={pseudoInput}
                    onChange={
                        (e) => setPseudoInput(e.target.value)
                    } />
                <div>
                    <button onClick={handleLoginSubmit}>
                        ACCEDER
                    </button>
                </div>
            </main>
        </>
    );
}
