import React, { useContext } from 'react';

// @ts-ignore
const AppContext = React.createContext();

const AppProvider = ({ children }: any) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
