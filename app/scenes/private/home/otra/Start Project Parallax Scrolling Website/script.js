let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let header = document.getElementById('head');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value)
    if (value < 114) {
        header.style.backgroundColor = 'transparent';
    } else {
        header.style.backgroundColor = '#f9f9f9'; // Esto restaurará el color de fondo predeterminado
    }
    text.style.marginTop =  value * 2.5 + 'px';
    leaf.style.left  = value * 1.5 + 'px'
    leaf.style.top  = value * -1.5 + 'px'
    hill1.style.top =  value * 1 + 'px';   
    hill4.style.left =  value * -1 + 'px';   
    hill5.style.left =  value * 1 + 'px';   
});