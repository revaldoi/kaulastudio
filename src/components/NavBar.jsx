import React from 'react';
import NavLink from './NavLink';
import { createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="border-b border-white/10 py-3">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <a href="/" className="text-white font-medium uppercase mr-6">KAULA STUDIO</a>
              <NavLink href="/booking">Booking</NavLink>
            </div>
            <div className="flex items-center gap-x-2">
              <a href="#" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg">Sign in</a>
              <a href="#" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg">Sign up</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}