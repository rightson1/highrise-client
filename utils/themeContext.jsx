
import {
    createContext,
    useState,
    useMemo,
    useReducer,
    useContext,
    useEffect,
} from "react";
import { reducer, actionTypes } from "./reducer";
import { tokens, themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as Theme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { baseUrl } from "./url";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./authContext";
import { OrderProvider } from "./orderContext";
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const router = useRouter()

    const initialState = useMemo(() => {
        return {
            theme: 'light'
        }
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState);
    const mode = useMemo(() => {
        return state.theme
    }, [state])
    const colors = tokens(mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [close, setClose] = useState(false);
    const isMobile = useMediaQuery("(max-width: 600px)")
    const isMobileSmall = useMediaQuery("(max-width: 600px)")
    const isLarge = useMediaQuery("(min-width: 900px)");
    const [change, setChange] = useState(false)
    const [queryClient] = useState(() => new QueryClient());
    const [cart, setCart] = useState([])
    const [animate, setAnimate] = useState([])
    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        } []
    }, [])

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                dispatch,
                actionTypes,
                colors,
                mode,
                open,
                setOpen,
                isMobile,
                change,
                close,
                isLarge,
                setChange,
                setClose,
                isMobileSmall,
                baseUrl,
                cartOpen,
                setCartOpen,
                cart,
                setCart,
                animate,
                setAnimate
            }}
        >

            <QueryClientProvider client={queryClient}>
                <Theme theme={theme}>
                    <AuthProvider>
                        <CssBaseline />
                        <OrderProvider>
                            {children}
                        </OrderProvider>
                        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
                    </AuthProvider>
                </Theme>
            </QueryClientProvider>

        </ThemeContext.Provider>
    );
};
export const useGlobalProvider = () => useContext(ThemeContext);
