import React, { useState } from 'react';
import './App.css';
import LoginArea from './LoginArea';



const testContext = React.createContext()

function App() {

    const [auth,setAuth] = useState(null)

    return (
        <testContext.Provider value={{auth,setAuth}}>
            <section className="app-section">
                <div className="app-container">
                    <LoginArea />
                </div>
            </section>
        </testContext.Provider>      
    );
}

export { testContext };
export default App;
