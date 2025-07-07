import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/index.tsx";
import SingUpPage from "./pages/SignUp/index.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import TaskPage from "./pages/Tasks/TasksPage.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import "./style/style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tasks/:idTopic/:titleTopic" element={<TaskPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
