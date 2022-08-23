import { useEffect } from "react";

const Filter = ({filter , onClick}) => {
  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      var panel = acc[i].nextSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", () => {
        var panel = acc[i].nextSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, []);
  return (
    <div
      style={{ transform: filter && "translateX(0px)" }}
      className="fixed  z-30 w-[400px] translate-x-[400px] duration-500 overflow-x-hidden border-l-[2px] border-[#eee] bottom-0 bg-white top-0 right-0"
    >
      <div className="">
        <header className="fixed top-0 left-0 right-0 flex justify-between p-4">
          <h4 className="uppercase font-bold text-lg">Đặt lại</h4>
          <h4
            onClick={() => onClick(false)}
            className="uppercase cursor-pointer font-bold text-lg"
          >
            Đóng
          </h4>
        </header>
        <div className="mt-14">
          <div className="cursor-pointer">
            <div className="accordion   flex justify-between px-4 border-y-[1px] duration-400  border-gray-400 py-2 items-center">
              <h3 className="uppercase font-bold text-md">DANH MỤC SẢN PHẨM</h3>
              <i className="fa-solid fa-plus block"></i>
            </div>
            <ul className="px-4 overflow-hidden filter-transition max-h-0">
              <li className="my-3">
                <a>ÁO NAM</a>
              </li>
              <li className="my-3">
                <a>QUẦN NAM</a>
              </li>
              <li className="my-3">
                <a>PHỤ KIỆN</a>
              </li>
              <li className="my-3">
                <a>SALE OFF NAM</a>
              </li>
            </ul>
          </div>
          <div className=" cursor-pointer">
            <div className=" accordion flex justify-between px-4 border-y-[1px] duration-400 filter-transition border-gray-400 py-2 items-center">
              <h3 className="uppercase font-bold text-md">DANH MỤC SẢN PHẨM</h3>
              <i className="fa-solid fa-plus block"></i>
            </div>
            <ul className="px-4 filter-transition overflow-hidden max-h-0">
              <li className="my-3">
                <a>ÁO NAM</a>
              </li>
              <li className="my-3">
                <a>QUẦN NAM</a>
              </li>
              <li className="my-3">
                <a>PHỤ KIỆN</a>
              </li>
              <li className="my-3">
                <a>SALE OFF NAM</a>
              </li>
            </ul>
          </div>
          <div className=" cursor-pointer">
            <div className=" accordion flex justify-between px-4 border-y-[1px] duration-400 filter-transition border-gray-400 py-2 items-center">
              <h3 className="uppercase font-bold text-md">DANH MỤC SẢN PHẨM</h3>
              <i className="fa-solid fa-plus block"></i>
            </div>
            <ul className="px-4 filter-transition overflow-hidden max-h-0">
              <li className="my-3">
                <a>ÁO NAM</a>
              </li>
              <li className="my-3">
                <a>QUẦN NAM</a>
              </li>
              <li className="my-3">
                <a>PHỤ KIỆN</a>
              </li>
              <li className="my-3">
                <a>SALE OFF NAM</a>
              </li>
            </ul>
          </div>
          <div className=" cursor-pointer">
            <div className=" accordion flex justify-between px-4 border-y-[1px] duration-400 filter-transition border-gray-400 py-2 items-center">
              <h3 className="uppercase font-bold text-md">DANH MỤC SẢN PHẨM</h3>
              <i className="fa-solid fa-plus block"></i>
            </div>
            <ul className="px-4 filter-transition overflow-hidden max-h-0">
              <li className="my-3">
                <a>ÁO NAM</a>
              </li>
              <li className="my-3">
                <a>QUẦN NAM</a>
              </li>
              <li className="my-3">
                <a>PHỤ KIỆN</a>
              </li>
              <li className="my-3">
                <a>SALE OFF NAM</a>
              </li>
            </ul>
          </div>
          <div className=" cursor-pointer">
            <div className=" accordion flex justify-between px-4 border-y-[1px] duration-400 filter-transition border-gray-400 py-2 items-center">
              <h3 className="uppercase font-bold text-md">DANH MỤC SẢN PHẨM</h3>
              <i className="fa-solid fa-plus block"></i>
            </div>
            <ul className="px-4 filter-transition overflow-hidden max-h-0">
              <li className="my-3">
                <a>ÁO NAM</a>
              </li>
              <li className="my-3">
                <a>QUẦN NAM</a>
              </li>
              <li className="my-3">
                <a>PHỤ KIỆN</a>
              </li>
              <li className="my-3">
                <a>SALE OFF NAM</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default Filter;