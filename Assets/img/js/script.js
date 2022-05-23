/* Case sentive: Reconhece letras maíusculas e minúsculas */

/*Podemos estar acessando o DOM  também por:
por tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por classes: getElementsByClassName()
por Seletor: querySelector() */

/*estou acessando o elemento pelo ID nome através do DOM */
let nome = window.document.getElementById("nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = "100%"
email.style.width = "100%"
/* serve para completar a barra nome/email até o final, no caso 100% */

/*reconhece se o nome tem menos de 2/3 letras, e informar se está valido ou não */
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 2) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"

    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
    /* caso queira colocar a cor em nome válido, informar dentro das aspas */
        nomeOk = true
    }
   
}
/* indexOf - se dentro do email não estiver o @ me informe... */    /* OU é igual a || */
function validaEmail() {
    let txtEmail = document.querySelector ("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf (".") ==-1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"

    }else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
     
}

function validaAssunto () {
    let txtAssunto = document.querySelector ("#txtAssunto")

    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = "Texto ultrapassa o limite de 100 caracteres, digite no máximo 100"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
    
}

function enviar() {
    if (nomeOk ==true && emailOk == true && assuntoOk == true) {
        alert ("Mensagem enviada com sucesso!!")
/*Se o nome for igual a true, o email for igual a true e o assunto igual a true me mande um alerta */
    } else
        alert ("Preencha os dados corretamente para recebermos sua mensagem")
    
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.heigth ="600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.heigth ="250px"
}

