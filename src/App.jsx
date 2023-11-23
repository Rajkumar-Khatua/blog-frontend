import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import SingleBlogPost from "./pages/singleblogpost";
import FeaturedArticlesPage from "./pages/FeaturedArticalesPage";
import TrendingArticlesPage from "./pages/TreandingArticles";
import RecentPostsPage from "./pages/RecentPosts";
import BlogsPage from "./pages/Blogs";
import NotFoundPage from "./pages/NotFoundPage";
import ServerErrorPage from "./pages/ServerError";
import UnauthorizedPage from "./pages/UnAuthorized";
import BadRequestPage from "./pages/BadRequest";
import ForbiddenPage from "./pages/ForbidenPage";
import CreatePostPage from "./pages/AddNewPOst";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    // Check if the current route is login or register
    const isLoginOrRegister =
      location.pathname.includes("login") ||
      location.pathname.includes("register");

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          {!isLoginOrRegister && <Navbar />}
          <Outlet />
          {!isLoginOrRegister && <Footer />}
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "profile", element: <Profile /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "/featured", element: <FeaturedArticlesPage /> },
        { path: "/treading", element: <TrendingArticlesPage /> },
        { path: "/recent", element: <RecentPostsPage /> },
        { path: "blog/:id", element: <SingleBlogPost /> },
        { path: "/blogs", element: <BlogsPage /> },
        {path:"/createblog",element:<CreatePostPage/>},
        { path: "*", element: <NotFoundPage /> },
        { path: "404", element: <NotFoundPage /> },
        { path: "500", element: <ServerErrorPage /> },
        { path: "403", element: <ForbiddenPage /> },
        { path: "401", element: <UnauthorizedPage /> },
        { path: "400", element: <BadRequestPage /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
