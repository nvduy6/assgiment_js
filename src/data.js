const menuList = ["Trang chủ", "Tuyển sinh", "Chương trình đào tạo", "Góc sinh viên", "Tuyển dụng"];
const menuElement = document.querySelector("#menu");
for (let i in menuList) {
    menuElement.innerHTML += `<li class="inline font-medium py-3 px-4 text-white  hover:text-cyan-900"><a href="">${menuList[i]}</a></li>`
}

// =============================================
const newList = [{
        id: 1,
        img: "https://daihoc.fpt.edu.vn/media/2022/01/Quan-1-e1641111201649-373x206.png",
        tile: "Vinh danh 295 sinh viên FPT Polytechinc học kỳ Sping 2018",
        description: "Tối ngày 16/06/2018 , Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh \"Ông vàng Poly\",Tuyên dương 295 cá nhan tập thể có thành tích xuất sác trong học tập cũng như hoạt"
    },
    {
        id: 1,
        img: "https://daihoc.fpt.edu.vn/media/2022/01/Nguye%CC%82%CC%83n-Tha%CC%80nh-Nguye%CC%82n-4-e1641113718750-373x206.png",
        tile: "Vinh danh 295 sinh viên FPT Polytechinc học kỳ Sping 2018",
        description: "Tối ngày 16/06/2018 , Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh \"Ông vàng Poly\",Tuyên dương 295 cá nhan tập thể có thành tích xuất sác trong học tập cũng như hoạt"
    },
    {
        id: 1,
        img: "https://daihoc.fpt.edu.vn/media/2022/01/3-1-e1641100643797-373x206.jpeg",
        tile: "Vinh danh 295 sinh viên FPT Polytechinc học kỳ Sping 2018",
        description: "Tối ngày 16/06/2018 , Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh \"Ông vàng Poly\",Tuyên dương 295 cá nhan tập thể có thành tích xuất sác trong học tập cũng như hoạt"
    },
]
const newElement = document.querySelector("#home_block");

const newItem = () => {
    const reslut = newList
        .map(
            (item) =>
            `
            <div class="w-41 border-2">
                        <div class="m-auto w-11/12 ">
                            <a href="">
                                <img class="pt-2" src="${item.img}" alt="">
                            </a>
                            <h3 class="text-lg text-red-600 font-medium mt-2">
                                <a href="">${item.tile}</a>
                            </h3>
                            <p class="mt-2 mb-2 text-lg text-cyan-900 ">
                               ${item.description}
                            </p>
                        </div>
                    </div>
        `
        )
        .join("");
    if (newElement) {
        newElement.innerHTML = reslut;
    }
}
newItem();