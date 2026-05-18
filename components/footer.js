class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="background: #0f172a; color: white; padding: 60px 0 30px;">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
            
            <!-- Brand Column -->
              <div>
                <!-- Logo + Title -->
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                  <!-- Logo Image -->
                  <img src="yigh.png" alt="YIGH Logo" style="width: 48px; height: 48px; border-radius: 12px;">
                  <h3 style="font-size: 1.5rem; font-weight: bold; color: #50C878; margin: 0;">YIGH</h3>
                </div>
                
                <p style="color: #94a3b8; line-height: 1.6;">Empowering Africa's youth to lead the green hydrogen revolution through awareness, innovation, and collaboration.</p>
              </div>
                          
            <!-- Quick Links Column -->
            <div>
              <h4 style="font-weight: bold; margin-bottom: 20px; color: white;">Quick Links</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><a href="#about" style="color: #94a3b8; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">About</a></li>
                <li style="margin-bottom: 10px;"><a href="https://youth-green-hub.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #94a3b8; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">Policy Hub</a></li>
                <li style="margin-bottom: 10px;"><a href="#events" style="color: #94a3b8; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">Events</a></li>
                <li style="margin-bottom: 10px;"><a href="#team" style="color: #94a3b8; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">Team</a></li>
                <li style="margin-bottom: 10px;"><a href="opportunities.html" style="color: #94a3b8; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">Opportunities</a></li>
              </ul>
            </div>
            
            <!-- Contact Column -->
            <div>
              <h4 style="font-weight: bold; margin-bottom: 20px; color: white;">Contact Us</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 12px;">
                  <a href="mailto:info@yigh.africa" style="color: #94a3b8; text-decoration: none; transition: color 0.3s; display: inline-flex; align-items: center; gap: 8px;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">
                    📧 info@yigh.africa
                  </a>
                </li>
                <li style="margin-bottom: 12px;">
                  <a href="tel:+254703697928" style="color: #94a3b8; text-decoration: none; transition: color 0.3s; display: inline-flex; align-items: center; gap: 8px;" onmouseover="this.style.color='#50C878'" onmouseout="this.style.color='#94a3b8'">
                    📞 +254 703 697 928
                  </a>
                </li>
                <li style="margin-bottom: 12px;">
                  <span style="color: #94a3b8; display: inline-flex; align-items: center; gap: 8px;">
                    📍 Nairobi, Kenya
                  </span>
                </li>
              </ul>
            </div>
            
            <!-- Social Media Column -->
            <div>
              <h4 style="font-weight: bold; margin-bottom: 20px; color: white;">Follow Us</h4>
              <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/company/youth-in-green-hydrogen-yigh/posts/?feedView=all" target="_blank" style="background: #1e293b; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #94a3b8;" onmouseover="this.style.backgroundColor='#0077b5'; this.style.color='white'; this.style.transform='translateY(-3px)'" onmouseout="this.style.backgroundColor='#1e293b'; this.style.color='#94a3b8'; this.style.transform='translateY(0)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.206 0 22.225 0z"/>
                  </svg>
                </a>
                
                <!-- Twitter/X -->
                <a href="https://twitter.com/yigh_africa" target="_blank" style="background: #1e293b; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #94a3b8;" onmouseover="this.style.backgroundColor='#000000'; this.style.color='white'; this.style.transform='translateY(-3px)'" onmouseout="this.style.backgroundColor='#1e293b'; this.style.color='#94a3b8'; this.style.transform='translateY(0)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <!-- Instagram -->
                <a href="https://www.instagram.com/yigh_africa" target="_blank" style="background: #1e293b; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #94a3b8;" onmouseover="this.style.background='radial-gradient(circle at 30% 110%, #ffdb8b, #ff6262, #d6249f, #285AEB)'; this.style.color='white'; this.style.transform='translateY(-3px)'" onmouseout="this.style.background='#1e293b'; this.style.color='#94a3b8'; this.style.transform='translateY(0)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                
                <!-- WhatsApp Group -->
                <a href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK" target="_blank" style="background: #1e293b; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #94a3b8;" onmouseover="this.style.backgroundColor='#25D366'; this.style.color='white'; this.style.transform='translateY(-3px)'" onmouseout="this.style.backgroundColor='#1e293b'; this.style.color='#94a3b8'; this.style.transform='translateY(0)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48C18.26 1.22 15.2 0 12 0S5.74 1.22 3.48 3.48C1.22 5.74 0 8.8 0 12c0 2.2.6 4.26 1.72 6.06L.03 23.2l5.36-1.37c1.74.97 3.74 1.52 5.81 1.52 3.2 0 6.26-1.22 8.52-3.48 2.26-2.26 3.48-5.32 3.48-8.52s-1.22-6.26-3.48-8.52zM12 22.3c-1.88 0-3.7-.5-5.28-1.44l-.38-.22-3.16.8.84-3.08-.24-.4C3.2 16.64 2.6 14.4 2.6 12c0-2.58 1-5.02 2.82-6.84C7.24 3.34 9.68 2.34 12 2.34s4.76 1 6.58 2.82c1.82 1.82 2.82 4.26 2.82 6.58s-1 4.76-2.82 6.58c-1.82 1.82-4.26 2.82-6.58 2.82zm3.48-4.66c-.18-.1-1.08-.54-1.24-.6-.16-.06-.28-.1-.4.1-.12.2-.46.6-.56.72-.1.12-.2.14-.38.04-.18-.1-.76-.28-1.44-.88-.52-.46-.88-1.02-.98-1.2-.1-.18-.02-.28.08-.38.1-.1.2-.26.3-.38.1-.12.14-.2.2-.34.06-.14.02-.26-.02-.36s-.4-1.08-.58-1.48c-.14-.36-.3-.32-.4-.34h-.34c-.12 0-.3.04-.46.22s-.6.6-.6 1.46c0 .86.62 1.68.72 1.8.1.12 1.2 1.8 2.86 2.52.4.16.72.26.96.34.4.12.78.1 1.06.06.32-.04 1.08-.44 1.24-.86.16-.42.16-.78.12-.86-.04-.08-.16-.14-.34-.22z"/>
                  </svg>
                </a>
                
                <!-- YouTube -->
                <a href="https://www.youtube.com/@yigh_africa" target="_blank" style="background: #1e293b; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #94a3b8;" onmouseover="this.style.backgroundColor='#FF0000'; this.style.color='white'; this.style.transform='translateY(-3px)'" onmouseout="this.style.backgroundColor='#1e293b'; this.style.color='#94a3b8'; this.style.transform='translateY(0)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                <!-- TikTok -->
                <a href="https://www.tiktok.com/@yigh_africa" target="_blank" style="background: #1e293b; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #94a3b8;" onmouseover="this.style.background='linear-gradient(135deg, #00f2ea, #ff0050)'; this.style.color='white'; this.style.transform='translateY(-3px)'" onmouseout="this.style.background='#1e293b'; this.style.color='#94a3b8'; this.style.transform='translateY(0)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.06v13.67a2.89 2.89 0 0 1-5.23 1.69 2.89 2.89 0 0 1 2.91-4.41 2.93 2.93 0 0 1 .96.18V9.79a6.1 6.1 0 0 0-1.12-.14 6.03 6.03 0 0 0-6.04 6.03c0 3.33 2.71 6.04 6.04 6.04 3.32 0 6.03-2.71 6.03-6.04V8.06a8.03 8.03 0 0 0 4.68 1.52V6.69a4.83 4.83 0 0 1-3.77-4.25z"/>
                  </svg>
                </a>
              </div>
              
              <!-- WhatsApp Group Text Link -->
              <div style="margin-top: 15px;">
                <a href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK" target="_blank" style="color: #50C878; text-decoration: none; font-size: 14px; transition: color 0.3s; display: inline-flex; align-items: center; gap: 5px;" onmouseover="this.style.color='#25D366'" onmouseout="this.style.color='#50C878'">
                  💬 Join our WhatsApp Community
                </a>
              </div>
            </div>
          </div>
          
          <!-- Copyright -->
          <div style="border-top: 1px solid #1e293b; padding-top: 30px; text-align: center; color: #64748b;">
            <p>&copy; ${new Date().getFullYear()} Youth Initiative for Green Hydrogen (YIGH). All rights reserved.</p>
            <p style="margin-top: 10px; font-size: 12px;">🌍 Building Africa's green hydrogen future, together.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);