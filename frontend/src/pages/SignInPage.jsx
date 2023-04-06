import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


import { signin } from "../features/auth/authSlice";
import { clearMessage } from "../features/message/message";


const SignInPage = () => {

    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required("This field is required!"),
        password: Yup.string().required("This field is required!"),
    });

    const handleSignIn = (formValue) => {
        const { email, password } = formValue;
        
        setLoading(true);

        dispatch(signin({email, password}))
        .unwrap()
        .then(() => {
            navigate("/profile");
            window.location.reload();
        })
        .catch(() => {
            setLoading(false);
        });
    };

    if (isLoggedIn) {
        return <Navigate to="/profile" />;
    }

    return (
        <>
            <NavBar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSignIn}
                    >
                        <Form>
                            <div className="input-wrapper">
                                <label htmlFor="email">Username</label>
                                <Field name="email" type="email" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                />
                            </div>
                            <div className="input-remember">
                                <Field name="remember-me" type="checkbox" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button" disabled={loading}>
                                {loading && (
                                    <span>Loading...</span>
                                )}
                                <span>Sign In</span>
                            </button>
                        </Form>
                    </Formik>
                    {message && (
                        <>
                            <br />
                            <div style={{color: 'red'}}>
                                {message}
                            </div>
                        </>
                        
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default SignInPage;