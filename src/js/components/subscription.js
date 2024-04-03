"use strict";

export default function Subscription() {
  return `
    <!-- Subscription -->
    <div class="form">
      <div class="container">
        <div class="form-detail flex-column flex-sm-row p-0 ps-sm-5 pe-sm-3">
          <div class="form-content col-12 col-sm-6 order-2 ">
            <div class="form-title">
              <h1 class="display-5 display-sm-5">Stay Updated!</h1>
              <p>Join 60,000+ product managers recieving monthly updates on :</p>
            </div>
  
            <div class="form-list">
              <div class="list-content">
                <span>
                  <img src="./assets/images/icon-list.svg" alt="list" />
                </span>
                <p>Product discovery and building what matters</p>
              </div>
  
              <div class="list-content">
                <span>
                  <img src="./assets/images/icon-list.svg" alt="list" />
                </span>
                <p>Measuring to ensure updates are a success</p>
              </div>
  
              <div class="list-content">
                <span>
                  <img src="./assets/images/icon-list.svg" alt="list" />
                </span>
                <p>And Much More!</p>
              </div>
            </div>
  
            <form class="form-sub">
              <p class="bold">Email Address</p>
              <span class="error-message bold">Valid email require</span>
              <div class="form-input">
                <input type="text" class="emailInput" placeholder="Email@company.com" />
                <button class="form-btn">Subscribe to monthly Newsletter</button>
              </div>
            </form>
          </div>
          <div class="form-image col-12 col-sm-6 order-1 order-sm-2">
            <div class="image-section">
              <img
                src="assets/images/illustration-sign-up-desktop.svg"
                alt="sign-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Subscription -->`;
}
