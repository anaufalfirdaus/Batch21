import {Cars2, Hennessey1,Koenigsegg1} from "./AbstractClass";

const venoms = new Hennessey1('Hennessey', 270, 1200000, 'Venom GT');
const ageras = new Koenigsegg1('Koenigsegg', 273, 2500000, 'Agera RS');
const Tesla = new Cars2('Tesla', 250, 250000);
venoms.move();
ageras.move();