let btnEl=document.getElementById("btn")
function chengeclr() {
  let randomval=() =>Math.round(Math.random()*255);
  let clrval=`rgb(${randomval()},${randomval()},${randomval()})`;
  document.body.style.backgroundColor=clrval;
  btnEl.textContent=clrval;
}




