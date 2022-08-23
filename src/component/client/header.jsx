import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuSub from "./menu-sub";
import OverLay from "./overlay";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isSearch , setIsSearch] = useState(false);

  const header = useRef();
  const inputSearch = useRef();

  useEffect(() => {
     inputSearch.current.addEventListener('blur' ,  () => {
      setIsSearch(false);
     })
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.current.classList.add("header-scroll");
      } else {
        header.current.classList.remove("header-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={header} className=" bg-white z-20 mb-4">
      <div className="px-5 flex items-center justify-between">
        <ul className="flex w-[42%]">
          <li className="py-[25px] menu  first:pl-0 px-[15px]">
            <Link
              to=""
              className="text-[16px]  text-gray-800 font-semibold uppercase hover:underline leading-[28px]"
            >
              Nam
            </Link>
            <MenuSub ArrSub={['']} />
          </li>
          <li className="py-[25px] px-[15px]">
            <Link
              className="text-[16px] text-gray-800 font-semibold uppercase hover:underline leading-[28px]"
              to=""
            >
              Nữ
            </Link>
          </li>
          <li className="py-[25px] px-[15px]">
            <Link
              className="text-[16px] text-gray-800 font-semibold uppercase hover:underline leading-[28px]"
              to=""
            >
              NEW ARRIVALS
            </Link>
          </li>
          <li className="py-[25px] px-[15px]">
            <Link
              className="text-[16px] font-semibold uppercase hover:underline leading-[28px]"
              to=""
            >
              TAKE IT EASY
            </Link>
          </li>
          <li className="py-[25px] px-[15px]">
            <Link
              className="text-[16px] text-gray-800 font-semibold uppercase hover:underline leading-[28px]"
              to=""
            >
              OUTLET
            </Link>
          </li>
        </ul>
        <div className="text-center pr-2">
          <img
            src="https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png"
            alt=""
          />
        </div>
        <div className="flex justify-end items-center w-[42%]">
          <input  ref={inputSearch} onFocus={() => setIsSearch(true)}
            placeholder="TÌM KIẾM SẢN PHẨM"
            type="text"
            className="w-[150px]  placeholder:text-gray-800 focus:outline-none text-sm pl-2 py-2  border-b-[1px] border-gray-500"
          />
          <ul className="flex ">
            <li className="py-[25px] px-[15px]">
              <Link
                to=""
                className="text-[16px] text-gray-800 font-semibold uppercase hover:underline leading-[28px]"
              >
                Đăng nhập
              </Link>
            </li>
            <li className="py-[25px] text-gray-800 px-[15px]">
              <Link
                className="text-[16px] font-semibold uppercase hover:underline leading-[28px]"
                to=""
              >
                Trợ giúp
              </Link>
            </li>
            <li className="py-[25px] text-gray-800 px-[15px]">
              <button
                className="text-[16px] font-semibold uppercase hover:underline leading-[28px]"
                onClick={() => setShow(true)}
              >
                Giỏ hàng <span>(0)</span>
              </button>
            </li>
          </ul>
        </div>
        <div
          style={{ width: show && "400px", transition: show && "0.2s" }}
          className="fixed  z-30 w-[0px] duration-300 overflow-x-hidden border-l-[2px] border-[#eee] bottom-0 bg-white top-0 right-0"
        >
          <div className="p-5">
            <header className="flex pb-3 justify-between items-center border-b-[1px] border-gray-400">
              <div className="">
                <h3 className="uppercase font-bold">giỏ hàng</h3>
                <span className="text-md text-gray-500">0 sản phẩm</span>
              </div>
              <h3
                onClick={() => setShow(false)}
                className="uppercase text-lg cursor-pointer font-bold"
              >
                Đóng
              </h3>
            </header>
            <div className="flex justify-center h-[500px] items-center">
              <div className="text-center">
                <div className="w-[100px] m-auto">
                  <img
                    className="w-full"
                    src="https://routine.vn/static/version1660060686/frontend/Magenest/routine_desktop/vi_VN/images/cart_empty.svg"
                    alt=""
                  />
                </div>
                <h2 className="my-3 text-xl">GIỎ HÀNG TRỐNG RỖNG</h2>
                <p>Bạn không có sản phẩm nào trong giỏ hàng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       {show &&  <OverLay onClick={() => setShow(false)} /> }  
       {isSearch &&  <OverLay onClick={() => setIsSearch(false)} style={{backgroundColor: '#000' , top: '80px'}} /> }  
    </header>
  );
};

export default Header;
