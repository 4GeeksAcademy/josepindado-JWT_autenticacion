import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container justify-content-center">
            <div className="card">
                <h1 className="card-title">¡Bienvenido a Ferrari Land!</h1>
                <p className="card-description">
				Una pagina para compartir nuestra pasión.
                </p>

                <div className="card-buttons">
                    <Link to="/login" className="btn btn-secondary">
                        Login
                    </Link>
					<br/>
                    <Link to="/signup" className="btn btn-secondary">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
	);
};