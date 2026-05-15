class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="background: #0f172a; color: white; padding: 60px 0 30px;">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
            <div>
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; color: #50C878;">YIGH</h3>
              <p style="color: #94a3b8; line-height: 1.6;">Empowering Africa's youth to lead the green hydrogen revolution through awareness, innovation, and collaboration.</p>
            </div>
            <div>
              <h4 style="font-weight: bold; margin-bottom: 20px;">Quick Links</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><a href="#about" style="color: #94a3b8; text-decoration: none;">About</a></li>
                <li style="margin-bottom: 10px;"><a href="#focus" style="color: #94a3b8; text-decoration: none;">Focus Areas</a></li>
                <li style="margin-bottom: 10px;"><a href="#events" style="color: #94a3b8; text-decoration: none;">Events</a></li>
                <li style="margin-bottom: 10px;"><a href="#team" style="color: #94a3b8; text-decoration: none;">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 style="font-weight: bold; margin-bottom: 20px;">Connect</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><a href="mailto:info@yigh.org" style="color: #94a3b8; text-decoration: none;">info@yigh.org</a></li>
                <li style="margin-bottom: 10px;"><a href="tel:+254703697928" style="color: #94a3b8; text-decoration: none;">+254 703 697 928</a></li>
              </ul>
            </div>
          </div>
          <div style="border-top: 1px solid #1e293b; padding-top: 30px; text-align: center; color: #64748b;">
            <p>&copy; ${new Date().getFullYear()} Youth Initiative for Green Hydrogen (YIGH). All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);