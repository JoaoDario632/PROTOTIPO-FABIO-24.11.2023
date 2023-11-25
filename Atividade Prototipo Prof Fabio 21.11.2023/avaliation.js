function avaliar() {
    var nota = document.getElementById('nota').value
    nota = parseFloat(nota)
    if (nota === '') {
        document.getElementById('resposta').innerHTML = 'Digite um número para poder validar sua avaliação '
    } else {
            if (nota >= 1 && nota <= 6) {
                document.getElementById('resposta').innerHTML = `Agradecemos o seu feedback!`
            } else {
                document.getElementById('resposta').innerHTML = `Ficamos felizes por você ter gostado! `
            }
            if (nota > 10) {
                document.getElementById('resposta').innerHTML = `Nota inválida, digite até 10`
            }
            if (nota < 0) {
                document.getElementById('resposta').innerHTML = `Nota inválida digite uma nota até 10`
            }
        } 
        document.getElementById('nota').value = ''
    }

