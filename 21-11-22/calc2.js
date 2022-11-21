const argvs = process.argv 
const argv = argvs.slice(2) 
const newArg = argv.slice(1)

function operations(operator, ...y) {
    let z = newArg[0]
    switch (operator){
        case "somma": 
            z = 0 ;
            for (let i in y) {z += parseInt(y[i])}
            break
        case "sottrazione":
            for (i=1; i<newArg.length; i++) {z -= parseInt(y[i])}
            break
        case "moltiplicazione":
            for (i=1; i<newArg.length; i++) {z *= parseInt(y[i])}
            break
        case "divisione":
            for (i=1; i<newArg.length; i++) {z /= parseInt(y[i])}
            break
        default:
            z = NaN
            break
}

return console.log(z)

}

operations(argv[0], ...newArg)