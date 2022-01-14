import Banner from "../comporents/banner";
import Footer from "../comporents/footer";
import Header from "../comporents/header";
import NewsList from "../comporents/nexlist";
const HomePage = {
    render() {
        return /* html */ ` 
        ${Header.render()}
        <div class=" mt-1">
          ${Banner.render()}
        </div>

            <div class="home_block">
                <h3 class="my-3 text-cyan-900 text-xl font-medium ">
                        <a href="">TIN TỨC SINH VIÊN</a>
                    </h3>
                    <div class="grid grid-clo-3 grid-flow-col gap-3">
                    ${NewsList.render()}
                    </div>
            </div>
            
            <div class="home_block">
                <h3 class="my-3 text-cyan-900 text-xl font-medium ">
                        <a href="">HOẠT ĐỘNG SINH VIÊN</a>
                    </h3>
                    <div class="grid grid-clo-3 grid-flow-col gap-3">
                    ${NewsList.render()}
                    </div>
            </div>
           ${Footer.render()}
        
        `
    }
};
export default HomePage;