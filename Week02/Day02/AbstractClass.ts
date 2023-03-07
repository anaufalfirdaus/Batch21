export abstract class Cars2 {
    protected brand: string;
    protected speed: number;
    protected price: number;
    
  
    constructor(brand: string, speed: number, price: number) {
      this.brand = brand;
      this.speed = speed;
      this.price = price;
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getSpeed(): number {
      return this.speed;
    }
  
    getPrice(): string {
      return `$${this.price}`;
    }
  
    abstract getName(): string;
  
    abstract move(): void;
  }
  
  export class Hennessey1 extends Cars2 {
    private model: string;
  
    constructor(brand: string, speed: number, price: number, model: string) {
      super(brand, speed, price);
      this.model = model;
    }
    /* Overriding */
    move(): void {
      console.log(
        `${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`
      );
    }
  
    getName(): string {
      return `${this.brand} ${this.model}`;
    }
  }
  
  export class Koenigsegg1 extends Cars2 {
    private model: string;
  
    constructor(brand:string, speed: number, price: number, model: string) {
      super(brand, speed, price);
      this.model = model;
    }
    /* Overriding */
    move(): void {
      console.log(
        `${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`
      );
    }
  
    getName(): string {
      return `${this.brand} ${this.model}`;
    }
  }