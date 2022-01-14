import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Login from "./pages/login";
import Sign from "./pages/sign";
import Dashboard from "./pages/admin/dashboard";
import ListNews from "./pages/admin/new";
import AddNews from "./pages/admin/addnew";
import EditNews from "./pages/admin/editnew";
import DetailNewsPage from "./pages/detailNews";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
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
    "/admin/dashoad": () => {
        print(Dashboard.render());
    },
    "/admin/NewList": () => {
        print(ListNews.render())
    },
    "/admin/AddNews": () => {
        print(AddNews.render())
    },
    "/admin/New/:id/edit": ({ data }) => {

        print(EditNews.render(data.id));
    },


});
router.resolve();