import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
    const [userPresence, setUserPresence] = useState(true);
    const [catModal, setCatModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    return (
        <GeneralContext.Provider value={{
            userPresence, setUserPresence,
            catModal, setCatModal,
            loginModal, setLoginModal
        }}>
            {children}
        </GeneralContext.Provider>
    )
};

export const GeneralState = () => {
    return useContext(GeneralContext);
};
export default GeneralProvider