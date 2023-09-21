// type Hero = {
//     nome: string;
//     vulgo: string;
// }

// function ligar(pessoa: Hero){
//     console.log(pessoa, 'testando o script de execução');
// }

// ligar({
//     nome: 'Rogers',
//     vulgo: 'Capitão América',
// });

// ligar({
//     nome: 'Bruce Waine',
//     vulgo: 'Batman',
// });


// Tipos em variáveis 

// let idade: number = 5;
// let nome: string = 'Alice';
// let isOnline: boolean = true;


// // null
// let nulo: null = null;
// // undefined 
// let indefinido: undefined; 


// // any 
// let qualquer_coisa: any = 'Tudo';
// qualquer_coisa = 5;
// qualquer_coisa = true;

// // void
// let vazio: void; 


// // tipo object | Utilizae types no lugar de object 
// // let pessoa: object = {name: 'John Does', age: 30};

// // console.log(pessoa.name);


// //  type para objeto 
// type Pessoa = {
//     name: string;
//     age: number;
// }

// // let pessoa: Pessoa = { name: 'John Does', age: 30};


// // Arrays
// let frutas: string[] = ['Maça', 'Banana', 'Uva'];
// let numeros: number[] = [5, 7, 9, 12];

// // console.log(frutas);
// frutas.pop();
// // console.log(frutas);

// // 2º maneira de tipar um array 
// let tempo: Array<string> = ['Sol', 'Chuva', 'Nublado'];


// // Multi types
// let infos: (string | number)[] = ['Maça', 15];


// // tupla 
// let pessoa: [nome: string, idade: number] = ['John', 30];

// // modificando elementos de uma tupla
// let informacao: [string, number, boolean] = ["Alice", 30, true];

// informacao[0] = 'Bob'
// informacao[1] = 17
// // informacao[2] = 'false' 
// // ERRO Linha 78: 'string' não pode ser atribuído ao tipo 'boolean'



// //  Date 
// let dataAtual: Date = new Date();
// let aniversario: Date = new Date('2002-7-13 05:00');





// // funções 

// function soma(a: number, b: number): number{
//     return a + b;
// }


// //  função com sobrecarga de tipos

// function callToPhone(phone: number | string) {
//     return phone;
// }



// // Funções assíncronas

// async function getDatabase(id: number): Promise<number>{
//     return id;
// }


// // //  interface 
// // interface  Pessoa{
// //     readonly name: string;
// //     age: number;
// // }
// // let pessoa1: Pessoa = {name: 'John', age: 30};

// // // pessoa1.name = 'Bob'; // Erro ao tentar alterar o name 



// //  Classes 

// class Pessoa{
//     readonly nome: string;
//     idade: number;
//     constructor(nome: string, idade: number){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// let john = new Pessoa('John', 30);

// console.log(john);

// john.idade = 18;

// console.log(john);


// interface Pessoa{
//     nome: string;
//     idade: number;
// }

// class Pessoa{
//     name: string;
//     age: number;
//     city: string;

//     constructor(name: string, age: number, city: string){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     sayHello(): void{
//         console.log(`Hello! My name is ${this.name}, I'm ${this.age} years old, and from ${this.city}`);
//     }

// }

// const p1 = new Pessoa('John Does', 18, 'New York');


// Propriedades opcionais 

// class Usuario{
//     name: string;
//     email: string;
//     telefone?: number | string; // "?"
//     constructor(name: string, email: string, telefone?: number | string){
//         this.name = name;
//         this.email = email;
//         this.telefone = telefone;
//     }
// }

// const p = new Usuario('Bob', 'bob@email.com');

// console.log(p);



// public 

// class CarrinhoDeBrinquedo{
//     cor: string;
//     private pecaSecreta: string;

//     constructor(cor: string, pecaSecreta: string){
//         this.cor = cor;
//         this.pecaSecreta = pecaSecreta;
//     }
// }

// const meuCarrinho = new CarrinhoDeBrinquedo('azul', 'As portas abrem');
// // console.log(meuCarrinho); // Isso gerará um erro, pois 'pecaSecreta' é privado


// class Pessoa {
//     protected name: string;
//     readonly cidade: string;

//     constructor(name: string, cidade: string){
//         this.name = name;
//         this.cidade = cidade;
//     }

//     sayHello(){
//         console.log(`Olá, meu nome é ${this.name}, eu sou de ${this.cidade}`);
//     }

// }


// class Estudante extends Pessoa{
//     constructor(name: string, cidade: string, curso: string){
//         super(name, cidade);
//     }
// }

// const p1 = new Pessoa('Bob', 'SP');

// // p1.cidade = 'bh'; 

// superclass 
class Veiculo {
    marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
}

// subclass 
class Carro extends Veiculo {
    cor: string;
    readonly rodas: number;
    constructor(marca: string, cor: string, rodas: number) {
        super(marca);
        this.cor = cor;
        this.rodas = rodas;
    }
}

const meuCarro = new Carro('Chevolet', 'Preto', 4);

// Isso funciona, pois 'marca' é herdada da classe Veiculo
// console.log(meuCarro.marca); // Chevolet

// Isso funciona, pois 'cor' e 'rodas' são características exclusiva da classe Carro
// console.log(meuCarro.cor); // Preto
// console.log(meuCarro.rodas); // 4

// rodas é readonly, portanto, não podemos alterar o seu valor

// meuCarro.rodas = 2;
// Não é possível atribuir a 'rodas' porque é uma propriedade de somente leitura.


// 


function pegarPrimeiroItem<T>(lista: T[]): T {
    return lista[0];
}

// Criando dois arrays 
const numeros: number[] = [1, 2, 3, 4, 5];
const frutas: string[] = ['maça', 'uva', 'banana'];

// Ao chamar a função, é aqui que o tipo será definido de acordo com a chamada. 
const primeiroNumero: number = pegarPrimeiroItem(numeros); // 1
const primeiraFruta: string = pegarPrimeiroItem(frutas); // "maça"

// console.log(primeiraFruta);
// console.log(primeiroNumero);



// function apiVersion(version: string){
//     return (target: any) => {
//         Object.assign(target.prototype, {__version: version});
//     };
// }

// @apiVersion('1.10')
// class Api{};

// const api = new Api();
// console.log(api.__version);



// Definindo o decorator 
function Domesticated(target: Function) {
    // Adiciona uma propriedade isDomesticated à classe
    target.prototype.IsDomesticated = true;
}

// usando o decorator em uma classe
@Domesticated
class Animal {
    constructor(public nome: string){
        this.nome = nome;
    }
}


// Criando uma instância da classe
const meuAnimal = new Animal('Cachorro');

// console.log(meuAnimal.IsDomesticated); // true 


// decorator function 
function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key] // produtos

        // getter: exibe o valor
        const getter = () => _value;

        // setter: lógica para setar um valor 
        const setter = (value: string) => {
            if(value.length <= 3){
                throw new Error(`Tamanho menor que ${length}`);
            }else{
                _value = value;
            }
        }
        
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }

}


// attribute decorator 
class Api {
    @minLength(3)
    name: string;
    constructor(name: string) {
        this.name = name; 
    }
}

const api = new Api('pro');



console.log(api.name); // 'produtos'


  
