import { createContext, useContext } from 'react';

    const UserContext = createContext('Phuoc'); 

    export const useUser = () => useContext(UserContext);

    export default UserContext;