import Footer from "../comporents/footer";
import Header from "../comporents/header";
import data from "../data";
const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        ${Header.render()}
        <div class="grid grid-clo-2 grid-flow-col gap-2">
            <img class="mt-2" src="${result.img}" />
          <div >

             <h1 class="text-lg text-red-600 font-medium mt-2">${result.title}</h1>
              <p class="mt-2 mb-2 text-lg text-cyan-900 ">${result.desc}</p>

           </div>
        </div>
        ${Footer.render()}
        `
    }
};
export default DetailNewsPage;