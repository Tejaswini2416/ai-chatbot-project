export default function Navbar({ toggleTheme }) {
  return (
    <div className="navbar">
      <h3>AI Chat</h3>

      <div className="nav-actions">
        <input placeholder="Search..." />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button className="create-btn">+ Create Task</button>
      </div>
    </div>
  );
}