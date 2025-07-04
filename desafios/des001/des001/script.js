function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = 'imagens/img-manha.png'
        document.body.style.background = '#ffefc7'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/img-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'imagens/img-noite.png'
        document.body.style.background = '#05284a'
    }
}