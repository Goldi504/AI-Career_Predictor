import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import ResumeAnalysis from "../pages/ResumeAnalysis/ResumeAnalysis";
import CareerPrediction from "../pages/CareerPrediction/CareerPrediction";
import SkillGap from "../pages/SkillGap/SkillGap";
import Roadmap from "../pages/Roadmap/Roadmap";
import Progress from "../pages/Progress/Progress";
import Streak from "../pages/Streak/Streak";
import Trends from "../pages/Trends/Trends";
import Chat from "../pages/Chat";






function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
      path="/resume-analysis"
      element={<ResumeAnalysis />}
      />

      <Route
       path="/career-prediction"
       element={<CareerPrediction />}
      />
      
      <Route
      path="/skill-gap"
      element={<SkillGap />}
      />

      <Route
      path="/roadmap"
      element={<Roadmap />}
      />

      <Route
      path="/progress"
      element={<Progress />}
      />

      <Route
      path="/streak"
      element={<Streak />}
      />

      <Route
      path="/trends"
      element={<Trends />}
      />

            <Route path="/chat" element={<Chat />} />


    </Routes>
  );
}

export default AppRoutes;