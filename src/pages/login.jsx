import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    };
    const adminNavigate = useNavigate();
    const adminHandleClick = () => {
        adminNavigate('/all-products');
    };

    return (
        <>
            <h1>Login Page</h1>

            <button onClick={handleClick}>
                Connexion
            </button>
            <button onClick={adminHandleClick}>
                Admin Dashboard
            </button>
        </>
    );
}