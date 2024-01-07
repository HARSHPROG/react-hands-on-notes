import React, {createContext} from  'react';

const TabContext = createContext();

export default function Tab({currentTab, onChange, children}) {
    return (
        <TabContext.Provider value={{currentTab, onChange}}>
            {children}
        </TabContext.Provider>
    )
}

Tab.HeadsContainer = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Tab.Item = ({ label, index, children}) => {
    return (
        <div> {label} </div>
    )
}