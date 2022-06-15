import { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken } from "firebase/auth";
import initializeFirebase from '../pages/Firebase/firebase.inint';
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth as gAuth, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {


    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState("")
    const auth = getAuth();
    const fireAuth = gAuth();


    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [authError, setAuthError] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken=> {
                        setToken(idToken)
                    })

                const uid = user.uid;
                setUser(user)
                setAuthError(false)

            } else {
                setUser({})
                setAuthError(false)

            }
        });
        setLoading(false)
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://diagnostic-center-backend.herokuapp.com/checkAdmin/${user.email}`)
            .then(res => res.json())
            .then(res => {
                if (res?.admin) {
                    setAdmin(res.admin)

                }
                else{
                    setAdmin(false)
                }
            })


    }, [user.email])

    const loginWithGoogle = async (callback = false) => {
        await signInWithPopup(fireAuth, googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setAuthError(false);
                const user = result.user;
                setUser(user)

                setAuthError(false)
                saveUserToDatabase(user.email, user.displayName)
                if (callback) {
                    callback()
                }
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                setAuthError(error.message);
                const credential = GoogleAuthProvider.credentialFromError(error);


            });

    }

    const loginWithFacebook = async (callback = false) => {
        await signInWithPopup(fireAuth, fbProvider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                setUser(user)

                setAuthError(false)
                saveUserToDatabase(user.email, user.displayName)
                if (callback) {
                    callback()
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                setAuthError(error.message);
            });

    }
    const loginWithGithub = async () => {
        await signInWithPopup(fireAuth, gitProvider)
            .then((result) => {

                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                setAuthError(false)
                saveUserToDatabase(user.email, user.displayName)

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GithubAuthProvider.credentialFromError(error);
                setAuthError(error.message);

            });

    }
    const registerUser = async (email, password) => {
        await createUserWithEmailAndPassword(fireAuth, email, password)
            .then((userCredential) => {
                setAuthError(false);
                saveUserToDatabase(userCredential.user.email, userCredential.user.displayName || userCredential.user.email.split("@")[0])
                setUser({});
            })
            .catch((error) => {
                // console.log("setting auth error :",authError)
                setAuthError(error.message.split("Firebase: ")[1]);
                //console.log("setting auth error :",authError)

            })
            .finally(() => setLoading(false));
    }
    const loginUser = async (email, password, callback) => {
        await signInWithEmailAndPassword(fireAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setAuthError(false);
                // console.log("setting auth error :",authError)
                callback()

            })
            .catch((error) => {
                //console.log("setting auth error :",authError)
                setAuthError(error.message.split("Firebase: ")[1]);
            }
            ).finally(() => setLoading(false));;
    }

    const logoutUser = async () => {
        await signOut(fireAuth).then(() => {
            // Sign-out successful.
            //console.log("setting auth error :",authError)
            setAuthError(false)
        })
            .catch((error) => {
                // An error happened.
                //console.log("setting auth error :",authError)
                console.log(error)
            })
            .finally(() => setLoading(false));
    }
    const saveUserToDatabase = async (email, name) => {
        const data = { name: name, email: email }
        //    console.log(data)
        await fetch("https://diagnostic-center-backend.herokuapp.com/addUser", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    return {
        user,
        token,
        admin,
        registerUser,
        loginUser,
        logoutUser,
        loading,
        authError,
        loginWithGoogle,
        loginWithFacebook,
        loginWithGithub
    }



}

export default useFirebase;