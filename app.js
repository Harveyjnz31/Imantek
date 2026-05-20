/* ==========================================================================
   LÓGICA INTERACTIVA Y SIMULACIÓN - IMANTEK S.A.S.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------------------
    // 1. MENÚ DE NAVEGACIÓN MÓVIL
    // ---------------------------------------------------------
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navigationMenu = document.getElementById('navigation-menu');
    
    if (navToggleBtn && navigationMenu) {
        navToggleBtn.addEventListener('click', () => {
            navigationMenu.classList.toggle('active');
            const icon = navToggleBtn.querySelector('i');
            if (navigationMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navigationMenu.querySelectorAll('.nav-link, .nav-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navigationMenu.classList.remove('active');
                const icon = navToggleBtn.querySelector('i');
                icon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    // ---------------------------------------------------------
    // 2. EFECTO ACTIVO EN ENLACES DE NAVEGACIÓN AL HACER SCROLL
    // ---------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navMenuLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 150; // Offset para mejor detección
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
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
        btn.addEventListener('click', () => {
            const parentCard = btn.closest('.service-card');
            const detailsList = parentCard.querySelector('.service-details');
            
            // Alternar estado activo
            btn.classList.toggle('active');
            detailsList.classList.toggle('show');
            
            // Actualizar texto del botón
            const chevron = btn.querySelector('i');
            if (detailsList.classList.contains('show')) {
                btn.innerHTML = `Ocultar detalles <i class="fa-solid fa-chevron-up"></i>`;
                parentCard.style.borderColor = 'rgba(0, 210, 255, 0.4)';
            } else {
                const isRose = parentCard.id === 'srv-mecanica' || parentCard.id === 'srv-suministros';
                btn.innerHTML = `Ver detalles <i class="fa-solid fa-chevron-down"></i>`;
                parentCard.style.borderColor = 'rgba(255, 255, 255, 0.03)';
            }
        });
    });

    // ---------------------------------------------------------
    // 4. SIMULADOR DE CAMPO ELECTROMAGNÉTICO INTERACTIVO (CANVAS)
    // ---------------------------------------------------------
    const canvas = document.getElementById('magnetic-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Elementos de Control del UI
        const strengthSlider = document.getElementById('magnet-strength');
        const densitySlider = document.getElementById('line-density');
        const reversePolesBtn = document.getElementById('btn-reverse-poles');
        const showParticlesCheck = document.getElementById('show-particles');
        const infoText = document.getElementById('simulator-info-text');
        const dragInstruction = document.getElementById('drag-instruction');
        
        // Variables de Simulación
        let magnet = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            width: 140,
            height: 38,
            isDragging: false,
            dragOffsetX: 0,
            dragOffsetY: 0,
            inverted: false
        };
        
        let strength = parseFloat(strengthSlider.value); // Multiplicador de campo
        let density = parseInt(densitySlider.value); // Número de líneas
        let showParticles = showParticlesCheck.checked;
        let particles = [];
        
        // Configuración de Polos del Imán
        // En un imán bipolar, los polos están cerca de los extremos
        function getPolePositions() {
            const angle = 0; // Horizontal
            const halfLength = (magnet.width / 2) - 15;
            
            // Polo Norte en la derecha por defecto
            let nX = magnet.x + Math.cos(angle) * halfLength;
            let nY = magnet.y + Math.sin(angle) * halfLength;
            
            // Polo Sur en la izquierda por defecto
            let sX = magnet.x - Math.cos(angle) * halfLength;
            let sY = magnet.y - Math.sin(angle) * halfLength;
            
            if (magnet.inverted) {
                // Intercambiar
                return { north: { x: sX, y: sY }, south: { x: nX, y: nY } };
            }
            return { north: { x: nX, y: nY }, south: { x: sX, y: sY } };
        }
        
        // Calcular el Vector de Campo Magnético en cualquier punto (x, y)
        // Basado en la teoría física de monopolos magnéticos (Norte repele +, Sur atrae +)
        function getMagneticFieldAt(x, y) {
            const poles = getPolePositions();
            
            // Vector desde Polo Norte (fuente de líneas)
            const rxN = x - poles.north.x;
            const ryN = y - poles.north.y;
            const distNSq = rxN * rxN + ryN * ryN;
            const distN = Math.sqrt(distNSq) + 0.1; // Evitar división por cero
            
            // Fuerza Norte: k / r^2 en dirección radial hacia afuera
            const fN = (strength * 1000) / distNSq;
            const bNx = (rxN / distN) * fN;
            const bNy = (ryN / distN) * fN;
            
            // Vector desde Polo Sur (sumidero de líneas)
            const rxS = x - poles.south.x;
            const ryS = y - poles.south.y;
            const distSSq = rxS * rxS + ryS * ryS;
            const distS = Math.sqrt(distSSq) + 0.1;
            
            // Fuerza Sur: k / r^2 en dirección radial hacia adentro (atracción)
            const fS = (strength * 1000) / distSSq;
            const bSx = -(rxS / distS) * fS;
            const bSy = -(ryS / distS) * fS;
            
            // Campo resultante es la suma vectorial
            return {
                x: bNx + bSx,
                y: bNy + bSy
            };
        }
        
        // Clase para las partículas cargadas (electrones de prueba) que fluyen por el campo
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                const poles = getPolePositions();
                // Nacen cerca del Polo Norte con un pequeño ángulo aleatorio
                const angle = Math.random() * Math.PI * 2;
                const radius = 10 + Math.random() * 20;
                this.x = poles.north.x + Math.cos(angle) * radius;
                this.y = poles.north.y + Math.sin(angle) * radius;
                this.life = 0;
                this.maxLife = 120 + Math.random() * 150;
                this.speedMultiplier = 0.8 + Math.random() * 0.6;
                this.color = `rgba(0, 210, 255, ${0.4 + Math.random() * 0.5})`;
            }
            
            update() {
                // Obtener el campo en su posición actual
                const B = getMagneticFieldAt(this.x, this.y);
                const magnitude = Math.sqrt(B.x * B.x + B.y * B.y) + 0.001;
                
                // Normalizar velocidad
                const step = (1.5 + strength * 0.4) * this.speedMultiplier;
                this.x += (B.x / magnitude) * step;
                this.y += (B.y / magnitude) * step;
                
                this.life++;
                
                // Verificar si llegó cerca del Polo Sur
                const poles = getPolePositions();
                const distToSouth = Math.sqrt(Math.pow(this.x - poles.south.x, 2) + Math.pow(this.y - poles.south.y, 2));
                
                // Si muere, renace
                if (this.life >= this.maxLife || distToSouth < 12 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 6;
                ctx.shadowColor = 'rgba(0, 210, 255, 0.8)';
                ctx.fill();
                ctx.shadowBlur = 0; // Reset sombra
            }
        }
        
        // Inicializar pool de partículas
        function initParticles() {
            particles = [];
            for (let i = 0; i < 40; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();
        
        // Dibujar el Imán Bipolar Físico en la pantalla
        function drawMagnet() {
            ctx.save();
            ctx.translate(magnet.x, magnet.y);
            
            const w = magnet.width;
            const h = magnet.height;
            const r = 8; // Border radius del imán
            
            // Sombra del imán
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 15;
            ctx.shadowOffsetY = 5;
            
            // Cuerpo del Imán (Base)
            ctx.beginPath();
            ctx.roundRect(-w/2, -h/2, w, h, r);
            ctx.fillStyle = '#1c2430';
            ctx.fill();
            ctx.shadowBlur = 0; // Desactivar sombra para detalles internos
            
            // Polo Norte (Rojo / Rose)
            ctx.beginPath();
            if (!magnet.inverted) {
                // Norte a la derecha
                ctx.roundRect(0, -h/2, w/2, h, [0, r, r, 0]);
                ctx.fillStyle = 'hsl(345, 100%, 55%)';
            } else {
                // Norte a la izquierda
                ctx.roundRect(-w/2, -h/2, w/2, h, [r, 0, 0, r]);
                ctx.fillStyle = 'hsl(345, 100%, 55%)';
            }
            ctx.fill();
            
            // Polo Sur (Azul / Cyan)
            ctx.beginPath();
            if (!magnet.inverted) {
                // Sur a la izquierda
                ctx.roundRect(-w/2, -h/2, w/2, h, [r, 0, 0, r]);
                ctx.fillStyle = 'hsl(191, 100%, 45%)';
            } else {
                // Sur a la derecha
                ctx.roundRect(0, -h/2, w/2, h, [0, r, r, 0]);
                ctx.fillStyle = 'hsl(191, 100%, 45%)';
            }
            ctx.fill();
            
            // Línea divisoria central
            ctx.strokeStyle = 'rgba(12, 15, 23, 0.4)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, -h/2);
            ctx.lineTo(0, h/2);
            ctx.stroke();
            
            // Textos de los polos: 'N' y 'S'
            ctx.fillStyle = '#ffffff';
            ctx.font = '800 14px "Outfit", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            const textOffset = w / 4;
            if (!magnet.inverted) {
                ctx.fillText('S', -textOffset, 0);
                ctx.fillText('N', textOffset, 0);
            } else {
                ctx.fillText('N', -textOffset, 0);
                ctx.fillText('S', textOffset, 0);
            }
            
            ctx.restore();
        }
        
        // Trazado numérico de las líneas de campo magnético usando Runge-Kutta o Euler simple
        // Trazamos curvas suaves que sigan la dirección de los vectores de B
        function drawMagneticFieldLines() {
            const poles = getPolePositions();
            
            ctx.lineWidth = 1.2;
            ctx.shadowBlur = 0;
            
            // El número de líneas que nacen radialmente de cada polo
            const stepAngle = (Math.PI * 2) / density;
            
            for (let i = 0; i < density; i++) {
                const angle = i * stepAngle;
                const radius = 18; // Distancia inicial del polo
                
                // Iniciar trazo de línea desde el polo norte
                let posX = poles.north.x + Math.cos(angle) * radius;
                let posY = poles.north.y + Math.sin(angle) * radius;
                
                ctx.beginPath();
                ctx.moveTo(posX, posY);
                
                // Color degradado para las líneas de fuerza (Rojo -> Azul)
                const grad = ctx.createLinearGradient(poles.north.x, poles.north.y, poles.south.x, poles.south.y);
                grad.addColorStop(0, 'rgba(255, 51, 102, 0.18)');
                grad.addColorStop(0.5, 'rgba(0, 210, 255, 0.08)');
                grad.addColorStop(1, 'rgba(0, 210, 255, 0.18)');
                ctx.strokeStyle = grad;
                
                let steps = 0;
                const maxSteps = 400;
                let reachedSouth = false;
                
                // Trazar numéricamente siguiendo la dirección de B
                while (steps < maxSteps) {
                    const B = getMagneticFieldAt(posX, posY);
                    const magnitude = Math.sqrt(B.x * B.x + B.y * B.y);
                    
                    if (magnitude < 0.05) break; // Campo demasiado débil
                    
                    // Avanzar un paso en dirección del campo
                    const stepSize = 4;
                    posX += (B.x / magnitude) * stepSize;
                    posY += (B.y / magnitude) * stepSize;
                    
                    ctx.lineTo(posX, posY);
                    
                    // Comprobar si llegamos al Polo Sur
                    const distToSouth = Math.sqrt(Math.pow(posX - poles.south.x, 2) + Math.pow(posY - poles.south.y, 2));
                    if (distToSouth < radius - 3) {
                        reachedSouth = true;
                        break;
                    }
                    
                    // Salirse de la pantalla
                    if (posX < -50 || posX > canvas.width + 50 || posY < -50 || posY > canvas.height + 50) {
                        break;
                    }
                    
                    steps++;
                }
                ctx.stroke();
            }
        }
        
        // Bucle Principal de Renderizado del Canvas (Animation Loop)
        function animate() {
            // Limpieza del canvas con un leve rastro (trail effect) para el brillo de partículas
            ctx.fillStyle = 'rgba(7, 9, 13, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // 1. Dibujar las líneas vectoriales de campo magnético
            drawMagneticFieldLines();
            
            // 2. Dibujar y actualizar las partículas fluidas si está activo
            if (showParticles) {
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
            
            // 3. Dibujar el Imán físico encima de todo
            drawMagnet();
            
            requestAnimationFrame(animate);
        }
        
        // ---------------------------------------------------------
        // Eventos del Mouse e Interacción Táctil en Canvas
        // ---------------------------------------------------------
        function getMousePos(evt) {
            const rect = canvas.getBoundingClientRect();
            // Calcular escala si el canvas está reescalado por CSS
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return {
                x: (evt.clientX - rect.left) * scaleX,
                y: (evt.clientY - rect.top) * scaleY
            };
        }
        
        function checkMouseOverMagnet(mx, my) {
            return (
                mx >= magnet.x - magnet.width/2 - 10 &&
                mx <= magnet.x + magnet.width/2 + 10 &&
                my >= magnet.y - magnet.height/2 - 10 &&
                my <= magnet.y + magnet.height/2 + 10
            );
        }
        
        // Mousedown / Touchstart
        function startDrag(evt) {
            const pos = getMousePos(evt);
            if (checkMouseOverMagnet(pos.x, pos.y)) {
                magnet.isDragging = true;
                magnet.dragOffsetX = pos.x - magnet.x;
                magnet.dragOffsetY = pos.y - magnet.y;
                dragInstruction.style.opacity = '0'; // Ocultar instrucción
                canvas.style.cursor = 'grabbing';
            }
        }
        
        // Mousemove / Touchmove
        function drag(evt) {
            if (!magnet.isDragging) {
                // Cambiar el cursor a "grab" si pasa por encima del imán
                const pos = getMousePos(evt);
                if (checkMouseOverMagnet(pos.x, pos.y)) {
                    canvas.style.cursor = 'grab';
                } else {
                    canvas.style.cursor = 'default';
                }
                return;
            }
            
            evt.preventDefault();
            const pos = getMousePos(evt);
            
            // Actualizar la posición del imán con límites de pantalla
            let targetX = pos.x - magnet.dragOffsetX;
            let targetY = pos.y - magnet.dragOffsetY;
            
            const padding = 20;
            magnet.x = Math.max(magnet.width/2 + padding, Math.min(canvas.width - magnet.width/2 - padding, targetX));
            magnet.y = Math.max(magnet.height/2 + padding, Math.min(canvas.height - magnet.height/2 - padding, targetY));
        }
        
        // Mouseup / Touchend
        function endDrag() {
            if (magnet.isDragging) {
                magnet.isDragging = false;
                canvas.style.cursor = 'grab';
            }
        }
        
        // Vincular Eventos de Mouse
        canvas.addEventListener('mousedown', startDrag);
        canvas.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', endDrag);
        
        // Vincular Eventos Táctiles (Mobile)
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) startDrag(e.touches[0]);
        }, { passive: false });
        canvas.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) drag(e.touches[0]);
        }, { passive: false });
        window.addEventListener('touchend', endDrag);
        
        // ---------------------------------------------------------
        // Vinculación de Controles del UI
        // ---------------------------------------------------------
        strengthSlider.addEventListener('input', (e) => {
            strength = parseFloat(e.target.value);
            updateInfoText();
        });
        
        densitySlider.addEventListener('input', (e) => {
            density = parseInt(e.target.value);
        });
        
        showParticlesCheck.addEventListener('change', (e) => {
            showParticles = e.target.checked;
        });
        
        reversePolesBtn.addEventListener('click', () => {
            magnet.inverted = !magnet.inverted;
            initParticles(); // Reiniciar electrones para que fluyan al revés
            updateInfoText();
            
            // Animación rápida al hacer clic en el botón
            reversePolesBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                reversePolesBtn.style.transform = 'scale(1)';
            }, 100);
        });
        
        function updateInfoText() {
            const poles = magnet.inverted ? 'Norte (Izquierda) &rarr; Sur (Derecha)' : 'Norte (Derecha) &rarr; Sur (Izquierda)';
            const strText = strength > 7 ? 'Muy Fuerte' : strength > 4 ? 'Moderada' : 'Suave';
            
            infoText.innerHTML = `Imán en orientación <strong>${poles}</strong> con inducción magnética <strong>${strText}</strong>. Las partículas representan cargas negativas fluyendo del polo positivo (Norte - Rojo) al polo negativo (Sur - Azul).`;
        }
        
        // Iniciar Animación
        animate();
    }
});
