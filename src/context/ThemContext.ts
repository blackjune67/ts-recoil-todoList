import { createContext, useContext } from "react";

interface State {
    isDark: boolean,
    setIsDark: any;
};

/* export const ThemContext = createContext<State>({
    isDark: false,
    setIsDark: () => { return null; }
},
); */

// const ThemContext = createContext<State | null>(null);

export const ThemContext = createContext<State>({
    isDark: false,
    setIsDark: () => { return null; }
},
);


/* const useSomeContext = () => {
    const ctx = useContext(ThemContext);
    if (ctx === null) {
        throw new Error();
    }
    return ctx;
}

export default useSomeContext; */