const renderMenu = (target) => {
  document.title = 'Menu';
  target.innerHTML = `
    <div class="row row-menu">
      <div class="col-12">Our menu</div>
      <div class="container container-menu">
        <div class="row row-weekly-specials">
          <div class="col-12 category-title">
              Weekly Specials
              <img src="../src/assets/icons/icon-weekly-specials.svg" alt="Specials Icon">
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Every day except for today</div>
              <div class="col-lg-2 col-item-price">$5</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Something completely amazing that you love
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Today</div>
              <div class="col-lg-2 col-item-price">$0.05 off</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Something completely horrifying, like a shepherd's pie in the middle of July
              </div>
              <div class="col-lg-2 col-item-price-description">
                Also sold out
              </div>
            </div>
          </div>
        </div>
        <div class="row row-brunch">
          <div class="col-12 category-title">
              Brunch
              <img src="../src/assets/icons/icon-brunch.svg" alt="Specials Icon">
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Something that you could've make at home</div>
              <div class="col-lg-2 col-item-price">$15 more</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                But with a really, really nice egg
              </div>
              <div class="col-lg-2 col-item-price-description">
                Than buying the same groceries at Fairways
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Craft-cold-brewed-oyster-nitro bene-wich</div>
              <div class="col-lg-2 col-item-price">€19</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                One of the ingredients is from sooke
              </div>
              <div class="col-lg-2 col-item-price-description">
                Vegan, but also somehow not vegeterian
              </div>
            </div>
          </div>
        </div>
        <div class="row row-starters">
          <div class="col-12 category-title">
              Starters
              <img src="../src/assets/icons/icon-starters.svg" alt="Specials Icon">
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">The most interesting thing in the menu</div>
              <div class="col-lg-2 col-item-price">$10</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                But ordering one isn't enough for a full meal, and ordering two makes you feel incredibly anxious
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Chickpea avocado soup toast</div>
              <div class="col-lg-2 col-item-price">$2</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                What the fuck is a za'atar
              </div>
              <div class="col-lg-2 col-item-price-description">
                No one has ever ordered this
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Wings</div>
              <div class="col-lg-2 col-item-price">$10000</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description"></div>
              <div class="col-lg-2 col-item-price-description">
                $2 on Tuesdays between 2:30 and 3:17
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Sooke micro greens</div>
              <div class="col-lg-2 col-item-price">$8</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                With seeds!
              </div>
              <div class="col-lg-2 col-item-price-description">
                We paid more for parking and you're just gonna eat a salad!?
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Meat & cheese plate</div>
              <div class="col-lg-2 col-item-price">$24</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                The server will explain in excruciating detail what every item on the plate is, but you will immediately forget what they said after they leave
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Gourmet version of something street-foody</div>
              <div class="col-lg-2 col-item-price">$2x</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description"></div>
              <div class="col-lg-2 col-item-price-description">
                What you'd pay at a food truck
              </div>
            </div>
          </div>
        </div>
        <div class="row row-mains">
          <div class="col-12 category-title">
              Mains
              <img src="../src/assets/icons/icon-mains.svg" alt="Specials Icon">
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">A whole live trout</div>
              <div class="col-lg-2 col-item-price">$69</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Figure out buddy
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">A slab of beef I mean a 30 day-aged rib-eye steak</div>
              <div class="col-lg-2 col-item-price">42.3/4^2¥</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description"></div>
              <div class="col-lg-2 col-item-price-description">
                Why is steak always a weird price???
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Chicken strips</div>
              <div class="col-lg-2 col-item-price">$sold out</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Hell yes you're drunk as fuck and all you want is some goddamn chicken strips
              </div>
              <div class="col-lg-2 col-item-price-description">
                Goddamnit!!!
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Confit moules pâté croquettes avec béarnaise chiffonade pomme fondant canard à l'oignon gratinée</div>
              <div class="col-lg-2 col-item-price">market price</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Again, it's from sooke for some reason
              </div>
              <div class="col-lg-2 col-item-price-description">
                And after you ask, it's way too expensive
              </div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">A Korean dish that has nothing to do with the rest of the menu</div>
              <div class="col-lg-2 col-item-price">$15</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                It's amazing and we have no idea what it is
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">The burger you're just going to end up ordering because everything else is too expensive or weird</div>
              <div class="col-lg-2 col-item-price">$19</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description"></div>
              <div class="col-lg-2 col-item-price-description">
                $19?? we coulda just gone to big wheel or fatburger or bin 4 or chicks or white spot or fucking burger king
              </div>
            </div>
          </div>
        </div>
        <div class="row row-desserts">
          <div class="col-12 category-title">
              Desserts
              <img src="../src/assets/icons/icon-desserts.svg" alt="Specials Icon">
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">No thanks</div>
              <div class="col-lg-2 col-item-price">$5</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Just the bill please
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
        </div>
        <div class="row row-drinks">
          <div class="col-12 category-title">
              Drinks
              <img src="../src/assets/icons/icon-drinks.svg" alt="Specials Icon">
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">A glass of your third cheapest red</div>
              <div class="col-lg-2 col-item-price">$10</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description"></div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">What's on tap?</div>
              <div class="col-lg-2 col-item-price">$6.66</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                I'll just have a blue buck
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
          <div class="container container-item">
            <div class="row">
              <div class="col-lg-10 col-item-title">Something you saw on Instagram</div>
              <div class="col-lg-2 col-item-price">$4.20</div>
            </div>
            <div class="row">
              <div class="col-lg-10 col-item-description">
                Doesn't taste as good as it looks
              </div>
              <div class="col-lg-2 col-item-price-description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default renderMenu;
