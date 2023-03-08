import { Cars1, Koenigsegg,Hennessey } from './Inheritance';
import { Competition } from './Polymorphism';

interface Lamborghini{
    model: string;
    setBrand(brand:string):void
    getSpeed():number
}

class Aventador implements Lamborghini {
    brand: string = 'Lamborghini';
    model: string;
    speed: number;
    price: number;

    constructor(model: string, speed: number, price: number) {
        this.model = model;
        this.speed = speed;
        this.price = price;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    };

    getBrand(brand: string): string {
        return this.brand;
    };

    setSpeed(speed: number): void {
        this.speed = speed;
    };

    getSpeed(): number {
        return this.speed;
    }

    setPrice(price: number): void {
        this.price = price;
    };

    getPrice(): string {
        return `$${ this.price }`;
    }

    move(): void {
        console.log(`${ this.getName() } berjalan dengan kecepatan ${ this.getSpeed() } mph`);
    }

    getName(): string {
        return `${ this.brand } ${ this.model }`;
    }
}

const aventador = new Aventador('Aventador SVJ Roadster', 275, 650000);
const venom = new Hennessey('Hennessey', 270, 1200000, 'Venom GT');
const agera = new Koenigsegg('Koenigsegg', 273, 2500000, 'Agera RS');
let cars: Cars1[] = [venom, agera, aventador]

const competition = new Competition(cars, 1200);
competition.getCars();
competition.race();
console.log(competition.winner());