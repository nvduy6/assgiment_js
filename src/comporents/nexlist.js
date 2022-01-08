import data from "../data";
const NewList = {
        print() {
            return `
         <h3 class="my-3 text-cyan-900 text-xl font-medium ">
                    <a href="">TIN TỨC SINH VIÊN</a>
                </h3>
                <div class="grid grid-clo-3 grid-flow-col gap-3">
                ${
                    data.map((post)=> `
                <div class="w-41 border-2">
                    <div class="m-auto w-11/12 ">
                        <a href="">
                            <img class="pt-2" src="${post.img}" alt="">
                        </a>
                        <h3 class="text-lg text-red-600 font-medium mt-2">
                            <a href="">${post.tile}</a>
                        </h3>
                        <p class="mt-2 mb-2 text-lg text-cyan-900 ">
                        ${post.description}
                        </p>
                    </div>
                </div>
                `).join("")}
                </div>
         `;
     },
 };
 export default NewList;