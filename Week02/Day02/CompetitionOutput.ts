import { Cars1, Koenigsegg,Hennessey } from './Inheritance';
import { Competition } from './Polymorphism';

const venom = new Hennessey('Hennessey', 270, 1200000, 'Venom GT');
const agera = new Koenigsegg('Koenigsegg', 273, 2500000, 'Agera RS');

let cars: Cars1[] = [agera,venom]

const competition = new Competition(cars, 1200);
competition.getCars();
competition.race();
console.log(competition.winner());