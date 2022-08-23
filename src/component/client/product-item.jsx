import { useState } from "react";
import { Link } from "react-router-dom";

const arrImageSub = [
     'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s22shs004_-_bright_white_1_1.jpg',
     'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21pol008---bright-white-2_1.jpg',
     'https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10f21pca001cr1---moon-struck-3_1.jpg',
]
const ProductItem = ({item}) => {
  const [mainImg , setMainImage] = useState(item.image);

  return (
    <div className="relative pb-9">
      <div className="absolute right-0 text-center text-white top-3  bg-[#FF1E00] rounded-l-md w-[20%]">
        -20%
      </div>
      <img
        className="absolute top-3 w-[70px] left-3"
        src="https://routine.vn/media//amasty/banners_lite/NEW_ARRIVALS_LABEL-01_2.png"
        alt=""
      />
      <Link to="">
        {" "}
        <img
          src={mainImg}
          alt=""
        />
      </Link>
      <Link to="">
        {" "}
        <h3 className="uppercase text-[14px] mt-3 text-gray-800 font-[600]">
          ÁO JACKET TRƠN. LOOSE - 10S21DJA004
        </h3>
      </Link>
      <span className="font-[300]">639.000 ₫</span>
      <ul className="my-3 flex justify-start">
      {arrImageSub.map(item => ( 
      <li  onClick={() => setMainImage(item)} key={item} className="mr-2 cursor pointer hover:opacity-80">
          <button className="">
            <img
              className="h-[30px] w-[30px] object-cover"
              src={item}
              alt=""
            />
          </button>
        </li>))}
       
      </ul>
    </div>
  );
};

export default ProductItem;
