const Footer = () => {
  return (
    <footer>
      <div className="px-5">
        <div className="grid-cols-8 grid gap-7 py-8 border-t-[1px] border-[#888]">
          <div className="col-span-3">
            <h2 className="uppercase text-lg font-[600]">
              THAm GIA BẢNG TIN CỦA CHÚNG TÔI
            </h2>
            <form
              action=""
              className="flex px-2 my-4  justify-between border-b-[2px] border-[#888]"
            >
              <input
                type="text"
                className="w-fulltext-md placeholder:text-gray-500 py-2   focus:outline-none"
                placeholder="Nhập email của bạn"
              />
              <button>
                <i className="fa-solid text-xl text-gray-700 fa-envelope"></i>
              </button>
            </form>
            <p className="text-[14px]">
              CÔNG TY TNHH ROUTINE VIETNAM | Mã Số Thuế: 0106486365 | Văn Phòng:
              Tầng 5 Tòa Nhà IMC,
            </p>
            <span className="block text-[14px] my-3">
              62 Trần Quang Khải, Phường Tân Định, Quận 1, Tp.HCM
            </span>
            <ul className="flex my-3">
              <li className="uppercase text-sm mr-3">Facebook</li>
              <li className="uppercase text-sm ">INSTAGRAM</li>
            </ul>
            <img
              className="w-[150px]"
              src="https://routine.vn/media/wysiwyg/dang-ky-website-thuong-mai-dien-tu-1024x388-1024x388.png"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <h3 className="font-[600]">CÔNG TY</h3>
            <ul className="mt-4">
              <li className="text-[14px] mb-2 font-normal">Giới thiệu</li>
              <li className="text-[14px] mb-2 font-normal">Tuyển dụng</li>
              <li className="text-[14px] mb-2 font-normal">Tin tức</li>
              <li className="text-[14px] mb-2 font-normal">
                Chăm sóc khách hàng
              </li>
              <li className="text-[14px] mb-2 font-normal">
                Hợp tác nhượng quyền
              </li>
              <li className="text-[13px] mb-2 font-normal">Liên hệ</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-[600]">CHÍNH SÁCH KHÁCH HÀNG</h3>
            <ul className="mt-4">
              <li className="text-[14px] mb-2 font-normal">
                Chính sách khách hàng thân thiết
              </li>
              <li className="text-[14px] mb-2 font-normal">
                Chính sách đổi & trả hàng
              </li>
              <li className="text-[14px] mb-2 font-normal">
                Chính sách bảo hành
              </li>
              <li className="text-[14px] mb-2 font-normal">
                Chính sách bảo mật
              </li>
              <li className="text-[14px] mb-2 font-normal">
                Các câu hỏi thường gặp
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-[600]">THÔNG TIN CỬA HÀNG</h3>
            <h4 className="mt-4 text-sm">CỬA HÀNG THỨ 23</h4>
            <span className="text-[14px]">
              809 Giải Phóng, Phường Giáp Bát, Quận Hoàng Mai, TP Hà Nội
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
