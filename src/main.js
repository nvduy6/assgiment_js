import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./comporents/header";
import Footer from "./comporents/footer";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import Login from "./pages/login";
import Sign from "./pages/sign";
// import NewList from "./comporents/nexlist";
import AddNews from "./admin/addnew";
import Menudashboad from "./comporents/menudashboad";
import Statistical from "./comporents/statistical";
import AdNewlist from "./admin/new";
import EditNew from "./admin/editnew";
import Dashboard from "./pages/dashboard";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();

};
const item = (layout) => {
    document.getElementById("ad").innerHTML = layout;
    document.getElementById("menudashboad").innerHTML = Menudashboad.render();
};
const dor = (container) => {
    document.getElementById("content").innerHTML = container;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/login": () => {
        print(Login.render());
    },
    "/sign": () => {
        print(Sign.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin": () => {
        item(Dashboard.render());
    },
    "/admin/home": () => {
        dor(Statistical.render());
    },
    "/admin/new": () => {
        dor(AdNewlist.render());
    },
    "/admin/new/add": () => {
        dor(AddNews.render());
    },
    "/admin/new/:id/edit/": () => {
        dor(EditNew.render());
    },


});
router.resolve();