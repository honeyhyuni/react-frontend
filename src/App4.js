import React, { useEffect, useState } from "react";

class App1 extends React.Component{
    state = {
        value1: 0,
        value2: 0,
    }

    onClick = () =>{
        this.setState({value1: 10});
    }

    render(){
        const {value1} = this.state;
        return(
            <div>
                Hello App1
                <hr/>
                {value1}
                <button onClick={this.onClick}></button>
            </div>
        );
    }
}


function PostDetailComponent({post}){
    const {title, content} = post
    return(
        <div>
           <h1>{title}</h1>
           {content} 
        </div>
    );
}


function PostDetail({postId}){
    
    const [post, setPost] = useState();

    useEffect(() => {
        // console.log("changed postId:", postId)
        setPost({title: "포스팅 제목", content: `포스팅 내용: ${postId}`});
    }, [postId])

    return(
        <div>
            <h1>Post #{postId}</h1>
            {!post && "로딩중..."}
            {post && <PostDetailComponent post = {post}/>}
        </div>
    );
}


function App2() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value, setValue] = useState({value1:0, value2: 2});
    const [postId, setPostId] = useState(1);
    
    // useEffect(() =>{}); // render 시에 호출
    // useEffect(() =>{},[]); // mount 시에만 호출
    // useEffect(() =>{},[value]); // value가 변경 될 시에만 호출

    const onClick = () => {
        setValue(prevState => ({...prevState, value1:10}));
    };
    return(
        <div>
            Hello App2
            <hr/>
            {JSON.stringify(value)}
            <button onClick={onClick}>click</button>
            <hr/>
            <button onClick={() => setPostId(100)}>100번 글 보기</button>
            <PostDetail postId={postId}/>
        </div>
    );
}

// Custom Hook
const useCurrentTime = () =>{
    const [currentTime, setCurrentTime] = useState();

    useEffect(() =>{
        const handler = setInterval(() => {
            const currentTime = new Date().toISOString().slice(11, 19);
            setCurrentTime(currentTime);
        }, 1000);
        return () => clearInterval(handler);
    }, []);

    return currentTime
};

const useWindowWidth = () => {
    const [width, setwidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const onResize = () => {
            setwidth(window.innerWidth);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    })
    
    return width;
}

const App = () =>{
    const currentTime = useCurrentTime();
    const windowwidth = useWindowWidth();
    return(
        <div>   
            <h1>현재시각</h1>
            {currentTime}
            <h1>current window width</h1>
            {windowwidth}px
        </div>
    );
}


export default App;
