import { useContext, createContext} from "react";

const formRegisterContext = createContext(null);

export const FormRegisterContextProvider = ({register, children}) => {
    return (
        <formRegisterContext.Provider value={register}>
            {children}
        </formRegisterContext.Provider>
        )
}

export let useFormRegister = () => useContext(formRegisterContext);
