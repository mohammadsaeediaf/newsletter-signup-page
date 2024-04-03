export default function Success() {
  return `
    <!-- Success -->

    <div class="success">
      <div class="container">
        <div class="success-icon">
          <img src="assets/images/icon-success.svg" alt="seccess" />
        </div>
        <div class="success-title">
          <h1>
            Thanks for <br />
            subscribing!
          </h1>
        </div>
        <div class="success-message">
          <p>
            A confirmation email has been send to <br />
            <span class="email bold">asd@gmail.com</span> Please open it and
            click <br />
            the button inside to confirm your Subscription
          </p>
        </div>
        <button class="success-btn">Dimiss message</button>
      </div>
    </div>
`;
}
