function randomcolor(){
    return Math.round(Math.random()*255)
}
console.log(randomcolor())
let colorval="rgb("randomcolor(),randomcolor(),randomcolor()")"
console.log(colorval)

function chengeclr(){
    let str=`rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
    document.body.style.backgroundColor = str;
    console.log(str)
}



