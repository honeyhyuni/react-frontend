import React from "react";
import {BrowserRouter, Link, Route, Routes, NavLink, useParams} from "react-router-dom"

// <a>태그는 브라우저에 의한 라우팅
const App = () =>{
    return(
    <BrowserRouter>
        <div>
            <h1>App</h1>
            <ul>
                <li><NavLink to="/about/" style={activeStyle}>about</NavLink></li>
                <li><NavLink to="/about/company/" style={activeStyle}>about company</NavLink></li>
                <li><NavLink to="/profile/" style={activeStyle}>profile</NavLink></li>
                <li><NavLink to="/blog" style={activeStyle}>blog</NavLink></li>
            </ul>
            <Routes>
                <Route path="/about/" element={AboutPage()} />
                <Route path="/about/company" element={AboutCompanyPage()} />
                <Route path="/profile/" element={ProfilePage()} />
                <Route path="/blog/" element={BlogPage()} />
                <Route path="/posts/" element={<PostList/>}/>
                <Route path="/posts/:post_id" element={<PostList/>}/>
                <Route path="*"element={RouteNoMatch()}/>
            </Routes>
        </div>
    </BrowserRouter>
    );
};

const activeStyle = ({isActive}) =>{
    return isActive ? {fontWeight: 'bold',
    backgroundColor: 'yellow'}: null;
};

//about/
const AboutPage = () =>{
    return (
        <div>
            AboutPage
        </div>
    );
}

const AboutCompanyPage = () =>{
    return (
        <div>
            AboutCompanyPage
        </div>
    );
}

//profile/
const ProfilePage = () =>{
    return (
        <div>
            ProfilePage
        </div>
    );
}

//blog/
const BlogPage = () =>{
    return (
        <div>
            BlogPage
        </div>
    );
}

const RouteNoMatch = () =>{
    return(
        <div>
            <h1>잘못된 경로로 접근하셨습니다.</h1>
        </div>
    );
}

function PostList(){
    return(
        <div>
            <h2>Post List</h2>
            <ul>
                <li>
                    <Link to="100">100번 포스팅</Link>
                </li>
                <li>
                    <Link to="200">200번 포스팅</Link>
                </li>
            </ul>
        </div>
    );
}

function PostDetail(){
    const {post_id} = useParams();
    return(
        <div>
            <h2>Post Detail #{post_id}</h2>
        </div>
    );
}

export default App;