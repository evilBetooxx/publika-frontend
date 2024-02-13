import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.jsx";
import { PostProvider } from "./context/PostContext.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";

import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import PostPage from "./pages/posts/PostPage.jsx";
import PostFormPage from "./pages/posts/PostFormPage.jsx";
import UsersOnlinePage from "./pages/users/UsersOnlinePage.jsx";
import ChatGrupalPage from "./pages/users/ChatGrupalPage.jsx";

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
