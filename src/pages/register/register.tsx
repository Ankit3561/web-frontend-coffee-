import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css"; // Import the CSS file
import InputField from "../../component/input/input";
import { confirmPasswordValidation, emailValidation, passwordValidation } from "../../utils/validations";

const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const password = watch("password");
    const onSubmit = (data: any) => {
        console.log(data)
        setLoading(true);
        // const auth = getAuth();
        // signInWithEmailAndPassword(auth, data.email, data.password)
        //     .then((response) => {
        //         sessionStorage.setItem("User Id", response.user.uid);
        //         sessionStorage.setItem("Auth token", response._tokenResponse.refreshToken);
        //         window.dispatchEvent(new Event("storage"));
        //         setLoading(false);
        //         toast.success("Successful register! 🎉", { theme: "dark" });
        //         navigate("/");
        //     })
        //     .catch((error) => {
        //         if (error.code === "auth/wrong-password") {
        //             toast.error("Wrong Password");
        //         } else if (error.code === "auth/user-not-found") {
        //             toast.error("Email not found, please register");
        //         }
        //         setLoading(false);
        //     });
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        label="Name"
                        id="name"
                        type="name"
                        values={register("name", { required: "Name is required" })}
                        error={errors.name}
                    />
                    <InputField
                        label="Email"
                        id="email"
                        type="email"
                        values={register("email", emailValidation)}
                        error={errors.email}
                    />
                    <InputField
                        label="Password"
                        id="password"
                        type="password"
                        values={register("password", passwordValidation)}
                        error={errors.password}
                    />
                    <InputField
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        values={register("confirmPassword", confirmPasswordValidation(password))}
                        error={errors.confirmPassword}
                    />

                    <button className="register-button" type="submit">
                        {loading ? "Loading..." : "Register"}
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;
