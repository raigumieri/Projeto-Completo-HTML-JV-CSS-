function validar(){
    let usuario = document.getElementById("usuario").value 
    let senha = document.getElementById("senha").value 

    if(usuario =="" && senha ==""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("Acesso Permitido")
        window.open('menu.html')
    }
}

function calc(){
    let n1 = Number(prompt("Digite o Primeiro valor: "))
    let n2 = Number(prompt("Digite o Segundo valor"))
    let op = Number(prompt(`DADOS INFORMADOS: ${n1} e ${n2}. \n ESCOLHA UMA OPÇÃO: \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let msg = document.getElementById('msg')
    msg.innerHTML = `<h2> Processando o Resultado </h2>`

    switch(op){ 
        
        case 1: 
        msg.innerHTML += `<p>${n1} + ${n2} = <strong> ${n1+n2} </strong> </p>` 
        break

        case 2:
        msg.innerHTML += `<p>${n1} - ${n2} = <strong> ${n1-n2} </strong> </p>`
        break

        case 3:
        msg.innerHTML += `<p>${n1} * ${n2} = <strong> ${n1*n2} </strong> </p>`
        break

        case 4:
        msg.innerHTML += `<p>${n1} / ${n2} = <strong> ${n1/n2} </strong> </p>`
        break
        default:
            msg.innerHTML += `<p> OPÇÃO INVÁLIDA </p>`
            break
    }
}