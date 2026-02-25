"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navication() {
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      const parsedUser = JSON.parse(userData);
      setIsLoggedIn(true);
      setRole(parsedUser.role); // ✅ get role from user object
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ✅ remove full user object
    setIsLoggedIn(false);
    setRole(null);
    window.location.href = "/";
  };

  const handleDashboardClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      document.getElementById("openLoginModalBtn")?.click();
      return;
    }

    e.preventDefault();

    if (role === "partner") {
      window.location.href = "/partnerdashboard"; // ✅ your correct route
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <button
        id="openLoginModalBtn"
        type="button"
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#loginmodal"
      ></button>

      <header className="float-start w-100 bg-white">
        <nav className="navbar navbar-expand-lg navbar-light w-100">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image
                width={188}
                height={46}
                src="/logo-dark.svg"
                alt="logo"
              />
            </Link>

            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <Link className="nav-link" href="/features">Features</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/howitwork">How it work</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/pricing">Pricing</Link>
                </li>

                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${
                      pathname.includes("dashboard") ? "active" : ""
                    }`}
                    onClick={handleDashboardClick}
                  >
                    Dashboard
                  </a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/support">
                    Support Videos
                  </Link>
                </li>

              </ul>
            </div>

            <div className="ms-auto">
              {isLoggedIn ? (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginmodal"
                    className="btn login-btn"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#registernmodal"
                    className="btn signup-btn"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

          </div>
        </nav>
      </header>
    </>
  );
}

export default Navication;