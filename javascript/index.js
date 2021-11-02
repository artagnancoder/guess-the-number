/* As funções "changeNumberCenter", "changeNumberLeft" e "changeNumberRight" fazem a manipulação da renderização das div's que formam os displays de 7 segmentos. A opacidade da div é controlada baseada pelo número inserido pelo o usuário.*/

let changeNumberCenter = (num) => {
    if (num == 0) {
        document.getElementById('one-center').setAttribute("style", "opacity:1");
        document.getElementById('two-center').setAttribute("style", "opacity:1");
        document.getElementById('three-center').setAttribute("style", "opacity:1");
        document.getElementById('four-center').setAttribute("style", "opacity:1");
        document.getElementById('five-center').setAttribute("style", "opacity:1");
        document.getElementById('six-center').setAttribute("style", "opacity:1");
        document.getElementById('seven-center').setAttribute("style", "opacity:0.2");

    } else if (num == 1) {
        document.getElementById("one-center").setAttribute("style", "opacity:0.2")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:0.2")
        document.getElementById("five-center").setAttribute("style", "opacity:0.2")
        document.getElementById("six-center").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-center").setAttribute("style", "opacity:0.2")

    } else if (num == 2) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:0.2")
        document.getElementById("four-center").setAttribute("style", "opacity:1")
        document.getElementById("five-center").setAttribute("style", "opacity:0.2")
        document.getElementById("six-center").setAttribute("style", "opacity:1")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")

    } else if (num == 3) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:1")
        document.getElementById("five-center").setAttribute("style", "opacity:0.2")
        document.getElementById("six-center").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")
    }
    else if (num == 4) {
        document.getElementById("one-center").setAttribute("style", "opacity:0.2")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:0.2")
        document.getElementById("five-center").setAttribute("style", "opacity:1")
        document.getElementById("six-center").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")

    } else if (num == 5) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:0.2")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:1")
        document.getElementById("five-center").setAttribute("style", "opacity:1")
        document.getElementById("six-center").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")

    } else if (num == 6) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:0.2")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:1")
        document.getElementById("five-center").setAttribute("style", "opacity:1")
        document.getElementById("six-center").setAttribute("style", "opacity:1")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")

    } else if (num == 7) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:0.2")
        document.getElementById("five-center").setAttribute("style", "opacity:0.2")
        document.getElementById("six-center").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-center").setAttribute("style", "opacity:0.2")

    } else if (num == 8) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:1")
        document.getElementById("five-center").setAttribute("style", "opacity:1")
        document.getElementById("six-center").setAttribute("style", "opacity:1")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")

    } else if (num == 9) {
        document.getElementById("one-center").setAttribute("style", "opacity:1")
        document.getElementById("two-center").setAttribute("style", "opacity:1")
        document.getElementById("three-center").setAttribute("style", "opacity:1")
        document.getElementById("four-center").setAttribute("style", "opacity:1")
        document.getElementById("five-center").setAttribute("style", "opacity:1")
        document.getElementById("six-center").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-center").setAttribute("style", "opacity:1")

    } else if (num == null) {
        document.getElementById("one-right").setAttribute("style", "opacity:0.2")
        document.getElementById("two-right").setAttribute("style", "opacity:0.2")
        document.getElementById("three-right").setAttribute("style", "opacity:0.2")
        document.getElementById("four-right").setAttribute("style", "opacity:0.2")
        document.getElementById("five-right").setAttribute("style", "opacity:0.2")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:0.2")
    }
}

