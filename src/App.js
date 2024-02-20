import './App.css';
import { Route, Routes} from "react-router-dom"
import ScrollToHashElement from "./components/common/ScrollToHashElement";
import ScrollToTop from "./components/common/_ScrollTop"; 
import Home from "./Pages/Home"
import Footer from './components/common/Footer';
import Error from "./Pages/Error"
import Particlebg from './components/particles/Particlebg'
import Greet from './Pages/Greet';
import Greetbg from './components/particles/Greetbg';
import Morevideos from './Pages/Videos'
import { useLocation,matchPath } from "react-router-dom";
import Nav from './components/common/nav';
function App() {
  const location = useLocation()

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
  return (
    <div id='about' className="relative flex min-h-screen w-screen flex-col bg-richblack-900 justify-between font-mont ">
    <Nav></Nav>
    {matchRoute("/mail") ? <Greetbg /> : <Particlebg/>}
    <ScrollToHashElement/>
    <ScrollToTop/>
    

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mail" element={<Greet />} />
        <Route path="/videos" element={<Morevideos/>} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
