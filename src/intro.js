export function playIntro() {
    const textElement = document.getElementById('typewriter-text');
    const typewriter = new Typewriter(textElement, {
        loop: true,   
        delay: 85,
    });

    typewriter
        .typeString('Eduardo Duran')
        .pauseFor(500)
        .typeString('<br><span class="glow-text" style="font-size: clamp(1.5rem, 4vw, 3.5rem); font-weight: 700;">Full Stack Developer</span>')
        .pauseFor(2000)
        .start();
}