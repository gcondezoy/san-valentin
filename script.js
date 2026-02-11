document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    const initialContent = document.getElementById('initial-content');
    const successMessage = document.getElementById('success-message');

    // Mover el botón "No"
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40);
        btnNo.style.position = 'fixed';
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    };

    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

    // Acción al decir SÍ
    btnYes.addEventListener('click', () => {
        initialContent.style.opacity = '0';
        setTimeout(() => {
            initialContent.classList.add('hidden');
            successMessage.classList.remove('hidden');
            successMessage.style.animation = 'slideUp 1s ease-out';
            
            const message = "No necesito cenas costosas ni grandes lujos, porque mi felicidad completa está en los momentos más sencillos a tu lado. Gracias por elegirme cada día. Te amo muchísimo. ❤️";
            typeWriter(message, 'dynamic-text', 50);
            setInterval(createHeart, 200);
        }, 500);
    });

    function typeWriter(text, elementId, speed) {
        let i = 0;
        const el = document.getElementById(elementId);
        el.innerHTML = "";
        const type = () => {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    }

    function createHeart() {
        const container = document.getElementById('particles-container');
        const heart = document.createElement('div');
        heart.innerHTML = ['❤️', '💖', '✨', '🌸'][Math.floor(Math.random() * 4)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-5vh';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.opacity = Math.random();
        heart.style.pointerEvents = 'none';
        container.appendChild(heart);

        heart.animate([
            { transform: 'translateY(0) scale(1)', opacity: 1 },
            { transform: `translateY(-105vh) rotate(${Math.random() * 360}deg) scale(0.5)`, opacity: 0 }
        ], { duration: 4000 + Math.random() * 2000 });

        setTimeout(() => heart.remove(), 6000);
    }

    // WhatsApp
    document.getElementById('btn-whatsapp').addEventListener('click', () => {
        const numero = "51958570315"; // Pon tu número aquí
        const texto = encodeURIComponent("¡Acepto pasar San Valentín contigo! Te amo <3");
        window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    });
});