import MovieList from "./movieList.js"
import Pager from "./pager.js"
const template = `
    <div>
        <p>这是一个App</p>
        <MovieList />
        <Pager /> 
    </div>
`;
export default{
    template,
    components : {
        MovieList,
        Pager
    }
}