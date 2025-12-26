
export function playIntro() {
    
    
    const textElement = document.getElementById('typewriter-text');
    //Create the object typewriter and config it 
    const typewriter = new Typewriter(textElement, {
        loop: true,   
        delay: 85,     // Write speed
    });

    // 4. CREAR LA SECUENCIA DE ANIMACIÓN
    typewriter
        .typeString('Eduardo Duran') // First String , name
        .pauseFor(500)               // Pause
        .typeString('<br><h2 style="color: #34d399 ; font-size:45px; margin-top:2vh">Full Stack Developer</h2>') // Second String
        .pauseFor(2000)              // Pause
        
        .start(); //IMPORTANT , without this , doesnt work
}