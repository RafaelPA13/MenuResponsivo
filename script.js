const btnMobile = document.getElementById('btn-mobile')

function alternarMenu(){
    const nav = document.getElementById('nav')
    imgbtn = document.getElementById('img')
    nav.classList.toggle('aberto')


    if(nav.classList.contains('aberto')){
        imgbtn.setAttribute('src', 'https://img.freepik.com/icones-gratis/claro_318-460491.jpg')
    }
    else{
        imgbtn.setAttribute('src','https://cdn-icons-png.flaticon.com/512/6499/6499731.png')
    }
}

btnMobile.addEventListener('click', alternarMenu)