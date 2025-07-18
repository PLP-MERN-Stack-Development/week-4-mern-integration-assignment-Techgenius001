import React, { createContext, useState, useEffect } from "react";
import { authService } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());

  useEffect(() => {
    setUser(authService.getCurrentUser());
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const register = async (userData) => {
    return await authService.register(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
