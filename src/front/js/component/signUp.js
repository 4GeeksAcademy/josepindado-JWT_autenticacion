import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const SignUp = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        actions.signUp(email, password, navigate); 
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header text-center bg-primary text-white">
                            <h3>Sign Up</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="mb-3">
                                    <label htmlFor="signup-fullName" className="form-label">Nombre y apellidos</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="signup-fullName"
                                        placeholder="Introduce tu nombre y apellidos"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signup-email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="signup-email"
                                        placeholder="Introduce tu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signup-password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="signup-password"
                                        placeholder="Introduce tu contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signup-confirmPassword" className="form-label">Confirma contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="signup-confirmPassword"
                                        placeholder="Confirma tu contraseña"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;