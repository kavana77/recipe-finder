import {createBrowserRouter
    ,createRoutesFromElements, Route
} from "react-router-dom"
import Home from "./pages/home"
import RootLayout from "./layout/"
import RecipePage from "./pages/recipePage"
import BlogListPage from "./pages/blogListPage"
import BlogPostPage from "./pages/blogPostPage"
import ContactPage from "./pages/contactPage"
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="recipes" element={<RecipePage/>}/>
            <Route path="blog" element={<BlogListPage/>}/>
            <Route path="about" element={<BlogPostPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
        </Route>
    )
)