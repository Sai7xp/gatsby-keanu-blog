import React from "react"
import Navbar from "react-bootstrap/Navbar"

export default function header() {
  return (
    <div>
      <Navbar bg="warning" variant="dark" fixed="top">
        <Navbar.Brand href="#test">
          <img
            alt=""
            src="https://toppng.com/uploads/preview/instagram-logo-free-png-png-images-instagram-icon-white-11563070164hbixjkn5zy.png"
            width="30"
            height="30"
            borderRadius="20px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Brand className="urike" href="/projects">
          Projects
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}
