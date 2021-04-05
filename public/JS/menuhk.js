
h =document.querySelector('.layer1');
h.addEventListener('click',function(){
    console.log("click roi em oi ");
    document.querySelector('.layer2').classList.toggle('layer3');
})