import { Bell, Search } from "lucide-react";

function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-left">
                <div className="search-box">
                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="navbar-right">

                <button
                    type="button"
                    className="notification-button"
                    aria-label="Notifications"
                >
                    <Bell size={20} />
                    <span className="notification-dot"></span>
                </button>

                <div className="user-profile">
                    <div className="user-avatar">
                        A
                    </div>

                    <div className="user-info">
                        <strong>Admin</strong>
                        <span>Administrator</span>
                    </div>
                </div>

            </div>

        </header>
    );
}

export default Navbar;
