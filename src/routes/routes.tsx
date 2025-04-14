import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import PostList from '../pages/PostList'
import PostPage from '../pages/PostPage'
import NotFound from '../pages/NotFound'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:slug" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
