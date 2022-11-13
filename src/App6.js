import React, { createContext } from "react";

const MessageContext = createContext();

const App = () =>{
    return( 
        <MessageContext.Provider value="Provider Values">
            <Lv1 message = "Context API in React" />
        </MessageContext.Provider>
    );
};


const Lv1 = ({message}) =>{
    return <Lv2 message = {message} />;

}
const Lv2 = ({message}) =>{
    return <Lv3 message = {message} />;
}
const Lv3 = ({message}) =>{
    return( 
        <div>
            <MessageContext.Consumer>
                {(message) => <>Level3 : {message}</>} 
            </MessageContext.Consumer>
        </div>
    );
}




export default App;