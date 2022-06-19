const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const abc = []

const organize = () => { 
rl.question('digite as propiedades do css que desejar: ', (answer) => {
if (answer == 'SAIR') {
    console.log(("resultado:" + " " + abc.sort().join(' \n ')))
    return rl.close()
} else {
    abc.push(answer)
}organize()})

}