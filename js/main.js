function abdo(eee){
     let img=document.getElementById('photo')
   
     let nav=document.querySelector('.nav')
     let a1=document.querySelector('body')
     let btn=document.querySelector('button')
    img.src = eee.src
    if (img.src.includes('1.png')){
        a1.style.backgroundImage="linear-Gradient(90deg , paleturquoise ,transparent)";
        nav.style.backgroundImage="linear-Gradient(90deg , rgb(138, 253, 253) ,transparent)";
        btn.style.color="paleturquoise"
    }
    else if(img.src.includes('2.png')){
      
        a1.style.backgroundImage="linear-Gradient(90deg , rgb(73, 73, 73) ,transparent)";
        nav.style.backgroundImage="linear-Gradient(90deg , rgba(73, 73, 73, 0.55) ,transparent)";
          btn.style.color="rgb(147, 147, 147)"
    }
    else if(img.src.includes('3.png')){
        a1.style.backgroundImage="linear-Gradient(90deg , rgb(245, 245, 220) ,transparent)";
        nav.style.backgroundImage="linear-Gradient(90deg , rgb(241, 241, 155) ,transparent)";
        btn.style.color="rgb(245, 245, 220)"
    }
    else if(img.src.includes('4.png')){
        a1.style.backgroundImage="linear-Gradient(90deg , rgba(255, 0, 0, 0.558) ,transparent)";
        nav.style.backgroundImage="linear-Gradient(90deg , rgba(255, 0, 0, 0.558) ,transparent)";
        btn.style.color="rgb(253, 117, 117)"
    }
    else if(img.src.includes('0.png')){
        a1.style.backgroundImage="linear-Gradient(90deg , gold ,transparent)";
        nav.style.backgroundImage="linear-Gradient(90deg , rgb(159, 135, 0) ,transparent) ";
        btn.style.color="rgb(223, 196, 19)" 
    }
}
function togglelinks(){
    let links=document.querySelector('#aaa')
   links.classList. toggle('disapper')
   console.log('hiiii')
}