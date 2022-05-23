import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="image"
        />
        <div className="home__row">
          <Product
            title="OUT! PetCare Go Here Attractant Indoor and Outdoor Dog Training Spray"
            price={9.99}
            image="https://m.media-amazon.com/images/I/613dD-CaVsL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            image="data:image/jpeg;base64,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"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="SENZER SG500 Surround Sound Pro Gaming Headset with Noise Cancelling Microphone"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71EHw68EScL._AC_SY450_.jpg"
            rating={5}
          />
          <Product
            title="Mighty Patch Original from Hero Cosmetics - Hydrocolloid Acne Pimple Patch"
            price={2.99}
            image="https://m.media-amazon.com/images/I/41O3SOVUBJL._SY355_.jpg"
            rating={2}
          />
          <Product
            title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin"
            price={40.99}
            image="https://m.media-amazon.com/images/I/61S7BrCBj7L._SY355_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Pokémon Legends: Arceus - Nintendo Switch"
            price={51.99}
            image="https://m.media-amazon.com/images/I/71HYKF4rO9L._SY445_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
