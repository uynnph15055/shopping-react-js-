import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../component/client/banner";
import Filter from "../../component/client/filter";
import OverLay from "../../component/client/overlay";
import ProductItem from "../../component/client/product-item";

const Products = [
  {
    name: 'ÁO SƠ MI TAY NGẮN SỢI COFFEE. FITTED - 10S22SHS010CR1',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s22shs010_-_white_3__2.jpg',  
  },
  {
    name: 'ÁO SƠ MI GẬP LY SAU. REGULAR - 10F21SHL011',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21dsh003_-_rubber_3__1.jpg',
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21shl016_-_habbor_mist_2_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21shl005_-_bright_white_1_.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21pol008---bright-white-2_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21shl011_-_black_ink_1_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s22tss004---tea-3_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21tss018_-_bright_white_4__1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21psh012---natural-2_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21pol002---medieval-blue-3_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21psh001---insence-4_optimized_1.jpg'
  },
  {
    name: 'ÁO SƠ MI TAY DÀI MODAL.SLIM - 10F21SHL016',
    image: 'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21pfo006_-_seneca_rock_5__1.jpg'
  }
];

const Home = () => {
  const [filter, setFilter] = useState(false);

  return (
    <>
      <Banner />
      <div className="flex mt-10 justify-between items-center">
        <ul className="flex">
          <li className="px-4 relative first:pl-0">
            <Link
              to=""
              className="before:content-['\f105'] before:text-[13px] before:translate-y-[10%] before:absolute before:right-0 before:font-['FontAwesome'] uppercase"
            >
              Trang chủ
            </Link>
          </li>
          <li className="px-3">
            <Link to="" className="uppercase">
              THỜI TRANG NAM
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="flex">
            <img
              className="mr-5 cursor-pointer"
              src="https://routine.vn/static/version1660060686/frontend/Magenest/routine_desktop/vi_VN/images/grid4active.svg"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="https://routine.vn/static/version1660060686/frontend/Magenest/routine_desktop/vi_VN/images/grid2disable.svg"
              alt=""
            />
          </div>
          <select
            defaultValue="1"
            className="ml-10 cursor-pointer bg-white focus:outline-none w-[180px] border-b-[1px] border-[#ccc] pb-[5px] text-md"
          >
            <option disabled hidden value="1">
              Sắp xếp theo
            </option>
            <option value="2">cscscs</option>
            <option value="3">cscscs</option>
            <option value="4">cscscs</option>
          </select>
          <div className="" onClick={() => setFilter(true)}>
            <span className="ml-10 text-gray-800 font-semibold cursor-pointer uppercase">
              + Lọc sản phẩm (0)
            </span>
          </div>
        </div>
      </div>
      <div className="my-10">
        <ul className="flex justify-start">
          <li className="cursor pointer font-bold bg-[#1C3879] p-[5px] first:ml-0 mx-3 rounded-lg px-[20px] text-white">
            <Link to="">ÁO NAM</Link>
          </li>
          <li className="cursor pointer font-bold bg-[#1C3879] p-[5px] mx-3 rounded-lg px-[20px] text-white">
            <Link to="">QUẦN NAM</Link>
          </li>
          <li className="cursor pointer font-bold bg-[#1C3879] p-[5px] mx-3 rounded-lg px-[20px] text-white">
            <Link to=""> PHỤ KIỆN</Link>
          </li>
          <li className="cursor pointer font-bold bg-[#1C3879] p-[5px] mx-3 rounded-lg px-[20px] text-white">
            <Link to="">SALE OFF NAM</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4  gap-5">
        {Products.map(item => (
           <ProductItem key={item.image} item={item} />
        ))}
      </div>
      <div className="pb-20 mt-5">
        <ul className="flex justify-center">
          <li>
            <Link
              className="px-3 py-[7px] rounded-l-md hover:bg-gray-200 hover:ease-in hover:duration-300 duration-300"
              to=""
            >
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-[7px] rounded-md hover:bg-gray-200 hover:ease-in hover:duration-300 duration-300"
              to=""
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-[7px] rounded-md hover:bg-gray-200 hover:ease-in hover:duration-300 duration-300"
              to=""
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-[7px] rounded-md hover:bg-gray-200 hover:ease-in hover:duration-300 duration-300"
              to=""
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-[7px] rounded-r-md hover:bg-gray-200"
              to=""
            >
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </div>
      <Filter filter={filter} onClick={() => setFilter(false)} />
      {filter && <OverLay onClick={() => setFilter(false)}  style={{backgroundColor: '#000'}} />}
    </>
  );
};

export default Home;
