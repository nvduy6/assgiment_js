const menuList = ["Trang chủ", "Tuyển sinh", "Chương trình đào tạo", "Góc sinh viên", "Tuyển dụng"];

const MenuList = {
        print() {
            return `
        <nav class="flex justify-between">
                <ul class="leading-10" id="menu">
                ${menuList.map((item) => `
               <li class="inline font-medium py-3 px-4 text-white  hover:text-cyan-900"><a href="">${item}</a></li>
               </ul>
                `
                    ).join("")
                }
    
                
                <div class=" mr-0.5 mt-2.5 mr-4">
                    <input class="search_item" type="text">
                    <input class="bg-cyan-900 text-white w-20 font-medium" type="button" value="Tìm kiếm">
                </div>
            </nav>
        `
    }
}
export default MenuList;