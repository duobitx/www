import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Training from './pages/Training';
import PostgresTraining from './pages/training/PostgresTraining';
import SecurityTraining from './pages/training/SecurityTraining';
import CloudInfrastructure from './pages/services/CloudInfrastructure';
import SecuritySolutions from './pages/services/SecuritySolutions';
import AiMachineLearning from './pages/services/AiMachineLearning';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import SystemArchitecture from './pages/services/SystemArchitecture';
import DevOpsAutomation from './pages/services/DevOpsAutomation';
import TeamPage from './pages/TeamPage';
import TeamMember from './pages/team/TeamMember';
import FractionalCto from './pages/services/FractionalCto';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/:memberId" element={<TeamMember />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/training" element={<Training />} />
              <Route path="/training/postgres" element={<PostgresTraining />} />
              <Route path="/training/security" element={<SecurityTraining />} />
              <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/services/security-solutions" element={<SecuritySolutions />} />
              <Route path="/services/ai-machine-learning" element={<AiMachineLearning />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/system-architecture" element={<SystemArchitecture />} />
              <Route path="/services/devops-automation" element={<DevOpsAutomation />} />
              <Route path="/services/fractional-cto" element={<FractionalCto />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