let changeNumberLeft = (num1) => {
    if (num1 == 0) {
        document.getElementById('one-left').setAttribute("style", "opacity:1");
        document.getElementById('two-left').setAttribute("style", "opacity:1");
        document.getElementById('three-left').setAttribute("style", "opacity:1");
        document.getElementById('four-left').setAttribute("style", "opacity:1");
        document.getElementById('five-left').setAttribute("style", "opacity:1");
        document.getElementById('six-left').setAttribute("style", "opacity:1");
        document.getElementById('seven-left').setAttribute("style", "opacity:0.2");

    } else if (num1 == 1) {
        document.getElementById("one-left").setAttribute("style", "opacity:0.2")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:0.2")
        document.getElementById("five-left").setAttribute("style", "opacity:0.2")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:0.2")

    } else if (num1 == 2) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:0.2")
        document.getElementById("four-left").setAttribute("style", "opacity:1")
        document.getElementById("five-left").setAttribute("style", "opacity:0.2")
        document.getElementById("six-left").setAttribute("style", "opacity:1")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")

    } else if (num1 == 3) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:1")
        document.getElementById("five-left").setAttribute("style", "opacity:0.2")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")
    }
    else if (num1 == 4) {
        document.getElementById("one-left").setAttribute("style", "opacity:0.2")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:0.2")
        document.getElementById("five-left").setAttribute("style", "opacity:1")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")

    } else if (num1 == 5) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:0.2")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:1")
        document.getElementById("five-left").setAttribute("style", "opacity:1")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")

    } else if (num1 == 6) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:0.2")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:1")
        document.getElementById("five-left").setAttribute("style", "opacity:1")
        document.getElementById("six-left").setAttribute("style", "opacity:1")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")

    } else if (num1 == 7) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:0.2")
        document.getElementById("five-left").setAttribute("style", "opacity:0.2")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:0.2")

    } else if (num1 == 8) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:1")
        document.getElementById("five-left").setAttribute("style", "opacity:1")
        document.getElementById("six-left").setAttribute("style", "opacity:1")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")

    } else if (num1 == 9) {
        document.getElementById("one-left").setAttribute("style", "opacity:1")
        document.getElementById("two-left").setAttribute("style", "opacity:1")
        document.getElementById("three-left").setAttribute("style", "opacity:1")
        document.getElementById("four-left").setAttribute("style", "opacity:1")
        document.getElementById("five-left").setAttribute("style", "opacity:1")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:1")

    } else if (num1 == null) {
        document.getElementById("one-left").setAttribute("style", "opacity:0.2")
        document.getElementById("two-left").setAttribute("style", "opacity:0.2")
        document.getElementById("three-left").setAttribute("style", "opacity:0.2")
        document.getElementById("four-left").setAttribute("style", "opacity:0.2")
        document.getElementById("five-left").setAttribute("style", "opacity:0.2")
        document.getElementById("six-left").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-left").setAttribute("style", "opacity:0.2")
    }
}

let changeNumberRight = (num2) => {
    if (num2 == 0) {
        document.getElementById('one-right').setAttribute("style", "opacity:1");
        document.getElementById('two-right').setAttribute("style", "opacity:1");
        document.getElementById('three-right').setAttribute("style", "opacity:1");
        document.getElementById('four-right').setAttribute("style", "opacity:1");
        document.getElementById('five-right').setAttribute("style", "opacity:1");
        document.getElementById('six-right').setAttribute("style", "opacity:1");
        document.getElementById('seven-right').setAttribute("style", "opacity:0.2");

    } else if (num2 == 1) {
        document.getElementById("one-right").setAttribute("style", "opacity:0.2")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:0.2")
        document.getElementById("five-right").setAttribute("style", "opacity:0.2")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:0.2")

    } else if (num2 == 2) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:0.2")
        document.getElementById("four-right").setAttribute("style", "opacity:1")
        document.getElementById("five-right").setAttribute("style", "opacity:0.2")
        document.getElementById("six-right").setAttribute("style", "opacity:1")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")

    } else if (num2 == 3) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:1")
        document.getElementById("five-right").setAttribute("style", "opacity:0.2")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")
    }
    else if (num2 == 4) {
        document.getElementById("one-right").setAttribute("style", "opacity:0.2")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:0.2")
        document.getElementById("five-right").setAttribute("style", "opacity:1")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")

    } else if (num2 == 5) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:0.2")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:1")
        document.getElementById("five-right").setAttribute("style", "opacity:1")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")

    } else if (num2 == 6) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:0.2")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:1")
        document.getElementById("five-right").setAttribute("style", "opacity:1")
        document.getElementById("six-right").setAttribute("style", "opacity:1")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")

    } else if (num2 == 7) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:0.2")
        document.getElementById("five-right").setAttribute("style", "opacity:0.2")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:0.2")

    } else if (num2 == 8) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:1")
        document.getElementById("five-right").setAttribute("style", "opacity:1")
        document.getElementById("six-right").setAttribute("style", "opacity:1")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")

    } else if (num2 == 9) {
        document.getElementById("one-right").setAttribute("style", "opacity:1")
        document.getElementById("two-right").setAttribute("style", "opacity:1")
        document.getElementById("three-right").setAttribute("style", "opacity:1")
        document.getElementById("four-right").setAttribute("style", "opacity:1")
        document.getElementById("five-right").setAttribute("style", "opacity:1")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:1")

    } else if (num2 == null) {
        document.getElementById("one-right").setAttribute("style", "opacity:0.2")
        document.getElementById("two-right").setAttribute("style", "opacity:0.2")
        document.getElementById("three-right").setAttribute("style", "opacity:0.2")
        document.getElementById("four-right").setAttribute("style", "opacity:0.2")
        document.getElementById("five-right").setAttribute("style", "opacity:0.2")
        document.getElementById("six-right").setAttribute("style", "opacity:0.2")
        document.getElementById("seven-right").setAttribute("style", "opacity:0.2")
    }
}

