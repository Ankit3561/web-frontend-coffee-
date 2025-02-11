
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../component/header/header';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Register from '../pages/register/register';

function Main() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Main;
