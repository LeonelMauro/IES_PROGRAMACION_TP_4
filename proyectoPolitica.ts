
class PartidoPolitico{

    presidentes: Presidente[];
    gobernadores: Gobernador  [];
    legisladores:Legisladores[];
    votantes: Votantes[];
    votos : number;

    constructor(){
        this.presidentes = [];
        this.gobernadores = [];
        this.legisladores = [];
        this.votantes = [];
        this.votos = 0
      }

    agregarPresidente(presidente:Presidente, votante: Votantes):void{
        this.presidentes.push(presidente);
        this.votantes.push(votante);
    }
    agregarGobernador(gobernador:Gobernador, votante: Votantes):void{
        this.gobernadores.push(gobernador);
        this.votantes.push(votante);
    }
    agregarLegisladores(legislador:Legisladores, votante: Votantes):void{
        this.legisladores.push(legislador);
        this.votantes.push(votante);
    }
    agregarVotante(votante: Votantes): void {
        this.votantes.push(votante);
      }
    agregarVoto(): void {
        this.votos++;
      }
    lista_presi(){
        console.log('---------Listas de candidatos a presidente:----------')
        for (let i = 0 ; i< this.presidentes.length;i ++){
            const list_presi = this.presidentes
            console.log('Nombre del candidato a Presidente',
             this.presidentes[i].name,
              'del partido politico', this.presidentes[i].partidoPolitico);

        }
    }
    lista_gober(){
        console.log('---------Listas de candidatos a gobernador:----------')
        for (let i = 0 ; i< this.gobernadores.length;i ++){
            const list_gober = this.gobernadores
            console.log('nombre del candidato a Gobernador ', 
            this.gobernadores[i].name,
            ' del partido politico',
            this.gobernadores[i].partidoPolitico)
        }
    }
    lista_legis(){
        console.log('---------Listas de candidatos a lesgiladores:----------')
        for (let i = 0 ; i< this.legisladores.length;i ++){
            const list_legis = this.legisladores
            console.log('Los candidatos a Legisladores ',
            this.legisladores[i].name, 
            'del partido politico ',
            this.legisladores[i].partidoPolitico)
        }
    }



}

class Presidente {
    name: string;
    partidoPolitico: string;

    constructor(name:string, partidoPolitico:string){
        this.name=name;
        this.partidoPolitico=partidoPolitico;
    }
}

class Gobernador {
    name: string;
    partidoPolitico: string;

    constructor(name:string, partidoPolitico:string){
        this.name=name;
        this.partidoPolitico=partidoPolitico;
    }
}class Legisladores {
    name: string;
    partidoPolitico: string;

    constructor(name:string, partidoPolitico:string){
        this.name=name;
        this.partidoPolitico=partidoPolitico;
    }
}
class Votantes{
    nombre: string;

    constructor(nombre:string){
        this.nombre
    }
}
const votante1 = new Votantes('Magali');
const votante2 = new Votantes('Pedro');
const votante3 = new Votantes('Soledad');




const partido= new PartidoPolitico()


const Candidato1 = new Presidente('Leito','Nazi');
partido.agregarVoto();
const Candidato2 = new Presidente('Carlos','Gringo')
partido.agregarVoto();
const Candidato3 = new Presidente('Parce','Peroncho')
partido.agregarVoto();
partido.agregarPresidente(Candidato1,votante1)
partido.agregarPresidente(Candidato2,votante3)
partido.agregarPresidente(Candidato3,votante2)
partido.lista_presi()

console.log('---------------------')

const Candidato_Gober1 = new Gobernador('Samuel','Nazi')
partido.agregarVoto();
const Candidato_Gober2 = new Gobernador('Ricardo','Nazi')
partido.agregarVoto();
partido.agregarGobernador(Candidato_Gober1,votante3)
partido.agregarGobernador(Candidato_Gober2,votante1)
partido.lista_gober()

console.log('---------------------')

const Candidato_legis1= new Presidente('Lorena','Pronista')
partido.agregarVoto();
const Candidato_legis2= new Presidente('Melisa','Libertariio')
partido.agregarVoto();
const Candidato_legis3= new Presidente('Gladys','Radical')
partido.agregarVoto();

partido.agregarLegisladores(Candidato_legis1,votante1)
partido.agregarLegisladores(Candidato_legis2,votante2)
partido.agregarLegisladores(Candidato_legis3,votante3)
partido.lista_legis()

console.log('Cantidad de votos en TOTAL: ', partido.votos)