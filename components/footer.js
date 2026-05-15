class CustomFooter extends HTMLElement {
    connectedCallback() {

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>

            :host {
                display: block;
                font-family: 'Inter', sans-serif;
                color: white;
            }

            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
            }

            .footer {
                position: relative;
                overflow: hidden;
                background:
                    radial-gradient(circle at top left, rgba(34,211,238,0.10), transparent 35%),
                    radial-gradient(circle at bottom right, rgba(16,185,129,0.08), transparent 35%),
                    linear-gradient(to bottom, #020617, #0f172a);
                border-top: 1px solid rgba(34,211,238,0.12);
            }

            /* Glow Effects */
            .glow-1,
            .glow-2{
                position:absolute;
                border-radius:999px;
                filter: blur(90px);
                z-index:0;
            }

            .glow-1{
                width:300px;
                height:300px;
                background: rgba(34,211,238,0.12);
                top:-120px;
                left:-100px;
            }

            .glow-2{
                width:260px;
                height:260px;
                background: rgba(16,185,129,0.10);
                bottom:-100px;
                right:-80px;
            }

            .footer-inner{
                position:relative;
                z-index:2;
                max-width:1280px;
                margin:0 auto;
                padding:5rem 2rem 2rem;
            }

            /* TOP CTA */
            .footer-cta{
                margin-bottom:4rem;
                padding:2rem;
                border-radius:28px;
                border:1px solid rgba(34,211,238,0.12);
                background: linear-gradient(
                    135deg,
                    rgba(15,23,42,0.9),
                    rgba(15,23,42,0.65)
                );
                backdrop-filter: blur(12px);

                display:flex;
                justify-content:space-between;
                align-items:center;
                gap:2rem;
                flex-wrap:wrap;
            }

            .cta-content h2{
                font-size:2rem;
                line-height:1.2;
                margin-bottom:0.75rem;
                font-weight:800;
                letter-spacing:-0.03em;
            }

            .cta-content p{
                color:#94A3B8;
                max-width:600px;
                line-height:1.7;
            }

            .cta-btn{
                display:inline-flex;
                align-items:center;
                gap:0.75rem;
                padding:1rem 1.5rem;
                border-radius:999px;
                text-decoration:none;
                font-weight:700;
                color:#082f49;
                background:linear-gradient(
                    to right,
                    #22d3ee,
                    #14b8a6
                );
                transition:all 0.35s ease;
                box-shadow:0 10px 30px rgba(34,211,238,0.18);
            }

            .cta-btn:hover{
                transform:translateY(-3px);
                box-shadow:0 18px 45px rgba(34,211,238,0.30);
            }

            /* MAIN GRID */
            .footer-grid{
                display:grid;
                grid-template-columns:2fr 1fr 1fr 1fr;
                gap:3rem;
                padding-bottom:3rem;
                border-bottom:1px solid rgba(148,163,184,0.12);
            }

            /* BRAND */
            .brand{
                max-width:420px;
            }

            .footer-logo{
                display:flex;
                align-items:center;
                gap:0.85rem;
                margin-bottom:1.5rem;
                text-decoration:none;
                color:white;
            }

            .logo-icon{
                width:52px;
                height:52px;
                border-radius:18px;
                display:flex;
                align-items:center;
                justify-content:center;
                background:linear-gradient(
                    135deg,
                    rgba(34,211,238,0.18),
                    rgba(20,184,166,0.14)
                );
                border:1px solid rgba(34,211,238,0.18);
                color:#22d3ee;
            }

            .footer-logo span{
                font-size:1.7rem;
                font-weight:800;
                letter-spacing:-0.03em;
            }

            .footer-description{
                color:#94A3B8;
                line-height:1.9;
                margin-bottom:2rem;
            }

            /* SOCIALS */
            .social-links{
                display:flex;
                gap:1rem;
            }

            .social-link{
                width:44px;
                height:44px;
                border-radius:14px;
                display:flex;
                align-items:center;
                justify-content:center;
                background:rgba(15,23,42,0.75);
                border:1px solid rgba(148,163,184,0.10);
                color:#CBD5E1;
                transition:all 0.3s ease;
            }

            .social-link:hover{
                color:#22d3ee;
                border-color:rgba(34,211,238,0.25);
                transform:translateY(-4px);
                background:rgba(34,211,238,0.08);
            }

            /* LINKS */
            .footer-column h3{
                font-size:1rem;
                font-weight:700;
                margin-bottom:1.5rem;
                color:white;
                position:relative;
            }

            .footer-column h3::after{
                content:"";
                position:absolute;
                left:0;
                bottom:-0.55rem;
                width:38px;
                height:2px;
                border-radius:999px;
                background:linear-gradient(
                    to right,
                    #22d3ee,
                    #14b8a6
                );
            }

            .footer-links{
                display:flex;
                flex-direction:column;
                gap:1rem;
            }

            .footer-link{
                color:#94A3B8;
                text-decoration:none;
                transition:all 0.3s ease;
                display:inline-flex;
                align-items:center;
                gap:0.5rem;
                width:fit-content;
            }

            .footer-link:hover{
                color:#E2E8F0;
                transform:translateX(4px);
            }

            .footer-link svg{
                width:14px;
                height:14px;
                opacity:0;
                transition:0.3s;
            }

            .footer-link:hover svg{
                opacity:1;
            }

            /* BOTTOM */
            .footer-bottom{
                padding-top:2rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                gap:1rem;
                flex-wrap:wrap;
            }

            .copyright{
                color:#64748B;
                font-size:0.92rem;
            }

            .footer-bottom-links{
                display:flex;
                gap:1.5rem;
                flex-wrap:wrap;
            }

            .footer-bottom-links a{
                color:#64748B;
                text-decoration:none;
                font-size:0.92rem;
                transition:0.3s;
            }

            .footer-bottom-links a:hover{
                color:#CBD5E1;
            }

            /* MOBILE */
            @media (max-width: 992px){

                .footer-grid{
                    grid-template-columns:1fr 1fr;
                }
            }

            @media (max-width: 768px){

                .footer-inner{
                    padding:4rem 1.5rem 2rem;
                }

                .footer-cta{
                    padding:1.75rem;
                }

                .cta-content h2{
                    font-size:1.7rem;
                }

                .footer-grid{
                    grid-template-columns:1fr;
                    gap:2.5rem;
                }

                .footer-bottom{
                    flex-direction:column;
                    align-items:flex-start;
                }
            }

        </style>

        <footer href="#contact" class="footer">

            <div class="glow-1"></div>
            <div class="glow-2"></div>

            <div class="footer-inner">

                <!-- TOP CTA -->
                <div class="footer-cta">

                    <div class="cta-content">
                        <h2>
                            Join Africa’s Green Hydrogen Movement
                        </h2>

                        <p>
                            Connect with innovators, young professionals, researchers, and leaders building the future of clean energy across Africa.
                        </p>
                    </div>

                    <a href="#join" class="cta-btn">
                        Join YIGH
                        <i data-feather="arrow-right"></i>
                    </a>

                </div>

                <!-- MAIN GRID -->
                <div class="footer-grid">

                    <!-- BRAND -->
                    <div class="brand">

                        <a href="/" class="footer-logo">

                            <div class="logo-icon">
                                <i data-feather="zap"></i>
                            </div>

                            <span>YIGH</span>

                        </a>

                        <p class="footer-description">
                            Empowering Africa’s youth to lead the green hydrogen revolution through awareness, innovation, collaboration, and sustainable climate action.
                        </p>

                        <div class="social-links">

                            <a href="#contact" class="social-link">
                                <i data-feather="twitter"></i>
                            </a>

                            <a href="#" class="social-link">
                                <i data-feather="linkedin"></i>
                            </a>

                            <a href="#" class="social-link">
                                <i data-feather="youtube"></i>
                            </a>

                            <a href="#" class="social-link">
                                <i data-feather="instagram"></i>
                            </a>

                        </div>

                    </div>

                    <!-- LINKS -->
                    <div class="footer-column">

                        <h3>Quick Links</h3>

                        <div class="footer-links">

                            <a href="/about" class="footer-link">
                                About Us
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="/programs" class="footer-link">
                                Focus Areas
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="#opportunities" class="footer-link">
                                Opportunities
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="#vision" class="footer-link">
                                Vision & Impact
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="#partners" class="footer-link">
                                Partners
                                <i data-feather="arrow-up-right"></i>
                            </a>

                        </div>

                    </div>

                    <!-- INVOLVEMENT -->
                    <div class="footer-column">

                        <h3>Get Involved</h3>

                        <div class="footer-links">

                            <a href="/join.html" class="footer-link">
                                Join as Member
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="/join.html" class="footer-link">
                                Become a Mentor
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="#" class="footer-link">
                                Partner With Us
                                <i data-feather="arrow-up-right"></i>
                            </a>

                            <a href="#" class="footer-link">
                                Support Our Work
                                <i data-feather="arrow-up-right"></i>
                            </a>

                        </div>

                    </div>

                    <!-- CONTACT -->
                    <div class="footer-column">
                        <h3>Contact</h3>

                        <div href="#contact" class="footer-links">

                            <a href="mailto:info@yigh.org" class="footer-link">
                                info@yigh.org
                            </a>

                            <a href="tel:+254703697928" class="footer-link">
                                +254 703 697 928
                            </a>

                            <a href="#contact" class="footer-link">
                                Contact Form
                                <i data-feather="arrow-up-right"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <!-- BOTTOM -->
                <div class="footer-bottom">

                    <p class="copyright">
                        © ${new Date().getFullYear()} Youth Initiative for Green Hydrogen (YIGH). All rights reserved.
                    </p>

                    <div class="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>

                </div>

            </div>

        </footer>
        `;

        requestAnimationFrame(() => {
            feather.replace({
                root: this.shadowRoot
            });
        });
    }
}

customElements.define('custom-footer', CustomFooter);