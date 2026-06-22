// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";


// const ThemeContext =
//   createContext();

// export const ThemeProvider = ({
//   children,
// }) => {

//   const [theme, setTheme] =
//     useState(
//       localStorage.getItem("theme") ||
//         "dark"
//     );

//   useEffect(() => {

//     const root =
//       document.documentElement;

//     root.classList.remove(
//       "light",
//       "dark"
//     );

//     root.classList.add(theme);

//     localStorage.setItem(
//       "theme",
//       theme
//     );

//   }, [theme]);

//   const toggleTheme = () => {

//     setTheme((prev) =>
//       prev === "dark"
//         ? "light"
//         : "dark"
//     );

//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () =>
//   useContext(ThemeContext);
// <button
// onClick={toggleTheme}
// className="
// p-3
// rounded-xl
// bg-slate-900
// hover:bg-slate-800
// transition
// "
// >

// {
// theme === "dark"
// ?

// <Sun size={18} />

// :

// <Moon size={18} />

// }

// </button>
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({
  children,
}) => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {

    const root =
      document.documentElement;

    root.classList.remove(
      "light",
      "dark"
    );

    root.classList.add(theme);

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  const toggleTheme = () => {

    setTheme((prevTheme) =>
      prevTheme === "dark"
        ? "light"
        : "dark"
    );

  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );
};

export const useTheme = () => {

  const context =
    useContext(ThemeContext);

  if (!context) {

    throw new Error(
      "useTheme must be used within ThemeProvider"
    );

  }

  return context;

};

export default ThemeContext;