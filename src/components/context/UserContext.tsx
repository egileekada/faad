import React from 'react'; 

export interface IUser {
    userData: any, 
    setUserData: Function,
    token: any, 
    setToken: Function, 
    signup: any, 
    setSignUp: Function, 
}

export const UserContext = React.createContext({} as IUser);

const UserContextWrapper = (props: any) => {

    const [token, setToken] = React.useState(''); 
    const [signup, setSignUp] = React.useState({
        email: '', password: '' 
    }); 
    const [userData, setUserData] = React.useState({} as any); 
    
    return (
        <UserContext.Provider value={{userData, setUserData, token, setToken, signup, setSignUp}}>
            {
                props.children
            }
        </UserContext.Provider>
    )
}

export default UserContextWrapper;