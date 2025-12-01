import React, { useState } from "react";

type User = {
  username: string;
  email?: string;
  displayName?: string;
};

function Login(): React.ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake login — in real app you'd call an API
    if (!username.trim()) {
      setMessage("Please enter a username.");
      return;
    }
    setUser({ username, displayName: username, email: `${username}@example.com` });
    setIsLoggedIn(true);
    setMessage(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setUsername("");
    setPassword("");
  };

  const handleSettingsSave = (e: React.FormEvent) => {
    e.preventDefault();
    // fake save — in a real app you'd call an API and handle results/errors
    setMessage("Settings saved.");
    setTimeout(() => setMessage(null), 2000);
  };

  if (isLoggedIn && user) {
    return (
      <div className="container login-page">
        <div className="content-card login-card">
          <h2>Account Settings</h2>
          {message && <p aria-live="polite">{message}</p>}
          <form onSubmit={handleSettingsSave} className="settings-form">
            <div className="form-group">
              <label htmlFor="displayName">Display name:</label>
              <input
                id="displayName"
                className="login-input"
                value={user.displayName}
                onChange={(e) => setUser({ ...user, displayName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                className="login-input"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New password:</label>
              <input id="newPassword" type="password" className="login-input" />
            </div>
            <div className="settings-actions">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" onClick={handleLogout} className="btn" style={{ marginLeft: "1rem" }}>
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container login-page">
      <div className="content-card login-card">
        <h2>Login</h2>
        {message && <p className="login-message" aria-live="assertive">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="login-input"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="login-input"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="settings-actions">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
