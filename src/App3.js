import ErrorBoundary from "ErrorBoundary";
import React from "react";

class Message extends React.Component{
    render(){
        throw new Error("의도한 에러");
        return "Message Componenet"
    }
}

class App3 extends React.Component{
    render(){
        return (
            <ErrorBoundary>
                <Message/>
            </ErrorBoundary>
        ); 
    }

}

export default App3;