import { useState, useEffect } from "react";
import ProductMoreView from "../../component/client/products-slider.jsx";

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
  const [count, setCount] = useState(1);
  const [quantity , setQuantity] = useState();

  useEffect(() => {
    const elColor = document.getElementsByClassName("color");
    const elSize = document.getElementsByClassName("size");
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
        const size = elSize[i].children;
        size[0].style.backgroundColor = "#000";
        size[0].style.color = "#ffff";
        const arrNew = Object.values(elSize).filter(
          (item, index) => index !== i
        );
        for (let j = 0; j < arrNew.length; j++) {
          const sizeChildren = arrNew[j].children;
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
        <div className="col-span-3 bg-gray-100 h-[570px]">
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
              ??O JACKET TR??N. LOOSE - 10S21DJA004
            </h2>
            <p className="col-span-1 text-center text-2xl mt-2">
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
            <h3 className="font-bold text-gray-900">- ???? b??n: 168 s???n ph???m</h3>
          </div>
          <div className="">
            <span className="mr-4 text-3xl text-red-600">639.000 ???</span>
            <span className="text-2xl line-through">639.000 ???</span>
          </div>
          <h3 className="my-3 text-md text-gray-900 font-[600]">
            M?? H??NG H??A :<span className="font-[400]"> 10S21DJA004</span>
          </h3>

          <h3 className="my-3 text-md text-gray-900 font-[600]">M??U :</h3>
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
                  <div className="w-9 h-9 leading-9 text-center border border-gray-300">
                    {item.option}
                  </div>
                </label>
                <input
                  className="hidden"
                  type="radio"
                  name="size"
                  id={item.option}
                />
              </div>
            ))}
          </div>
          <button className="my-4 text-blue-700 font-bold underline underline-offset-1">
            H?????ng D???n Ch???n Size
          </button>
          <div className="flex">
            <div className="bg-gray-200 h-10 flex justify-between w-[150px] mr-3">
              <button
                onClick={() => setCount((pre) => (pre > 1 ? pre - 1 : 1))}
                className="w-10 h-10 lining-10 pt-1 "
              >
                <ion-icon name="remove-outline"></ion-icon>
              </button>
              <input
                min="1"
                value={count}
                 onChange={(e) =>  setQuantity(e.target.value)}
                className="bg-gray-200 font-bold text-md text-center h-10 focus:outline-none w-[70px]"
                type="text"
              />
              <button
                onClick={() => setCount((pre) => pre + 1)}
                className="w-10 lining-10  pt-1 h-10"
              >
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
            <button className="h-10 border border-black px-10">Th??m v??o gi??? h??ng</button>
          </div>

          <div className="mt-3">
            <img
              src="https://image.useinsider.com/routine/defaultImageLibrary/705x100-12-1661097081.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <ProductMoreView />
    </div>
  );
};

export default ProductDetail;
