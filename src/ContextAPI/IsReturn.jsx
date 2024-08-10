import React, {createContext, useState} from 'react';

const IsReturnContext = createContext();

const IsReturn = ({children}) => {
    const [isReturnPassenger, setIsReturnPassenger] = useState(false);

    return (
        <IsReturnContext.Provider value={{isReturnPassenger, setIsReturnPassenger}}>
            {children}
        </IsReturnContext.Provider>
    );
}

export default IsReturn;
export {IsReturnContext};