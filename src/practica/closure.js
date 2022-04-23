const a = 'Hey ! - '

function global() {
    const b = '¿Que'
    function local() {
        const c = ' Tal?'
        return a + b + c
    }
    return local
}

const closure = global()
console.log(closure())

const miContador = (function() {
    let _contador = 0

    function incrementar() {
        return _contador++
    }

    function decrementar(){
        return _contador--
    }

    function valor() {
        return _contador
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})()
console.log(miContador.incrementar())

console.log(miContador.valor())