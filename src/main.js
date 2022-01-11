import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./comporents/header";
import Footer from "./comporents/footer";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();

};
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    }

});
router.resolve();