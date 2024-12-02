import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/login';
import Signup from '@/pages/signup';
import { DashboardPage } from '@/pages/dashboard'; // named import
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
            path="/dashboard"
            element={
                <ProtectedRoute>
                    <DashboardPage />
                </ProtectedRoute>
            }
        />
    </Routes>
);

export default AppRoutes;
