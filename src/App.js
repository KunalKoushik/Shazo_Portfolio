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
// import Morevideos from './Pages/Videos';
import { useLocation,matchPath } from "react-router-dom";
import Nav from './components/common/nav';
import { lazy,Suspense, useEffect, useState } from 'react';
import Logo from './components/common/Logo';

const Morevideos = lazy( ()=> import('./Pages/Videos'))

function App() {
  const location = useLocation()

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
  const [IsLoading , setIsLoading] = useState(true);

  useEffect(()=>{
  const fetchData = ()=>{
        setTimeout(() => {
          setIsLoading(false)
        }, 4000);
      }
      fetchData();
    },[]
  )
  
  
  return IsLoading? (
    <div className='flex h-[100vh] w-full items-center justify-center  bg-richblack-900'>
    <Logo/>
    </div>):( 
    <div id='about' className="relative flex min-h-screen w-screen flex-col bg-richblack-900 justify-between font-mont ">
    <Nav></Nav>
    {matchRoute("/mail") ? <Greetbg /> : <Particlebg/>}
    <ScrollToHashElement/>
    <ScrollToTop/>
    

      <Suspense fallback={<div> loading....... </div>}>
    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/mail" element={<Greet />} />
        <Route path="/videos" element={<Morevideos/>} />
        <Route path="*" element={<Error />} />
    </Routes>
      </Suspense>
    <Footer/>
    </div>
  );
  // return(
  //   <div id='about' className="relative flex min-h-screen w-screen flex-col bg-richblack-900 justify-between font-mont ">
  //     <Loader/>
  //   <Nav></Nav>
  //   {matchRoute("/mail") ? <Greetbg /> : <Particlebg/>}
  //   <ScrollToHashElement/>
  //   <ScrollToTop/>
    

  //   <Routes>
  //       <Route path="/" element={<Home/>} />
  //       <Route path="/mail" element={<Greet />} />
  //       <Route path="/videos" element={<Morevideos/>} />
  //       <Route path="*" element={<Error />} />
  //   </Routes>
  //   <Footer/>
  //   </div>
  // );
}

export default App;
