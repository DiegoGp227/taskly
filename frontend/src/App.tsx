import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.tsx";
import SingUpPage from "./pages/SignUp/index.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import TaskPage from "./pages/Tasks/TasksPage.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import "./style/style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingUpPage />}  />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
