import { createContext, useState } from "react";

export const AppDataContext = createContext({});
export const AppDataProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const values = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AppDataContext.Provider value={values}>{props.children}</AppDataContext.Provider>
  );
};
