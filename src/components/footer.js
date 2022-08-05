import React from "react";
import logo from "../images/logo.svg";

export default function Footer() {
  return (
    // <footer className="container mt-5">

    <footer class="row row-cols-6 py my-5 text-light">
      <div class="col">
        <div class="d-flex align-items-center mb-3 link-dark text-decoration-none">
          <img src={logo} alt="" />
        </div>
        <p class="text-muted">&copy; 2021</p>
      </div>

      <div class="col">
      <h5>Company</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">About Us</li>
          <li class="nav-item mb-2">Case Studies</li>
          <li class="nav-item mb-2">Download CV</li>
          <li class="nav-item mb-2">Contact Us</li>
        </ul>
      </div>

      <div class="col">
        <h5>Service</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col">
        <h5>Service</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">UX/UI</li>
          <li class="nav-item mb-2">Social Media</li>
          <li class="nav-item mb-2">Graphic Designer</li>
          <li class="nav-item mb-2">Photography</li>
          <li class="nav-item mb-2">Packaging</li>git
        </ul>
      </div>

      <div class="col">
        <h5>Experience</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Download CV</li>
          <li class="nav-item mb-2">Contact Me</li>
        </ul>
      </div>

      <div class="col">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">UX/UI</li>
          <li class="nav-item mb-2">Social Media</li>
          <li class="nav-item mb-2">Graphic Designer</li>
          <li class="nav-item mb-2">Photography</li>
          <li class="nav-item mb-2">Packaging</li>
        </ul>
      </div>
    </footer>
  );
}
