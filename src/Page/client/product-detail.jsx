import { useState, useEffect } from "react";

const arrImage = [
  {
    id: 1,
    image:
      "https://routine.vn/media/catalog/product/cache/d75ea623e8701d00cb50e7baa81187bb/1/0/10s21dja004_-_black_5_1.jpg",
  },
  {
    id: 2,
    image:
      "https://routine.vn/media/catalog/product/cache/d75ea623e8701d00cb50e7baa81187bb/1/0/10s21dja004_-_black_5_1.jpg",
  },
  {
    id: 3,
    image:
      "https://routine.vn/media/catalog/product/cache/d75ea623e8701d00cb50e7baa81187bb/1/0/10s21dja004_-_black_5_1.jpg",
  },
];

const sizes = [
  {
    id: 1,
    option: "M",
  },
  {
    id: 2,
    option: "L",
  },
  {
    id: 3,
    option: "Xl",
  },
];

const ProductDetail = () => {
  const [color, setColor] = useState();

  useEffect(() => {
    const elColor = document.getElementsByClassName("color");
    const elSize =  document.getElementsByClassName('size');
    for (let i = 0; i < elColor.length; i++) {
      elColor[i].addEventListener("click", () => {
        elColor[i].style.border = "1px solid #000";
        const arrNew = Object.values(elColor).filter(
          (item, index) => index !== i
        );
        for (let j = 0; j < arrNew.length; j++) {
          arrNew[j].style.border = "none";
        }
      });
    }

    for (let i = 0; i < elSize.length; i++) {
        elSize[i].addEventListener("click", () => {
          const size =  elSize[i].children;
          size[0].style.backgroundColor = "#000";
          size[0].style.color = "#ffff";
          const arrNew = Object.values(elSize).filter(
            (item, index) => index !== i
          );
          for (let j = 0; j < arrNew.length; j++) {
            const sizeChildren =  arrNew[j].children;
            for (let k = 0; k < sizeChildren.length; k++) {
                sizeChildren[k].style.backgroundColor = "#ffff";
                sizeChildren[k].style.color = "#000";
            }
          }
        });
      }
  }, []);

  return (
    <div className="pb-10">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3 bg-gray-100 h-[550px]">
          <div className="overflow-y-auto h-full mx-4">
            <img
              src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10s21dja004_-_tiger_s_eye_2_1.jpg"
              alt=""
            />
            <img
              src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10s21dja004_-_tiger_s_eye_2_1.jpg"
              alt=""
            />
            <img
              src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10s21dja004_-_tiger_s_eye_2_1.jpg"
              alt=""
            />
            <img
              src="https://routine.vn/media/catalog/product/cache/e78fcb931fd36e972f6051c94f188557/1/0/10s21dja004_-_tiger_s_eye_2_1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-4">
            <h2 className="col-span-3 font-bold text-gray-800 text-2xl font-base uppercase ">
              ÁO JACKET TRƠN. LOOSE - 10S21DJA004
            </h2>
            <p className="col-span-1 text-center text-2xl">
              <ion-icon name="share-social-outline"></ion-icon>
            </p>
          </div>
          <div className="flex my-3 ">
            <div className="flex">
              <i className="text-sm text-blue-700 mr-1 fa-solid fa-star"></i>
              <i className="text-sm mr-1 text-blue-700 fa-solid fa-star"></i>
              <i className="text-sm mr-1 text-blue-700 fa-solid fa-star"></i>
              <i className="text-sm  mr-1 text-gray-400 fa-solid fa-star"></i>
            </div>
            <h3 className="font-bold text-gray-900">- Đã bán: 168 sản phẩm</h3>
          </div>
          <div className="">
            <span className="mr-4 text-3xl text-red-600">639.000 ₫</span>
            <span className="text-2xl line-through">639.000 ₫</span>
          </div>
          <h3 className="my-3 text-md text-gray-900 font-[600]">
            MÃ HÀNG HÓA :<span className="font-[400]">10S21DJA004</span>
          </h3>
          <form action="">
            <h3 className="my-3 text-md text-gray-900 font-[600]">MÀU :</h3>
            <div className="flex">
              {arrImage.map((item) => (
                <div
                  key={item.id}
                  className="color  border h-[40px]  mr-2 border-gray-300"
                >
                  <label htmlFor={item.id}>
                    <img
                      className="h-full cursor-pointer" 
                      src={item.image}
                      alt=""
                    />
                  </label>
                  <input
                    className="hidden"
                    type="radio"
                    name="color"
                    id={item.id}
                  />
                </div>
              ))}
            </div>
            <h3 className="my-3  text-md text-gray-900 font-[600]">SIZE :</h3>
            <div className="flex my-3">
              {sizes.map((item) => (
                <div key={item.id} className="mr-3">
                  <label className="cursor-pointer size" htmlFor={item.option}>
                    <div className="w-9 h-9 leading-9 text-center border border-gray-600">
                      {item.option}
                    </div>
                  </label>

                  <input className="hidden" type="radio" name="size" id={item.option} />
                </div>
              ))}
            </div>
          </form>
          <div className="mt-10">
            <img
              src="https://image.useinsider.com/routine/defaultImageLibrary/705x100-12-1661097081.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
