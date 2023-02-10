
import { createContext, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./firebase";
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { useState } from "react";
import { db } from "./firebase";
import { useRouter } from "next/router";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState({});
    const router = useRouter()
    const [user, setUser] = useState(null);

    useEffect(() => {

        const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAdmin({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                });

                if (localUser) {
                    setUser(localUser)
                } else {
                    const q = query(collection(db, "users"), where("email", "==", user.email));
                    getDocs(q).then((res) => {
                        const [remoteUser, ...rest] = res.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() }
                        })
                        if (remoteUser) {
                            console.log('remote user')
                            setUser(remoteUser);
                            localStorage.setItem('user', JSON.stringify(remoteUser))
                        } else {

                            setUser(null)

                        }
                    }).catch((e) => {
                        console.log(e)
                    })
                }

            } else {
                setAdmin(null);

            }
        });
        setLoading(false);
        return () => {
            unsub()
        }
    }, [])

    const logout = async () => {
        await signOut(auth).then(() => {
            localStorage.removeItem('user')

        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <AuthContext.Provider value={{ logout, admin, user, }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);