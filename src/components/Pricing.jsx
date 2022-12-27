import React from "react";

import "./Pricing.css";

const plans = [
  {
    type: "Basic",
    price: 19,
  },
  {
    type: "Premium",
    price: 29,
  },
  {
    type: "Pro",
    price: 39,
  },
  {
    type: "Platinum",
    price: 49,
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="main-heading">
          <h2>Pricing</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <div className="plans">
          {plans.map((plan, id) => (
            <div className="plan" key={id}>
              <div className="head">
                <h3>{plan.type}</h3>
                <span coin="$">{plan.price}</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <a href="#pricing">Buy Now</a>
            </div>
          ))}
        </div>
        <p className="contact-text">Contact us if you have a special request</p>
        <a href="#contact" className="contact-link">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Pricing;
