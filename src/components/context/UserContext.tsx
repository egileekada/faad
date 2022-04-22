import React from 'react'; 

export interface IUser {
    userData: any, 
    setUserData: Function,
    token: any, 
    setToken: Function, 
    profileData: any, 
    setProfileData: Function, 
}

export const UserContext = React.createContext({} as IUser);

const UserContextWrapper = (props: any) => {

    const [token, setToken] = React.useState(''); 
    const [profileData, setProfileData] = React.useState({} as any);
    const [userData, setUserData] = React.useState({} as any); 
    
    return (
        <UserContext.Provider value={{userData, setUserData, token, setToken, profileData, setProfileData}}>
            {
                props.children
            }
        </UserContext.Provider>
    )
}

export default UserContextWrapper;