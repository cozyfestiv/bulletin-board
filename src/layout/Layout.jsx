import React from "react";
import { Outlet, useNavigation } from "react-router";
import { Link, ScrollRestoration } from "react-router-dom";

function Layout() {
  const { state } = useNavigation();

  return (
    <>
      <nav className="top-nav main-wrapper">
        <div className="nav-logo">CKG BULLETIN BOARD</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default Layout;
