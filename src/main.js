import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
const router = new Navigo("/");
const render = (content) => {
    document.getElementById("app").innerHTML = content.print();

};
router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    }
});
router.resolve();