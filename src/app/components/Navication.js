"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navication() {
  const menulist = [
    { id: 1, title: "Features", link: "/features" },
    { id: 3, title: "How it work", link: "/howitwork" },
    { id: 4, title: "Pricing", link: "/pricing" },
    { id: 5, title: "Dashboard", link: "/dashboard" },
    { id: 6, title: "Support Videos", link: "/support" },
  ];

  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    window.location.href = "/";
  };

  // 🔥 handle Dashboard click
  const handleMenuClick = (e, link) => {
    if (link === "/dashboard" && !isLoggedIn) {
      e.preventDefault();
      document.getElementById("openLoginModalBtn")?.click();
      return;
    }
  };

  return (
    <>
      {/* 🔥 Hidden modal trigger button */}
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
                loading="lazy"
                src="/logo-dark.svg"
                alt="logos"
              />
            </Link>

            <div
              className="collapse justify-content-center navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {menulist.map((type) => (
                  <li className="nav-item" key={type.id}>
                    <Link
                      className={`nav-link ${
                        pathname === type.link ? "active" : ""
                      }`}
                      href={type.link}
                      onClick={(e) => handleMenuClick(e, type.link)}
                    >
                      {type.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rights-sections ms-auto d-table">
              <ul className="m-0 p-0">
                <li className="d-flex align-items-center">
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


                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navication;
