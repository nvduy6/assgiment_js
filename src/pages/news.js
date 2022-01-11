import NewList from "../comporents/nexlist";
const NewsPage = {
    reder() {
        return `
        <h1>News</h1>
        ${NewList.render()}
        `
    }
}
export default NewsPage;