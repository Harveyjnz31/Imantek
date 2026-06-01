/* ==========================================================================
   INTERACCIONES - IMANTEK S.A.S.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. MENÚ DE NAVEGACIÓN MÓVIL
    // ---------------------------------------------------------
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navigationMenu = document.getElementById('navigation-menu');

    if (navToggleBtn && navigationMenu) {
        const setMenuState = (isOpen) => {
            navigationMenu.classList.toggle('active', isOpen);
            navToggleBtn.setAttribute('aria-expanded', String(isOpen));
            navToggleBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');

            const icon = navToggleBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-xmark', isOpen);
            }
        };

        navToggleBtn.addEventListener('click', () => {
            setMenuState(!navigationMenu.classList.contains('active'));
        });

        const navLinks = navigationMenu.querySelectorAll('.nav-link, .nav-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => setMenuState(false));
        });
    }

    // ---------------------------------------------------------
    // 2. EFECTO ACTIVO EN ENLACES DE NAVEGACIÓN AL HACER SCROLL
    // ---------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navMenuLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navMenuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ---------------------------------------------------------
    // 3. ACORDEONES DEL CATÁLOGO DE SERVICIOS
    // ---------------------------------------------------------
    const srvToggleButtons = document.querySelectorAll('.srv-toggle-btn');

    srvToggleButtons.forEach(btn => {
        const updateServiceToggle = (isExpanded) => {
            btn.classList.toggle('active', isExpanded);
            btn.setAttribute('aria-expanded', String(isExpanded));
            btn.innerHTML = isExpanded
                ? 'Ocultar detalles <i class="fa-solid fa-chevron-up"></i>'
                : 'Mostrar detalles <i class="fa-solid fa-chevron-down"></i>';
        };

        const initialDetailsList = document.getElementById(btn.getAttribute('aria-controls'));
        updateServiceToggle(Boolean(initialDetailsList && initialDetailsList.classList.contains('show')));

        btn.addEventListener('click', () => {
            const parentCard = btn.closest('.service-card');
            if (!parentCard) return;

            const detailsList = parentCard.querySelector('.service-details');
            if (!detailsList) return;

            detailsList.classList.toggle('show');
            const isExpanded = detailsList.classList.contains('show');
            updateServiceToggle(isExpanded);
        });
    });

    // ---------------------------------------------------------
    // 4. FLUJO DE COTIZACIÓN POR WHATSAPP
    // ---------------------------------------------------------
    const whatsappPhone = '573181419074';
    const quoteButtons = document.querySelectorAll('.srv-quote-btn');
    const contactSection = document.getElementById('contacto');
    const contactForm = document.getElementById('contact-form-handler');
    const formStatus = document.getElementById('form-status');
    const formName = document.getElementById('form-name');
    const formPhone = document.getElementById('form-phone');
    const formService = document.getElementById('form-service');
    const formMessage = document.getElementById('form-message');

    function setFormStatus(message, type = 'info') {
        if (!formStatus) return;
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
    }

    function selectServiceByLabel(serviceLabel) {
        if (!formService || !serviceLabel) return;

        const matchingOption = Array.from(formService.options).find(option => {
            const optionLabel = option.textContent.trim().toLowerCase();
            const requestedLabel = serviceLabel.trim().toLowerCase();
            return optionLabel === requestedLabel || optionLabel.includes(requestedLabel);
        });

        if (matchingOption) {
            formService.value = matchingOption.value;
        }
    }

    quoteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceLabel = button.dataset.service || '';
            selectServiceByLabel(serviceLabel);

            if (formMessage && !formMessage.value.trim()) {
                formMessage.value = `Hola, quiero solicitar una cotización para ${serviceLabel}. `;
            }

            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            setTimeout(() => {
                if (formMessage) formMessage.focus();
            }, 550);
        });
    });

    if (contactForm && formName && formPhone && formService && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                setFormStatus('Revisa los campos marcados antes de enviar la solicitud.', 'error');
                return;
            }

            const name = formName.value.trim();
            const phone = formPhone.value.trim();
            const serviceLabel = formService.options[formService.selectedIndex].textContent.trim();
            const message = formMessage.value.trim();

            if (name.length < 3 || phone.replace(/\D/g, '').length < 7 || message.length < 12) {
                setFormStatus('Agrega un nombre, teléfono y descripción más completos para preparar la solicitud.', 'error');
                return;
            }

            const whatsappMessage = [
                `Hola, soy ${name}.`,
                `Teléfono: ${phone}`,
                `Servicio de interés: ${serviceLabel}`,
                `Requerimiento: ${message}`
            ].join('\n');

            const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;
            const whatsappLink = document.createElement('a');
            whatsappLink.href = whatsappUrl;
            whatsappLink.target = '_blank';
            whatsappLink.rel = 'noopener noreferrer';
            document.body.appendChild(whatsappLink);
            whatsappLink.click();
            whatsappLink.remove();

            setFormStatus('Solicitud lista en WhatsApp. Solo falta enviarla desde la conversación.', 'success');
        });
    }
});
