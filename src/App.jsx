
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import AppLayout from './components/AppLayouts';
import './index.css';
import CodeEditorPage from './components/CodeEditorPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/code-editor" element={<CodeEditorPage />} />
    </Routes>
  );
};

export default App;
