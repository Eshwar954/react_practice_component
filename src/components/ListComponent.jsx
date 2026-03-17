import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const ListComponent = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div>
      <div className="list-group">

        <button
          type="button"
          className={`list-group-item list-group-item-action ${active === "Dashboard" ? "active" : ""}`}
          onClick={() => setActive("Dashboard")}
        >
          Dashboard
        </button>

        <button
          type="button"
          className={`list-group-item list-group-item-action ${active === "Profile" ? "active" : ""}`}
          onClick={() => setActive("Profile")}
        >
          Profile
        </button>

        <button
          type="button"
          className={`list-group-item list-group-item-action ${active === "Settings" ? "active" : ""}`}
          onClick={() => setActive("Settings")}
        >
          Settings
        </button>

        <button
          type="button"
          className={`list-group-item list-group-item-action ${active === "Analytics" ? "active" : ""}`}
          onClick={() => setActive("Analytics")}
        >
          Analytics
        </button>

        <button
          type="button"
          className="list-group-item list-group-item-action"
          disabled
        >
          Disabled Option
        </button>

      </div>

      <p className="mt-3">Selected: {active}</p>
    </div>
  )
}

export default ListComponent