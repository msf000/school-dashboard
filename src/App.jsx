import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SystemAdminDashboard from './pages/SystemAdminDashboard';
import SchoolAdminDashboard from './pages/SchoolAdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import EvaluatorDashboard from './pages/EvaluatorDashboard';
import SchoolsPage from './pages/SchoolsPage';
import TeachersPage from './pages/TeachersPage';
import ImportTeachersPage from './pages/ImportTeachersPage';
import ImportResultsPage from './pages/ImportResultsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import TransferRequestsPage from './pages/TransferRequestsPage';
import ObjectionsPage from './pages/ObjectionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/system-admin" element={<SystemAdminDashboard />} />
        <Route path="/" element={<SchoolAdminDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/evaluator-dashboard" element={<EvaluatorDashboard />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/import-teachers" element={<ImportTeachersPage />} />
        <Route path="/import-results" element={<ImportResultsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/transfers" element={<TransferRequestsPage />} />
        <Route path="/objections" element={<ObjectionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;