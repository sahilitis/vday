// Lightweight confetti / falling-petals utility shared across pages
function launchConfetti(container, {count=60, colors=['#2F5D8A','#F2B705','#F0938E','#6B4226','#A9C8E0'], shapes=['circle','petal'], duration=3200} = {}){
  const target = container || document.body;
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    const shape = shapes[Math.floor(Math.random()*shapes.length)];
    const color = colors[Math.floor(Math.random()*colors.length)];
    const size = 6 + Math.random()*10;
    const left = Math.random()*100;
    const delay = Math.random()*0.4;
    const dur = duration/1000 + Math.random()*1.2;
    const rotate = Math.random()*360;
    el.style.position='fixed';
    el.style.top='-20px';
    el.style.left = left+'vw';
    el.style.width = size+'px';
    el.style.height = (shape==='petal'? size*1.6 : size)+'px';
    el.style.background = color;
    el.style.opacity = '0.9';
    el.style.zIndex = 9999;
    el.style.borderRadius = shape==='petal' ? '60% 0 60% 0' : '50%';
    el.style.transform = `rotate(${rotate}deg)`;
    el.style.pointerEvents='none';
    el.style.animation = `confetti-fall ${dur}s ease-in ${delay}s forwards`;
    target.appendChild(el);
    setTimeout(()=>el.remove(), (dur+delay)*1000+200);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes confetti-fall{
  0%{ transform: translateY(0) rotate(0deg); opacity:0.95; }
  100%{ transform: translateY(105vh) rotate(360deg); opacity:0; }
}`;
document.head.appendChild(style);
