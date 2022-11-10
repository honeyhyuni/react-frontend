import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component{
    static defaultProps = {
        color: 'red',
    }

    static propTypes = {
        color:PropTypes.string,
    }
    state= {
        color: this.props.color,
        value: 0,
    }

    onClick = () =>{
        this.setState(prevState => {
            return {value: prevState.value + 1};
        } );
    }
    
    onContextMenu = (e) =>{
        e.preventDefault(); // 마우스 우클릭을 해도 켄텍스트 메뉴가 나오지않음
        this.setState(({value: preValue}) => ({
            value: (preValue >= 1 ? preValue-1:0),
        }))
    }
    

    render(){
        const {color, value} = this.state;
        return(
            <div onClick={this.onClick} 
                onContextMenu={this.onContextMenu}
                style={{...style, backgroundColor: color}}>
                {value}
            </div>
        );
    }
}

const style = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    borderRadius: '50px',
    textAlign: 'center',
    lineHeight: '100px',
    userSelect: 'none',
    fontSize: '3rem',
    margin: '1rem',
};



export default Counter;

