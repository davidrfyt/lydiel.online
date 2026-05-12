document.addEventListener('DOMContentLoaded', () => {
    const sparklesContainer = document.getElementById('sparkles');
    
    // Function to create a sparkle
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Randomize size and color (dark red neon palette)
        const colors = ['#ff1a1a', '#ff4d4d', '#cc0000', '#ffb3b3', '#990000', '#ff6666'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.boxShadow = `
            0 -8px 0 0 ${randomColor},
            8px 0 0 0 ${randomColor},
            0 8px 0 0 ${randomColor},
            -8px 0 0 0 ${randomColor}
        `;
        
        const size = Math.random() * 0.5 + 0.5;
        sparkle.style.transform = `scale(${size})`;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        
        sparklesContainer.appendChild(sparkle);
        
        // Remove sparkle after animation ends
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    // Add sparkles on click
    document.addEventListener('click', (e) => {
        // Prevent sparkles from breaking click events on buttons/links
        if(e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON' && !e.target.closest('#chatbot')) {
            for(let i=0; i<8; i++) {
                setTimeout(() => {
                    const offsetX = (Math.random() - 0.5) * 60;
                    const offsetY = (Math.random() - 0.5) * 60;
                    createSparkle(e.clientX + offsetX, e.clientY + offsetY);
                }, i * 50);
            }
        }
    });

    // Occasional random sparkles
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }, 800);
    
    // Add hover sound effect (optional, visual only for now)
    const cards = document.querySelectorAll('.glass-card, .skill-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = `translateY(-10px) rotate(${Math.random() * 2 - 1}deg)`;
            
            // Create a few sparkles around the card when hovered
            const rect = card.getBoundingClientRect();
            for(let i=0; i<3; i++) {
                createSparkle(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height
                );
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // --- CHATBOT LOGIC ---
    const chatToggle = document.getElementById('chatbot-toggle');
    const chatContainer = document.getElementById('chatbot');
    const chatClose = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chatbot-input-field');
    const chatSend = document.getElementById('chatbot-send');
    const chatMessages = document.getElementById('chatbot-messages');

    let chatMessageCount = 0;
    let chatHistory = [];

    if(chatToggle) {
        // Toggle chat visibility
        chatToggle.addEventListener('click', () => {
            chatContainer.classList.add('active');
        });

        chatClose.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });

        // Handle sending messages
        const sendMessage = () => {
            const text = chatInput.value.trim();
            if (!text) return;

            chatMessageCount++;
            chatHistory.push("Usuario: " + text);

            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'message user-message';
            userMsg.textContent = text;
            chatMessages.appendChild(userMsg);
            
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate AI typing and response
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai-message';
                
                // Detect if user provided an email
                const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/i;
                const emailMatch = text.match(emailRegex);

                if (emailMatch) {
                    const userEmail = emailMatch[0];
                    aiMsg.textContent = '¡Genial! Acabo de enviarle tu correo (' + userEmail + ') a Lydiel. Se pondrá en contacto contigo muy pronto para hablar de negocios. 🚀';
                    
                    // Send lead via FormSubmit AJAX silently
                    fetch("https://formsubmit.co/ajax/webmaster@labcore.es", {
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            _subject: "Nuevo LEAD desde el Chatbot AI",
                            email: userEmail,
                            historial_chat: chatHistory.join('\n')
                        })
                    }).catch(error => console.log("Error sending lead", error));

                } else {
                    // Advanced Keyword Matching Knowledge Base
                    const knowledgeBase = [
                        {
                            patterns: [/\bhola\b/i, /\bbuenas\b/i, /\bsaludos\b/i, /\bhey\b/i, /\bbuenos dias\b/i, /\bbuenas tardes\b/i],
                            responses: ["¡Hola! Qué gusto saludarte. Soy la IA de Lydiel. ¿En qué te puedo ayudar hoy?", "¡Buenas! Aquí la IA de Lydiel al aparato. ¿Buscas mejorar tu web o integrar Inteligencia Artificial en tu negocio?"]
                        },
                        {
                            patterns: [/precio/i, /costo/i, /pagar/i, /presupuesto/i, /cuanto vale/i, /tarifa/i, /dinero/i, /cuanto cuesta/i],
                            responses: ["Los presupuestos se adaptan a las necesidades de cada proyecto. ¡Escribe tu correo por aquí y te contactaremos para hacerte una propuesta personalizada!"]
                        },
                        {
                            patterns: [/tiempo/i, /tarda/i, /plazo/i, /cuando/i, /duración/i, /cuanto se tarda/i],
                            responses: ["El tiempo depende de lo que necesites. Una web corporativa puede estar en semanas, pero un MMO o IA compleja lleva más. ¿Tienes alguna fecha límite?"]
                        },
                        {
                            patterns: [/neogalaxyx/i, /juego/i, /mmo/i, /videojuego/i],
                            responses: ["¡Ah, NeoGalaxyX! Es un proyecto increíble. Lydiel diseñó toda la web oficial. ¿Buscas un diseño de ese nivel para tu proyecto?"]
                        },
                        {
                            patterns: [/contacto/i, /email/i, /hablar/i, /correo/i, /telefono/i, /llamar/i, /whatsapp/i],
                            responses: ["Puedes usar el formulario de contacto al final de la página, o simplemente escribir tu correo electrónico aquí mismo en el chat y yo me encargaré de pasárselo a Lydiel."]
                        },
                        {
                            patterns: [/inteligencia artificial/i, /\bia\b/i, /\bai\b/i, /agente/i, /bot/i, /chat/i, /automatizar/i],
                            responses: ["La Inteligencia Artificial es nuestra especialidad. Podemos integrar bots de ventas como yo para captar leads en automático. ¿En qué sector trabajas?"]
                        },
                        {
                            patterns: [/diseño/i, /web/i, /pagina/i, /sitio/i, /tienda/i, /ecommerce/i, /app/i],
                            responses: ["Una web rápida y con buen diseño es clave para vender. Creamos interfaces oscuras y modernas optimizadas para convertir. ¿Qué tipo de web tienes en mente?"]
                        },
                        {
                            patterns: [/quien eres/i, /como te llamas/i, /eres humano/i, /robot/i],
                            responses: ["Soy Lydiel AI, un asistente programado para atender a clientes 24/7. No soy humano, ¡pero intento ayudar lo mejor que puedo!"]
                        },
                        {
                            patterns: [/gracias/i, /perfecto/i, /genial/i, /vale/i, /ok/i, /entendido/i, /de acuerdo/i],
                            responses: ["¡A ti! Si tienes cualquier otra duda, por aquí sigo. Si prefieres hablar con Lydiel, déjame tu correo por aquí y le aviso."]
                        }
                    ];

                    let responseFound = false;
                    for (const item of knowledgeBase) {
                        if (item.patterns.some(pattern => pattern.test(text))) {
                            aiMsg.textContent = item.responses[Math.floor(Math.random() * item.responses.length)];
                            responseFound = true;
                            break;
                        }
                    }

                    if (!responseFound) {
                        const fallbacks = [
                            "¡Qué interesante! Lydiel es experto en crear soluciones para escalar negocios. Si me dejas tu correo por aquí, nos pondremos en contacto contigo.",
                            "Entiendo. Para darte la mejor solución, lo ideal sería que Lydiel analice tu caso personalmente. ¡Escríbeme tu email y le paso el recado!",
                            "Ese es un buen punto. Si me facilitas tu dirección de correo electrónico, Lydiel te responderá con todo detalle sobre ese tema."
                        ];
                        aiMsg.textContent = fallbacks[Math.floor(Math.random() * fallbacks.length)];
                    }

                    // Ask for email proactively after 2 messages
                    if (chatMessageCount === 2) {
                        aiMsg.textContent += " Por cierto, para poder darte una atención más personalizada, ¿me podrías dejar tu correo electrónico por aquí?";
                    }
                }

                chatHistory.push("IA: " + aiMsg.textContent);
                chatMessages.appendChild(aiMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        };

        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});