window.onload = function () {
    const fnClick = (userInput) => {

        userInput = document.getElementById("inputId").value;

        let processedInput = userInput.toString().split("")

        /*A função a seguir verifica o input do usuário e chama as funções dos displays.*/

        if (processedInput.length === 1) {
            changeNumberCenter(processedInput[0])
            changeNumberLeft(null)
            changeNumberRight(null)

        } else if (processedInput.length === 2) {
            changeNumberLeft(processedInput[0])
            document.getElementById('counter-div-left').setAttribute("style", "display:initial");
            changeNumberCenter(processedInput[1])
            changeNumberRight(null)
        } else if (processedInput.length === 3) {
            changeNumberLeft(processedInput[0])
            document.getElementById('counter-div-left').setAttribute("style", "display:initial");
            changeNumberCenter(processedInput[1])
            changeNumberRight(processedInput[2])
            document.getElementById('counter-div-right').setAttribute("style", "display:initial");

        } else if (processedInput.length === 0) {
            changeNumberCenter(0)
            changeNumberLeft(null)
            changeNumberRight(null)
        }

        document.getElementById('inputId').value = null;

        /*Lógica de comparação entre o valor inserido pelo o usuário e o número retornado pela API.*/

        if (userInput > data[0]) {

            document.getElementById('tip').style.color = "Orange"

            return document.getElementById('tip').innerHTML = "É menor!";

        } else if (userInput < data[0]) {

            document.getElementById('tip').style.color = "Orange"

            return document.getElementById('tip').innerHTML = "É maior!";
        } else {

            document.getElementById("sendButton").disabled = true;
            document.getElementById("sendButton").setAttribute("style", "opacity:0.5")
            document.getElementById("inputId").setAttribute("style", "opacity:0.5")
            document.getElementById('tip').style.color = "#32BF00"
            document.getElementById("play").style.display = "block"

            console.log(document.getElementsByClassName("color"));

            for (let doc of document.getElementsByClassName("color")) {
                doc.style.backgroundColor = '#32BF00'
            }

            return document.getElementById('tip').innerHTML = "Você acertou!!!!"
        }
    }

    let data = [];

    /*Função que consome os dados da API e realiza o tratamento do erro.*/

    async function getValue() {

        const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300');
        const data = await response.json();
        addData(data)

        if (data.hasOwnProperty('StatusCode')) {
            document.getElementById('tip').innerHTML = "ERRO!"
            document.getElementById('tip').style.color = "#CC3300"
            changeNumberLeft(5)
            changeNumberCenter(0)
            changeNumberRight(2)
            document.getElementById('counter-div-left').setAttribute("style", "display:initial");
            document.getElementById('counter-div-right').setAttribute("style", "display:initial");
            document.getElementById("inputId").setAttribute("style", "opacity:0.5")
            document.getElementById("play").style.display = "block"
            for (let doc of document.getElementsByClassName("color")) {
                doc.style.backgroundColor = '#CC3300'
            }
        }
    }

    function addData(object) {

        data.push(object.value);

    }

    getValue()


    const playAgain = document.getElementById('play')
    const sendButton = document.getElementById('sendButton')

    const reload = () => {
        document.location.reload(true)
    }

    playAgain.addEventListener('click', reload)
    sendButton.addEventListener("click", fnClick)

}