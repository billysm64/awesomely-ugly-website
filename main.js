function toHex(unit) {
  return Number(unit).toString(16)
}

let max = 16777215

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let rand = toHex(getRandomInt(max))

console.log(rand)

setInterval(function(){
  rand = toHex(getRandomInt(max))
  document.body.style.backgroundColor=`#${rand}`
}, 10);

function openInNewTab(url) {
  setInterval(function(){
    let win = window.open(url, '_blank');
    win.focus();
  }, 1000);
}
