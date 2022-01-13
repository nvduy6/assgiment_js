// const menuList = ["Trang chủ", "Tuyển sinh", "Chương trình đào tạo", "Góc sinh viên", "Tuyển dụng"];

const Header = {
    render() {
        return /*html*/ `
        <div class="mt-1 py-2 bg-blue-900">
        <a href="">
            <img src="https://i.imgur.com/5EK1lFm.png" alt="" class="w-1/6 m-auto">
        </a>
    </div>
    <div class="h-12 bg-[#cb7801]">
        <nav class="flex justify-between">
            <ul class="leading-10" id="menu">
                <li class="inline font-medium py-1 px-1 text-white  hover:text-cyan-900"><a href="/">Trang chủ</a></li>
                <li class="inline font-medium py-1 px-1 text-white  hover:text-cyan-900"><a href="/about">Tuyển sinh</a></li>
                <li class="inline font-medium py-1 px-1 text-white  hover:text-cyan-900"><a href="/about">Chương trình đào tạo</a></li>
                <li class="inline font-medium py-1 px-1 text-white  hover:text-cyan-900"><a href="/about">Góc sinh viên</a></li>
                <li class="inline font-medium py-1 px-1 text-white  hover:text-cyan-900"><a href="">Tuyển dụng</a></li>
            </ul>
            <div class=" mt-2.5 ">
                <input class="search_item" type="text">
                <input class="bg-cyan-900 text-white w-20 font-medium" type="button" value="Tìm kiếm">
            </div>
            <div class="mt-2">
                 <li class="inline font-medium ml-2 mt-2  text-white  hover:text-cyan-900"><a href="/sign">Đăng ký</a></li>
                <li class="inline font-medium ml-1  text-white  hover:text-cyan-900"><a href="/login">Đăng nhập</a></li>
                <li class="inline font-medium ml-1 text-white  hover:text-cyan-900"><a href="/admin/dashboard">Admin</a></li>
            </div>
        </nav>
    </div>

        `
    }
}
export default Header;