import { createContext, useContext } from 'react';

//create context
export const UserContext = createContext();

//create a component that provides a value
export const UserProvider = ( { children } ) => {

    return <UserContext.Provider value="Dave">{ children }</UserContext.Provider>
}

// import { UserProvider } from './lecture';

    {/* <UserProvider>
        <p>I am the first born child</p>
        <p>I am the second born child</p>
        </UserProvider> */}