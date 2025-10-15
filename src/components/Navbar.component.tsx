import React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Login", href: "/about" },
  { label: "Search", href: "/projects" },
  { label: "Reserve", href: "/contact" },
];

function Navbar() {
  return (
    <nav
      style={{
        height: "100vh",
        width: "220px",
        background: "#222",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h2
        style={{
          paddingBottom: "4rem",
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#805227",
        }}
      >
        MyApp
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
        {navItems.map((item) => (
          <li key={item.href} style={{ marginBottom: "1.5rem" }}>
            <a
              href={item.href}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                display: "block",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#444")}
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
