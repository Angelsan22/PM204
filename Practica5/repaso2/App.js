import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import LibrosScreen from './screens/LibrosScreen';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000); // 2 segundos de splash

    return () => clearTimeout(timer);
  }, []);

  return mostrarSplash ? <SplashScreen /> : <LibrosScreen />;
}