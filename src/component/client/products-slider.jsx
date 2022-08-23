import React from "react";
import Slider from "react-slick";
import "./../../css/slider.css";
import { Link } from "react-router-dom";

const ProductMoreView = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: true,
  };
  return (
    <div>
      <h3 className="my-10 text-2xl text-center font-bold">
        ĐƯỢC XEM NHIỀU NHẤT
      </h3>
      <div>
        <Slider {...settings}>
          <div className="">
            <Link to="" className="relative">
              <div className="absolute top-0 bg-red-600 px-3 py-1 text-white font-semibold rounded-md">
                -20%
              </div>
              <img
                src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew004_-_black_1.jpg"
                alt=""
              />
            </Link>
            <Link to="" className="font-[600] block my-2 text-md text-gray-800">
              ÁO THUN TAY NGẮN. FITTED - 10S21TSH019CR2
            </Link>
            <span className="text-xl font-[600] mr-3 text-red-700">
              149.000 VND
            </span>
            <span className="text-md line-through">149.000 VND</span>
            <button className="bg-black w-full text-white mt-3 py-2 rounded-md">
              {" "}
              <Link to="">Xem sản phẩm</Link>
            </button>
          </div>
          <div className="">
            <Link to="" className="relative">
              <div className="absolute top-0 bg-red-600 px-3 py-1 text-white font-semibold rounded-md">
                -20%
              </div>
              <img
                src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew004_-_black_1.jpg"
                alt=""
              />
            </Link>
            <Link to="" className="font-[600] block my-2 text-md text-gray-800">
              ÁO THUN TAY NGẮN. FITTED - 10S21TSH019CR2
            </Link>
            <span className="text-xl font-[600] mr-3 text-red-700">
              149.000 VND
            </span>
            <span className="text-md line-through">149.000 VND</span>
            <button className="bg-black w-full text-white mt-3 py-2 rounded-md">
              {" "}
              <Link to="">Xem sản phẩm</Link>
            </button>
          </div>
          <div className="">
            <Link to="" className="relative">
              <div className="absolute top-0 bg-red-600 px-3 py-1 text-white font-semibold rounded-md">
                -20%
              </div>
              <img
                src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew004_-_black_1.jpg"
                alt=""
              />
            </Link>
            <Link to="" className="font-[600] block my-2 text-md text-gray-800">
              ÁO THUN TAY NGẮN. FITTED - 10S21TSH019CR2
            </Link>
            <span className="text-xl font-[600] mr-3 text-red-700">
              149.000 VND
            </span>
            <span className="text-md line-through">149.000 VND</span>
            <button className="bg-black w-full text-white mt-3 py-2 rounded-md">
              {" "}
              <Link to="">Xem sản phẩm</Link>
            </button>
          </div>
          <div className="">
            <Link to="" className="relative">
              <div className="absolute top-0 bg-red-600 px-3 py-1 text-white font-semibold rounded-md">
                -20%
              </div>
              <img
                src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew004_-_black_1.jpg"
                alt=""
              />
            </Link>
            <Link to="" className="font-[600] block my-2 text-md text-gray-800">
              ÁO THUN TAY NGẮN. FITTED - 10S21TSH019CR2
            </Link>
            <span className="text-xl font-[600] mr-3 text-red-700">
              149.000 VND
            </span>
            <span className="text-md line-through">149.000 VND</span>
            <button className="bg-black w-full text-white mt-3 py-2 rounded-md">
              {" "}
              <Link to="">Xem sản phẩm</Link>
            </button>
          </div>
          <div className="">
            <Link to="" className="relative">
              <div className="absolute top-0 bg-red-600 px-3 py-1 text-white font-semibold rounded-md">
                -20%
              </div>
              <img
                src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew004_-_black_1.jpg"
                alt=""
              />
            </Link>
            <Link to="" className="font-[600] block my-2 text-md text-gray-800">
              ÁO THUN TAY NGẮN. FITTED - 10S21TSH019CR2
            </Link>
            <span className="text-xl font-[600] mr-3 text-red-700">
              149.000 VND
            </span>
            <span className="text-md line-through">149.000 VND</span>
            <button className="bg-black w-full text-white mt-3 py-2 rounded-md">
              {" "}
              <Link to="">Xem sản phẩm</Link>
            </button>
          </div>
          <div className="">
            <Link to="" className="relative">
              <div className="absolute top-0 bg-red-600 px-3 py-1 text-white font-semibold rounded-md">-20%</div>
              <img
                src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew004_-_black_1.jpg"
                alt=""
              />
            </Link>
            <Link to="" className="font-[600] block my-2 text-md text-gray-800">
              ÁO THUN TAY NGẮN. FITTED - 10S21TSH019CR2
            </Link>
            <span className="text-xl font-[600] mr-3 text-red-700">
              149.000 VND
            </span>
            <span className="text-md line-through">149.000 VND</span>
           <button className="bg-black w-full text-white mt-3 py-2 rounded-md"> <Link to="" >
              Xem sản phẩm
            </Link></button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductMoreView;
