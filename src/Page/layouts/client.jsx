import { useEffect, useRef, useState } from "react";
import Footer from "../../component/client/footer";
import {Outlet} from "react-router-dom";
import Header from "../../component/client/header";
// import Home from "../client/home";

const ClientLayout = () => {
    const backTop =  useRef();
    const [scroll, setStroll] = useState(false)

    useEffect(() => {
        scroll &&   window.scrollTo({top: 0 , behavior: 'smooth'});
    } , [scroll])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                backTop.current.classList.add('back-scroll-top');
                setStroll(false)
            }else{
                backTop.current.classList.remove('back-scroll-top');
            }
        }
        window.addEventListener('scroll' ,handleScroll);
        return () => {
            window.removeEventListener('scroll' ,handleScroll);
        }
    } , [])
    return  (
        <div className="layout-client">
         <Header />
          <div className="px-5">
              <Outlet />
          </div>
          <Footer />
          <div ref={backTop} onClick={() => setStroll(true)} className="w-[50px] cursor-pointer back-scroll-Up h-[50px] bg-black text-white text-2xl text-center leading-[50px] rounded-full">
              <i className="fa-solid fa-caret-up"></i>
          </div>
        </div>
    )
}

export default ClientLayout;