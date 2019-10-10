const renderHome = (target) => {
  // document.head.appendChild
  target.innerHTML = `
    <div class="row row-home">
      <div class="col-md-6">
        <h3>myRestaurant</h3>
        <div class="container">
          <div class="row">
            <div class="col-12">This is myRestaurant, it's a real restaurant that actually exist, I swear it's not a scam! It's real, please don't look more into it...</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="container">
          <div class="deco-img"></div>
          <div class="deco-plain"></div>
        </div>
      </div>
    </div>
  `;
};

export default renderHome;
