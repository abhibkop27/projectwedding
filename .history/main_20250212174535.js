document.addEventListener('DOMContentLoaded', () => {
    const rsvpBtn = document.querySelector('.rsvp-btn');
    
    rsvpBtn.addEventListener('click', () => {
        alert('Thank you for accepting our invitation—we’re so excited to celebrate with you on our special day');
    });

    // Add sparkle effect on names hover
    const names = document.querySelector('.names');
    names.addEventListener('mouseover', createSparkle);
});

function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: absolute;
        width: 5px;
        height: 5px;
        background: gold;
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: sparkleAnim 1s forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

const modal = document.getElementById('weddingModal');
        const trigger = document.querySelector('.modal-trigger');
        const closeBtn = document.querySelector('.close');
        const form = document.getElementById('rsvpForm');

        trigger.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        function openLink(){
            window.open("https://maps.app.goo.gl/NcRUe2sYRECoGc8g8", "_blank");
        }