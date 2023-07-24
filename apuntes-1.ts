
//declarar tipos en una funcion
function saludar(persona:{name:string,age:number}){
  const {name,age} = persona
  console.log(`Hola ${name}, tenes ${age} años `)
}

saludar({name:'pepe',age:2})

//arrow functions
const sumar = (a:number, b:number): number => {
  return a+b
}

// type alias
//sirve para crear un tipo de dato con parametros ya declarados
//si tiene un signo de pregunta es una propiedad opcional
//readonly hace q no se pueda mutar la propiedad en codigo de desarrollo
type Hero = {
  readonly id? : number
  name : string
  age : number
  isActive? : boolean
}

let spiderman: Hero = {
  name:'spiderman',
  age:18
}

const createHero = (name:string,age:number):Hero =>  {
  return {name,age}
}

let hulk = createHero('hulk',20)
let ironMan: Hero = {name:'ironman', age:12, isActive:false, id:20}

// el signo de pregunta hace una condicional : optional chaining operator
// si existe la propiedad id ejecuta la funcion toString()
hulk.id?.toString()

//template union type 
//define como tiene que ser un tipo de dato
type FechaNacimiento = `${string}/${string}/${string}`

let miNacimiento: FechaNacimiento = '14/02/2000'

//union types
//el | representa un 'o', en este caso heropowerscale puede definirse como alguno de los 3 valores
type HeroPowerScale = 'debil' | 'intermedio' | 'fuerte'


//intersection types
//armo un tipo juntando dos tipos
type HeroInfo = Hero & HeroPowerScale


//-----------

function createAdress () {
  return {
    planet: 'Tierra',
    city: 'Buenos Aires'
  }
}

//typeof devuelve el tipo y el retorno de createAdress
//ReturnType recupera el retorno de createAdress y lo asigna para adress
type Adress = ReturnType<typeof createAdress>

//declarar arrays : hay dos formas de declarar arrays y su tipo
const languages: string[] = []
const lenguajes: Array<string> = []

//este es un array que sus elementos puede ser tanto de tipo string o number
const colours: (string | number)[] = []

//este es un array que sus elementos pueden ser todos tipo string o todos tipo number
const colores: string[] | number[] = []

//tuplas

//defino el tipo de cell value
type CellValue = 'X' | 'O' | ''

//defino como seria el game board (matrix de 3x3) en una tupla que contiene cellvalues
type GameBoard = [
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue]
]

const game: GameBoard = [
  ['X','X','O'],
  ['X','X','O'],
  ['X','X','O']
]