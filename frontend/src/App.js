import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createPost" element={<CreatePost />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;
