import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./comporents/header";
import Footer from "./comporents/footer";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import Login from "./pages/login";
import Sign from "./pages/sign";
import Dashboard from "./comporents/dashboard";
import HomeDashboard from "./admin/home";
// import NewList from "./comporents/nexlist";
import AddNews from "./admin/addnew";
import EditNews from "./admin/editnew";
import NewListstudent from "./admin/new";
const router = new Navigo("/", { linksSelector: 'a' });
const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();

};

const AdminPrint = (page, id = '') => {
    const layout = `${Dashboard.render(id)} ${page.render()}`;
    document.getElementById("root").innerHTML = layout;
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
    "/admin/dashboard": () => {
        AdminPrint(HomeDashboard);
    },
    "/admin/news": () => {
        AdminPrint(NewListstudent);
    },
    "/admin/news/add": () => {
        AdminPrint(AddNews);
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        AdminPrint(EditNews.render(id));
    }

});
router.notFound((match) => {

    console.log("Not found", match);
});
router.resolve();