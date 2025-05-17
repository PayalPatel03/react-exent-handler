import React, { useState } from "react";
import "./App.css";

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="farm-container">
      <header className="bg-success farm-header">
        <div className="logo">
          <i className="fa-solid fa-lemon" style={{ color: "#23d759" }}></i>{" "}
          GreenFarm
        </div>{" "}
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>



      <section id="home" className="farm-hero">
        <h1
          className={`farm-title ${hovered ? "hovered" : ""}`}
           onClick={() => alert("Thanks for visiting GreenFarm!")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? "Eat Fresh. Live Healthy." : "Welcome to GreenFarm"}
        </h1>
        <p className="farm-subtitle">Organic. Sustainable. Local.</p>
        <button className="farm-btn">Explore Our Farm</button>
      </section>
  

     <section id="products" class="farm-products">
    <h2>Our Fresh Products</h2>
    <div class="product-grid">

      <div class="card-container">
        <div class="card">
          <img src="https://cdn.pixabay.com/photo/2013/01/05/13/56/real-spinach-73911_1280.jpg" class="card-img-top" alt="Spinach" />
          <div class="card-body">
            <h5 class="card-title">Spinach</h5>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div class="card">
          <img src="https://cdn.pixabay.com/photo/2016/08/03/01/09/carrot-1565597_1280.jpg" class="card-img-top" alt="Carrot" />
          <div class="card-body">
            <h5 class="card-title">Carrots</h5>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div class="card">
          <img src="https://cdn.pixabay.com/photo/2019/03/18/07/25/beefsteak-tomato-4062505_1280.jpg" class="card-img-top" alt="Tomato" />
          <div class="card-body">
            <h5 class="card-title">Tomato</h5>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div class="card">
          <img src="https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_1280.jpg" class="card-img-top" alt="Potato" />
          <div class="card-body">
            <h5 class="card-title">Potato</h5>
          </div>
        </div>
      </div>

   

      <div class="card-container">
        <div class="card">
          <img src="https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_1280.jpg" class="card-img-top" alt="Apple" />
          <div class="card-body">
            <h5 class="card-title">Apple</h5>
          </div>
        </div>
      </div>

    </div>
  </section>
  <input
  type="text"
  className="text-white w-25 bg-dark"
  placeholder="Feedback"
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      alert("Submitted!");
    }
  }}
/>
    </div>
  );
}

export default App;
