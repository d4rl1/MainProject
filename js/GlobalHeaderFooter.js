class GlobalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="logo">
            <a href="../pages/index.html">
                <img class="logo-img" src="../img/logo.png" alt="Company Logo">
                <p class="logo-name">RIP OFF GAMES</p>
            </a>
        </div>
        <div class="nav-outside-wrapper">
            <div class="wrapper">
                <div class="nav">
                    <ul>
                        <li><a href="../pages/index.html">Home</a></li>
                        <li><a href="../pages/shop.html">Shop</a></li>
                        <li><a href="../pages/about.html">About</a></li>
                        <li><a href="../pages/contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div> 
        `;
    }
}
class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
     <div class="footer">
        <div class="wrapper">
            <div class="footer-content">
                <div class="footer-logo">
                    <a href="../pages/index.html">
                        <img class="footer-logo-img" src="../img/logo.png" alt="Company Logo">
                    </a>
                </div>
                <div class="footer-contact">
                    <div class="footer-contact-info">
                        <!--All this contact info is not real-->
                        <p>RipOffGames@gmail.com</p>
                        <p>437 420 6969</p>
                        <p>28 Carlton Street, Toronto, Ontario, M5B 1L4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
customElements.define('global-header', GlobalHeader);
customElements.define('global-footer', GlobalFooter);