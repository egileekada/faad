import React from 'react'; 

export interface IUser {
    userData: any, 
    setUserData: Function,
    token: any, 
    setToken: Function, 
    tab: any, 
    setTab: Function, 
    profileData: any, 
    setProfileData: Function, 
    dealTab: any, 
    setDealTab: Function, 
    dealValue: any, 
    setDealValue: Function, 
}

export const UserContext = React.createContext({} as IUser);

const UserContextWrapper = (props: any) => {

    const [token, setToken] = React.useState(''); 
    const [tab, setTab] = React.useState(''); 
    const [profileData, setProfileData] = React.useState({} as any);
    const [userData, setUserData] = React.useState({} as any); 
    const [dealTab, setDealTab] = React.useState({} as any); 
    const [dealValue, setDealValue] = React.useState({} as any); 
    
    return (
        <UserContext.Provider value={{dealValue, setDealValue, dealTab, setDealTab, userData, setUserData, tab, setTab, token, setToken, profileData, setProfileData}}>
            {
                props.children
            }
        </UserContext.Provider>
    )
}

export default UserContextWrapper;