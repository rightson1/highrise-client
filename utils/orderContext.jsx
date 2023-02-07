import { createContext, useContext } from "react";
import { collection, getDocs, onSnapshot, query, where, FieldPath } from '@firebase/firestore';
import { db } from './firebase';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSingleBusinessQuery } from "./hooks/useBusiness";
import { useAuth } from "./authContext";
import { useGlobalProvider } from "./themeContext";
const OrderContext = createContext();


export const OrderProvider = ({ children }) => {
    const { store } = useRouter().query
    const { data: business } = useSingleBusinessQuery(store)
    const { baseUrl } = useGlobalProvider()
    const { user } = useAuth();
    const today = new Date().getDay();

    const [orders, setOrders] = useState([])
    const [orderChanges, setOrderChanges] = useState([])
    const [todayOrders, setTodayOrders] = useState([])
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
        if (!user) return;
        const q = query(collection(db, "orders"), where("user", "==", user?.email), where('date.day', '>=', today - 1))
        const unsub = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setTodayOrders(docs)

        });
        return () => unsub();

    }, [user])
    // useEffect(() => {
    //     if (!business) return;
    //     const q = query(collection(db, "orders"), where("business", "==", business._id), where('read', '==', false))
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //         querySnapshot.docChanges().forEach(function (change) {
    //             if (change.type === "added") {
    //                 setNotifications([...notifications, { message: `You have A New Order  `, data: change.doc.data() }])
    //             } else if (change.type === "modified") {
    //                 console.log("Document modified: ", change.doc.data());
    //             } else if (change.type === "removed") {
    //                 setNotifications([...notifications, { message: `Order cancelled by  `, data: change.doc.data() }])
    //             }
    //         });
    //     });
    //     return () => unsub();
    // }, [business,user])
    useEffect(() => {
        if (!user) return;
        axios.get(`${baseUrl}/api/orders?email=${user.email}&day=${today}`).then((res) => {
            setOrders(res.data)
        }).catch((e) => {
            console.log(e)

        })
    }, [todayOrders, user])
    const fetch = () => {

    }

    return (
        <OrderContext.Provider value={{ orders, fetch, notifications, setNotifications }}>
            {children}
        </OrderContext.Provider>
    )
}
export const useOrders = () => useContext(OrderContext)