import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";

import ProtectedRoute from "./ProtectedRoute";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PostPage from "./pages/posts/PostPage";
import PostFormPage from "./pages/posts/PostFormPage";
import UsersOnlinePage from "./pages/users/UsersOnlinePage";
import ChatGrupalPage from "./pages/users/ChatGrupalPage";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/chat" element={<ChatGrupalPage />} />
              <Route path="/post/:postId" element={<PostPage />} />
              <Route path="/post/new" element={<PostFormPage />} />
              <Route path="/users" element={<UsersOnlinePage />} />    
      
            </Route>
            
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
