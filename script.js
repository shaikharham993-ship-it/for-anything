// Navigation System
function nextPage(pageNumber) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.remove('active'));
    
    setTimeout(() => {
        const next = document.getElementById(`page${pageNumber}`);
        next.classList.add('active');
        
        if (pageNumber === 2) {
            startTypewriter();
        }
    }, 500);
}

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 1000);
    }, 3000);
});

// Floating Hearts Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

// Typewriter Effect
const text = `Mahwish...
Mujhe pata hai maine tumhe hurt kiya.
Aur mujhe us baat ka sach me bahut afsos hai.
Main excuses dene nahi aaya...
Main sirf tumse dil se maafi maangne aaya hoon.
Agar possible ho...
Toh ek chance aur de dena.`;

function startTypewriter() {
    const container = document.getElementById('typewriter-text');
    let i = 0;
    container.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            container.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            document.getElementById('btn-after-type').style.display = 'block';
        }
    }
    type();
}

// Envelope Interaction
function openLetter() {
    document.querySelector('.envelope-wrapper').classList.toggle('open');
    setTimeout(() => {
        document.getElementById('btn-after-letter').style.display = 'block';
    }, 1000);
}

// The "No" Button Logic
const noBtn = document.getElementById('noBtn');
const rejectMsgs = [
    "🥺 Itna bhi gussa?",
    "Please...",
    "Ek chance?",
    "Dil mat todo...",
    "I promise...",
    "Main sudhar jaunga ❤️"
];

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    const randomMsg = rejectMsgs[Math.floor(Math.random() * rejectMsgs.length)];
    document.getElementById('rejection-msg').innerText = randomMsg;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// Celebration (Yes Button)
function celebrate() {
    confettiEffect();
    setTimeout(() => {
        nextPage(5);
    }, 1000);
}

function confettiEffect() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = '🌸';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = '20px';
        confetti.style.zIndex = '999';
        confetti.style.transition = 'transform 2s linear, opacity 2s';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, 10);

        setTimeout(() => confetti.remove(), 2000);
    }
}

// Final Glow Interaction
function finalGlow(el) {
    el.style.transform = 'scale(1.5)';
    document.body.style.background = '#ff0054';
    
    const finalWords = document.getElementById('final-words');
    const message = "No matter how many mistakes I make... I'll always choose you. Again. Again. And Forever.";
    
    let i = 0;
    finalWords.innerHTML = '';
    function typeFinal() {
        if (i < message.length) {
            finalWords.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeFinal, 50);
        }
    }
    typeFinal();
}

// Shooting Stars
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 50 + 'vh';
    // CSS for shooting star added via JS for convenience
    star.style.cssText += `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        box-shadow: 0 0 10px white;
        animation: shoot 2s linear;
    `;
    document.querySelector('.shooting-stars')?.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

setInterval(() => {
    if(document.getElementById('page6').classList.contains('active')) {
        createShootingStar();
    }
}, 1000);