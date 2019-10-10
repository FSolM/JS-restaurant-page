const renderContact = (target) => {
  document.title = 'Contact';
  target.innerHTML = `
    <div class="row row-contact">
      <div class="col-12">Contact us!</div>
      <div class="col-12">Please don't leave a bad review</div>
      <div class="container container-contact-info">
        <div class="row">
          <div class="col-lg-6 col-info-social">
            <div class="container">
              <div class="row">
                <div class="col-12">@accountthathasntbeenupdatedin2years</div>
                <div class="col-12">The 500 blocks of yates</div>
                <div class="col-12">
                  For more info visit:
                  <br>
                  <span class="link-dummy">http://myrestaurant.squarespace.wix</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-info-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3153.716697705701!2d-122.4031456!3d37.7732405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2b6ed49f55%3A0x19b6e8c7a9009254!2sMars%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2smx!4v1570720303147!5m2!1sen!2smx" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="">
          </div>
        </div>
      </div>
    </div>
  `;
};

export default renderContact;
