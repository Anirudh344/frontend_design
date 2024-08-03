document.getElementById("color").addEventListener("click",function(){
    const color=grc();
document.getElementById("box3").style.backgroundColor = color

})
function grc(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
   return color ;
  }