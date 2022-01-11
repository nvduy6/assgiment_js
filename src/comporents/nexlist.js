import data from "../data";
const NewList = {
        render() {
            return /*html*/ `
                ${
                    data.map((post)=> `
                <div class="w-41 border-2">
                    <div class="m-auto w-11/12 ">
                        <a href="/news/${post.id}">
                            <img class="pt-2" src="${post.img}" alt="">
                        </a>
                        <h3 class="text-lg text-red-600 font-medium mt-2">
                            <a href="/news/${post.id}">${post.title}</a>
                        </h3>
                        <p class="mt-2 mb-2 text-lg text-cyan-900 ">
                        ${post.desc}
                        </p>
                    </div>
                </div>
                `).join("")}
                </div>
         `;
     },
 };
 export default NewList;