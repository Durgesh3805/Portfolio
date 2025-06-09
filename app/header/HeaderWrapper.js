'use client'; // ✅ this must be the first line

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function HeaderWrapper() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <>
      <Header onHamburgerClick={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar visible={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
