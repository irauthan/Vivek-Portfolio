// Projects Detailed Case Studies Dataset
const projectData = {
    garden: {
        title: "Virendra Garden's Botanical Sanctuary",
        subtitle: "Official Living Heritage Sanctuary & Nursery Store | HTML5, CSS3, JavaScript, WhatsApp API",
        overview: "A dedicated digital sanctuary platform built for Virendra Garden's (Estd. 1985) in Uttarakhand. It offers an interactive botanical sanctuary guide with 100+ fruit trees (Mango, Walnut, Peach, Litchi, Lemongrass), a seasonal harvest calendar, and a live plant nursery store with 1-click WhatsApp ordering.",
        architecture: "Engineered with modern semantic HTML5 and vanilla CSS3 utilizing an eco-editorial design system. Features smooth micro-animations, accessible modal dialogs, and a responsive layout designed for effortless navigation across mobile and desktop devices.",
        database: "Client-side catalog architecture and state management generating dynamic URL payloads formatted for WhatsApp Business API order communication.",
        features: [
            "Interactive 40-year botanical sanctuary tour with zone breakdown",
            "Live plant nursery store with category search and cart summaries",
            "Direct 1-click WhatsApp checkout pre-populating customer requests",
            "Seasonal harvest guide highlighting peak fruit availability across Uttarakhand"
        ],
        lessons: "Refined responsive image art-direction for high visual fidelity, custom modal interactions, and streamlined conversational commerce checkout flows.",
        future: [
            "Integrate 3D plant specimen visualizations using WebGL",
            "Add online visitor tour reservations with instant confirmation",
            "Implement bilingual localization (English / Hindi)"
        ],
        github: "https://github.com/irauthan/botanical-nursery-garden-website"
    },
    vehicle: {
        title: "Vehicle Rental System",
        subtitle: "Enterprise Java Desktop Application | Swing, MySQL, JDBC",
        overview: "A desktop-based application designed to manage car rental operations. It streamlines the reservation workflow, tracks vehicle availability, handles customer registrations, and generates invoices.",
        architecture: "Built using Core Java and the Swing UI framework, following the MVC (Model-View-Controller) design pattern to separate interface views from backend business rules.",
        database: "Relational database utilizing MySQL schemas to model vehicle specifications, customer profiles, hire agreements, and rental transaction history.",
        features: [
            "Real-time vehicle status tracking (Available, Rented, Maintenance)",
            "Automated billing system calculating costs based on duration and vehicle type",
            "Customer record database with search and history tracking filter functionality",
            "Interactive dashboard reporting daily rentals and revenue metrics"
        ],
        lessons: "Familiarized with object relational patterns, managing local database connections via JDBC driver, and handling state variables within Swing view panels.",
        future: [
            "Transition into a web-based microservice architecture using Spring Boot",
            "Integrate dynamic maps to track physical vehicle locations",
            "Add automatic email notifications for invoice receipts"
        ],
        github: "https://github.com/irauthan"
    },
    event: {
        title: "Elite Event Manager",
        subtitle: "Dynamic Java Web Application | Servlets, JSP, JDBC, MySQL",
        overview: "A web platform designed to streamline corporate and social event bookings. Enables users to book venues, choose catering arrangements, coordinate schedules, and make mock payments online.",
        architecture: "Architected using Servlets and JSP (JavaServer Pages) for routing and presentation, connected to database endpoints via JDBC.",
        database: "MySQL backend containing relational tables for venues, bookings, package customizations, customer details, and payment receipts.",
        features: [
            "Interactive package builder enabling custom event selection details",
            "Real-time slot booking availability dashboard to prevent scheduling conflicts",
            "Admin control board showing incoming booking requests and catering details",
            "Secured user authentication and session management"
        ],
        lessons: "Learned about servlet life cycle management, JSP custom tag libraries, mapping request parameters, and securing session tokens against hijack attempts.",
        future: [
            "Incorporate a messaging system for real-time client-host communications",
            "Integrate Stripe API for real transaction processing",
            "Generate automatic calendar reminders (.ics files) for verified events"
        ],
        github: "https://github.com/irauthan"
    },
    wedding: {
        title: "Kathait Wedding Point",
        subtitle: "Modern Responsive Business Website | HTML5, CSS3, JavaScript, MySQL",
        overview: "A stunning corporate marketing and management site designed for a luxury wedding venue, showcasing halls, facilities, decorations, pricing structures, and dynamic inquiry forms.",
        architecture: "Frontend built with HTML5, vanilla CSS3, and JavaScript, designed with standard scroll reveal micro-animations.",
        database: "Simple MySQL schema recording user booking inquiries and catering preferences forwarded from the contact form API.",
        features: [
            "Immersive image gallery layouts featuring custom hover zoom reflections",
            "Dynamic booking calculator tool estimating venue costs on selected months",
            "Integrated map locations and responsive inquiry form triggers",
            "Sleek transition effects and interactive customer feedback slides"
        ],
        lessons: "Applied mobile-first CSS styling, custom flex/grid systems, SVG graphics manipulation, and form validation using JavaScript constraints.",
        future: [
            "Integrate a virtual 360-degree tour page of the wedding halls",
            "Build an interactive decoration customizer using Canvas/Three.js",
            "Create a client portal where couples can manage event checklists"
        ],
        github: "https://github.com/irauthan/Kathait-Wedding-Point"
    },
    portfolio: {
        title: "Developer Portfolio Platform",
        subtitle: "Futuristic Personal Brand Platform | Vanilla HTML5, CSS3, JS, FormSubmit",
        overview: "A showcase representing professional backend and frontend skills, achievements, coding stats, certificates database, and email contact endpoints.",
        architecture: "Single-page responsive layout utilizing HTML5, modern design system CSS3 variables, and vanilla JavaScript controls (Intersection Observer Scroll reveals).",
        database: "No database; integrated with FormSubmit API endpoints for secure, clientless form processing forwarded directly to Google Mail.",
        features: [
            "Light/Dark theme switcher with local storage persistence and transition animations",
            "Custom cursor tracking and interactive mouse follower glow blobs",
            "Dynamic PDF certificates viewer modal eliminating separate tab redirects",
            "Intersection scroll-spy navbar underlines, stats count-up, and toast modules"
        ],
        lessons: "Designed custom web layouts without external CSS libraries, optimized rendering for high Lighthouse speeds, and built accessible modal components.",
        future: [
            "Integrate active Github Graph API queries to show real-time repository cards",
            "Add a headless CMS database backend for writing dynamic markdown blog posts",
            "Add accessibility speech synthesis for reading portfolio summary text"
        ],
        github: "https://github.com/irauthan/Vivek-Portfolio"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Simple Clean Preloader Fade Out
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        if (preloader) {
            setTimeout(() => preloader.classList.add('hide'), 200);
        }
    });
    // Safety fallback for instantaneous load
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hide')) {
            preloader.classList.add('hide');
        }
    }, 600);

    // Scroll Progress Bar & Navbar scrolled state
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollable) * 100;
            scrollProgress.style.width = `${scrolled}%`;
        }

        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Mobile Drawer Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const drawerClose = document.querySelector('.drawer-close');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function toggleDrawer() {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.toggle('open');
            drawerOverlay.classList.toggle('open');
        }
    }

    if (mobileToggle) mobileToggle.addEventListener('click', toggleDrawer);
    if (drawerClose) drawerClose.addEventListener('click', toggleDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', toggleDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', toggleDrawer));

    // Scrollspy active navbar underlines
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer Reveal Scroll animations
    const revealElements = document.querySelectorAll('.reveal-item, .reveal-item-stagger');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal-item-stagger')) {
                    setTimeout(() => {
                        entry.target.classList.add('reveal-show');
                    }, index * 100);
                } else {
                    entry.target.classList.add('reveal-show');
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Statistics Counter Animate
    const statsSection = document.querySelector('.statistics-section');
    const statNumbers = document.querySelectorAll('.stat-num');
    let statsStarted = false;

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !statsStarted) {
                statsStarted = true;
                statNumbers.forEach(num => {
                    const target = parseInt(num.getAttribute('data-val'));
                    let count = 0;
                    const increment = Math.ceil(target / 40);
                    const interval = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            count = target;
                            clearInterval(interval);
                        }
                        num.textContent = count === 150 || count === 165 || count === 10 ? `${count}+` : count;
                        if (target === 160) num.textContent = `${count} Days`;
                    }, 25);
                });
            }
        }, { threshold: 0.2 });

        statsObserver.observe(statsSection);
    }

    // Testimonials Slider Logic
    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.testimonials-slider .dot');
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            if (track) track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(d => d.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                backToTop.style.opacity = '1';
                backToTop.style.pointerEvents = 'auto';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.pointerEvents = 'none';
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Project Case Study Modal Launcher
    const projModal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const caseStudyButtons = document.querySelectorAll('.btn-case');

    const modalTitle = document.getElementById('modalProjectTitle');
    const modalSubtitle = document.getElementById('modalProjectSubtitle');
    const modalOverview = document.getElementById('modalProjectOverview');
    const modalArchitecture = document.getElementById('modalProjectArchitecture');
    const modalDatabase = document.getElementById('modalProjectDatabase');
    const modalFeatures = document.getElementById('modalProjectFeatures');
    const modalLessons = document.getElementById('modalProjectLessons');
    const modalFuture = document.getElementById('modalProjectFuture');
    const modalGitLink = document.getElementById('modalGitLink');

    function populateAndOpenModal(projKey) {
        const data = projectData[projKey];
        if (!data || !projModal) return;

        if (modalTitle) modalTitle.textContent = data.title;
        if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
        if (modalOverview) modalOverview.textContent = data.overview;
        if (modalArchitecture) modalArchitecture.textContent = data.architecture;
        if (modalDatabase) modalDatabase.textContent = data.database;

        if (modalFeatures) {
            modalFeatures.innerHTML = "";
            data.features.forEach(feat => {
                const li = document.createElement('li');
                li.textContent = feat;
                modalFeatures.appendChild(li);
            });
        }

        if (modalLessons) modalLessons.textContent = data.lessons;

        if (modalFuture) {
            modalFuture.innerHTML = "";
            data.future.forEach(f => {
                const li = document.createElement('li');
                li.textContent = f;
                modalFuture.appendChild(li);
            });
        }

        if (modalGitLink) modalGitLink.setAttribute('href', data.github);

        projModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProjModal() {
        if (projModal) {
            projModal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    }

    caseStudyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projKey = btn.getAttribute('data-project');
            populateAndOpenModal(projKey);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeProjModal);
    const modalOverlay = document.querySelector('#projectModal .modal-overlay');
    if (modalOverlay) modalOverlay.addEventListener('click', closeProjModal);

    // Certificates Viewer Modal Handler
    const certModal = document.getElementById('certModal');
    const certViewer = document.getElementById('certViewer');
    const certModalClose = document.getElementById('certModalClose');
    const certViewButtons = document.querySelectorAll('.cert-view-btn');

    function openCertModal(pdfUrl) {
        if (!certModal || !certViewer) return;
        certViewer.src = pdfUrl;
        certModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
        if (!certModal || !certViewer) return;
        certModal.classList.remove('open');
        certViewer.src = "";
        document.body.style.overflow = 'auto';
    }

    certViewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfUrl = btn.getAttribute('href');
            openCertModal(pdfUrl);
        });
    });

    if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
    const certModalOverlay = document.querySelector('#certModal .modal-overlay');
    if (certModalOverlay) certModalOverlay.addEventListener('click', closeCertModal);

    // Keyboard Escape key listeners for modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (projModal && projModal.classList.contains('open')) closeProjModal();
            if (certModal && certModal.classList.contains('open')) closeCertModal();
        }
    });

    // Contact Form Submit Handler with FormSubmit Backend & Toast alerts
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i data-lucide="loader-2" class="animate-spin"></i>`;
            if (window.lucide) lucide.createIcons();

            const formData = new FormData(contactForm);
            formData.append('_subject', `New Portfolio Message from ${formData.get('name')}`);
            formData.append('_template', 'table');

            try {
                const response = await fetch('https://formsubmit.co/ajax/avsrauthan3@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const result = await response.json();

                if (response.ok && (result.success === 'true' || result.success === true)) {
                    showToast('Success', 'Your message has been sent successfully to Vivek.');
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Form submission failed.');
                }
            } catch (error) {
                if (error.message && (error.message.toLowerCase().includes('activation') || error.message.toLowerCase().includes('activate'))) {
                    showToast('Activation Required', 'Please check avsrauthan3@gmail.com to activate this form.', true);
                } else {
                    showToast('Error', 'There was an issue sending your message. Please try again.', true);
                }
                console.error('FormSubmit Error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
                if (window.lucide) lucide.createIcons();
            }
        });
    }

    // Toast Alert Pop-up Notification Engine
    function showToast(title, message, isError = false) {
        const toast = document.getElementById('toast');
        const toastTitle = document.getElementById('toastTitle');
        const toastDesc = document.getElementById('toastDesc');
        const toastIcon = document.getElementById('toastIcon');

        if (!toast) return;

        if (toastTitle) toastTitle.textContent = title;
        if (toastDesc) toastDesc.textContent = message;

        if (toastIcon) {
            if (isError) {
                toastIcon.innerHTML = '<i data-lucide="alert-circle" style="color: #EF4444;"></i>';
            } else {
                toastIcon.innerHTML = '<i data-lucide="check-circle-2" style="color: #22C55E;"></i>';
            }
        }
        if (window.lucide) lucide.createIcons();

        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4200);
    }

    // Magnetic Button effect for elements marked with .btn-magnetic
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const pos = btn.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;

            btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // Reusable & Scalable Experience Data Architecture
    const experiences = [
        {
            id: "countrees-ai",
            role: "Full Stack Developer",
            company: "Countrees AI Technologies Private Limited",
            logo: "assets/images/brand/countrees_logo.png",
            type: "Internship",
            duration: "June 2026 – Present",
            location: "Dehradun, Uttarakhand, India",
            isCurrent: true,
            description: "As a Full Stack Developer Intern at Countrees AI Technologies Private Limited, I am developing responsive, scalable, and high-performance web applications using HTML, CSS, JavaScript, jQuery, Advanced Java, and Spring Boot. I work across both frontend and backend, building intuitive user interfaces, developing RESTful APIs, implementing business logic, integrating databases, and ensuring seamless application performance. I collaborate with the development team to deliver production-ready solutions while following clean coding practices, version control with Git/GitHub, and modern software development standards. My focus is on creating maintainable, secure, and user-centric applications that provide an excellent user experience.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "jQuery",
                "Advanced Java",
                "Spring Boot",
                "MySQL",
                "REST APIs",
                "Git",
                "GitHub"
            ]
        }
    ];

    function renderExperiences() {
        const container = document.getElementById('experienceList');
        if (!container) return;

        container.innerHTML = experiences.map((exp, idx) => {
            const skillsHTML = exp.skills.map(skill => `<span class="exp-skill-tag">${skill}</span>`).join('');
            
            const currentBadgeHTML = exp.isCurrent 
                ? `<span class="badge-current"><span class="badge-dot pulse"></span> Current Role</span>` 
                : '';

            const logoHTML = exp.logo 
                ? `<img src="${exp.logo}" alt="${exp.company} Logo" class="experience-company-logo">`
                : `<svg class="experience-logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="8" fill="url(#logo_grad_${idx})"/>
                    <path d="M14 24C14 18.4772 18.4772 14 24 14C27.5 14 30.5 15.8 32.2 18.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M34 24C34 29.5228 29.5228 34 24 34C20.5 34 17.5 32.2 15.8 29.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="24" cy="24" r="4" fill="#10B981"/>
                    <defs>
                        <linearGradient id="logo_grad_${idx}" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#059669"/>
                            <stop offset="1" stop-color="#047857"/>
                        </linearGradient>
                    </defs>
                </svg>`;

            return `
                <article class="experience-card reveal-item-stagger" data-experience-id="${exp.id}">
                    <div class="experience-logo-box">
                        ${logoHTML}
                    </div>

                    <div class="experience-content">
                        <header class="experience-header">
                            <div class="experience-header-main">
                                <h3 class="experience-role">${exp.role}</h3>
                                <div class="experience-company">
                                    <i data-lucide="building-2"></i> ${exp.company}
                                </div>
                            </div>
                            <div class="experience-badges">
                                <span class="badge-type"><i data-lucide="briefcase"></i> ${exp.type}</span>
                                ${currentBadgeHTML}
                            </div>
                        </header>

                        <div class="experience-meta">
                            <span class="experience-meta-item"><i data-lucide="calendar"></i> ${exp.duration}</span>
                            <span class="experience-meta-item"><i data-lucide="map-pin"></i> ${exp.location}</span>
                        </div>

                        <p class="experience-description">${exp.description}</p>

                        <div class="experience-skills-group">
                            <div class="experience-skills-label">Technologies & Skills</div>
                            <div class="experience-skills">
                                ${skillsHTML}
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        if (window.lucide) {
            lucide.createIcons();
        }

        const newReveals = container.querySelectorAll('.reveal-item-stagger');
        newReveals.forEach(el => revealObserver.observe(el));
    }

    renderExperiences();

    // Data-driven Featured Projects List
    const projectsList = [
        {
            id: "garden",
            title: "Virendra Garden's Botanical Sanctuary",
            tags: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
            image: "assets/images/projects/project_garden.png",
            description: "Official web platform for a 40-year living botanical sanctuary featuring 100+ fruit trees, seasonal harvest calendars, and a live plant nursery store with 1-click WhatsApp checkout.",
            githubUrl: "https://github.com/irauthan/botanical-nursery-garden-website",
            liveUrl: "https://irauthan.github.io/botanical-nursery-garden-website/"
        },
        {
            id: "vehicle",
            title: "Vehicle Rental System",
            tags: ["Java Swing", "MySQL", "JDBC"],
            image: "assets/images/projects/project_vehicle.png",
            description: "A multi-functional enterprise desktop application managing rental inventory availability, reservations workflow, and automated invoicing receipt generation.",
            githubUrl: "https://github.com/irauthan",
            liveUrl: null
        },
        {
            id: "event",
            title: "Elite Event Manager",
            tags: ["Servlets", "JSP", "JDBC", "MySQL"],
            image: "assets/images/projects/project_event.png",
            description: "Dynamic backend web app allowing users to browse event packages, calculate cost projections, verify venue slots, and manage reservations.",
            githubUrl: "https://github.com/irauthan",
            liveUrl: null
        },
        {
            id: "wedding",
            title: "Kathait Wedding Point",
            tags: ["HTML5", "CSS3", "JavaScript", "MySQL"],
            image: "assets/images/projects/project_wedding.png",
            description: "A marketing business site featuring automated reservation quotes, inquiry submission forms, responsive venue galleries, and interactive customer reviews.",
            githubUrl: "https://github.com/irauthan/Kathait-Wedding-Point",
            liveUrl: "https://irauthan.github.io/Kathait-Wedding-Point/"
        },
        {
            id: "portfolio",
            title: "Developer Portfolio Platform",
            tags: ["HTML5", "CSS3", "JavaScript", "FormSubmit"],
            image: "assets/images/projects/project_portfolio.png",
            description: "A premium responsive digital brand portfolio featuring dark/light theme switching, interactive custom cursors, and custom PDF certificate viewers.",
            githubUrl: "https://github.com/irauthan/Vivek-Portfolio",
            liveUrl: "https://irauthan.github.io/Vivek-Portfolio/"
        }
    ];

    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        grid.innerHTML = projectsList.map(proj => {
            const tagsHTML = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');
            const liveBtnHTML = proj.liveUrl 
                ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-sm btn-magnetic"><i data-lucide="external-link"></i> Live View</a>`
                : '';
            
            return `
                <div class="project-card reveal-item-stagger">
                    <div class="project-visual">
                        <img src="${proj.image}" alt="${proj.title} UI" class="project-img">
                        <div class="project-overlay"></div>
                    </div>
                    <div class="project-info">
                        <div class="project-tags">
                            ${tagsHTML}
                        </div>
                        <h3>${proj.title}</h3>
                        <p>${proj.description}</p>
                        <div class="project-actions">
                            ${liveBtnHTML}
                            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn btn-magnetic"><i data-lucide="github"></i> Source Code</a>
                            <button class="project-btn btn-case btn-magnetic" data-project="${proj.id}">Case Study <i data-lucide="book-open"></i></button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        if (window.lucide) {
            lucide.createIcons();
        }

        const newProjectReveals = grid.querySelectorAll('.reveal-item-stagger');
        newProjectReveals.forEach(el => revealObserver.observe(el));

        const caseButtons = grid.querySelectorAll('.btn-case');
        caseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const projKey = btn.getAttribute('data-project');
                populateAndOpenModal(projKey);
            });
        });
    }

    renderProjects();
});
