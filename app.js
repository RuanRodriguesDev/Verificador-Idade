function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os Dados e tente Novamente?')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src','assets/img/crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/img/jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/img/adulto.jpg')
            } else {
                img.setAttribute('src', 'assets/img/idoso.jpg')
            }

        }else if (fsex[1].checked) {
            genero = 'Homen'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'assets/img/criancaf.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/img/jovemf.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/img/adultof.jpg')
            } else {
                img.setAttribute('src', 'assets/img/idosof.jpg')
            }

        }
        res.style.texAlin = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
