function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length ==0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero ='Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'criançam.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade<60){
                img.setAttribute('src', 'homem.jpg')
            } else{
                img.setAttribute('src', 'idosom.jpg')
            }
        }else if(fsex[1].checked){
            genero ='Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'criançaf.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade<60){
                img.setAttribute('src', 'mulher.jpg')
            } else{
                img.setAttribute('src', 'idosof.jpg')
            }
            
        }
       
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign ='center'
        
    }

    
}