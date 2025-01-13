import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container justify-content-center">
            <div className="card">
                <h1 className="card-title">¡Wellcome to GeekGym!</h1>
                <p className="card-description">
				A gym for geeks that combines advanced technology with personalized routines to strengthen both body and mind. Train like a true geek!
                </p>

                <div className="card-buttons">
                    <Link to="/login" className="btn btn-login">
                        Login
                    </Link>
					<br/>
                    <Link to="/signup" className="btn btn-signup">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
	);
};