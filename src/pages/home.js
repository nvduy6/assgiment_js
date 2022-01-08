import Banner from "../comporents/banner";
import Footer from "../comporents/footer";
import Logo from "../comporents/logo";
import MenuList from "../comporents/menu";
import NewsList from "../comporents/nexlist";
const HomePage = {
    print() {
        return `
        <div class="mt-1 py-2 bg-blue-900">
           ${Logo.print()}
        </div>
        <div class="h-12 bg-[#cb7801]">
            ${MenuList.print()}
        </div>
        <div class=" mt-1">
          ${Banner.print()}

        </div>

        <div class="content">
            <div class="home_block">
                ${NewsList.print()}
            </div>
        </div>

        <div class="content">
            <div class="home_block">
                ${NewsList.print()}
            </div>
        </div>

        <footer class="bg-blue-900 mt-2 mb-2 h-10">
        ${Footer.print()}
    </footer>
        `
    }
};
export default HomePage;