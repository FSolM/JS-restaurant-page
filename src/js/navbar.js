const injectNavbar = (target) => {
  target.innerHTML = `
  <div class="container container-nav">
    <div class="row">
      <div class="col-3">
        <img src="#" alt="myRestaurant Logo">
      </div>
      <div class="col-9">
        <input type="radio" id="tab-home" name="tab-control" checked>
        <input type="radio" id="tab-menu" name="tab-control">
        <input type="radio" id="tab-contact" name="tab-control">
        <ul>
          <li title="nav-tab-home">
            <label for="tab-home" role="button">
              <img src="../src/assets/icons/icon-nav-home.svg" alt="Home Icon">
              <br>
              <span>Home</span>
            </label>
          </li>
          <li title="nav-tab-menu">
            <label for="tab-menu" role="button">
              <img src="../src/assets/icons/icon-nav-menu.svg" alt="Menu Icon">
              <br>
              <span>Menu</span>
            </label>
          </li>
          <li title="nav-tab-contact">
            <label for="tab-contact" role="button">
              <img src="../src/assets/icons/icon-nav-contact.svg" alt="Contact Icon">
              <br>
              <span>Contact</span>
            </label>
          </li>
        </ul>  
        <div class="slider">
          <div class="indicator"></div>
        </div>
        <div class="content">
          <section><h2>Features</h2></section>
          <section><h2>Delivery Contents</h2></section>
          <section><h2>Shipping</h2></section>
        </div>
      </div>
    </div>
  </div>
  `;
};

export default injectNavbar;
