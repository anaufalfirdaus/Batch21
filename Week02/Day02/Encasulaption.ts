class Cars {
  private brand: string;
  private speed: number;
  private price: number;

  constructor(brand: string, speed: number, price: number) {
    this.brand = brand;
    this.speed = speed;
    this.price = price;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getBrand(): string {
    return this.brand;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }

  getSpeed(): number {
    return this.speed;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getPrice(): string {
    return `$${this.price}`;
  }

  getName(): string {
    return this.brand;
  }

  move(): void {
    console.log(`${this.brand} berjalan dengan kencang`);
  }
}

// const ferraris = new Cars();

const ferraris = new Cars('Ferrari', 220, 1000000);

// ferraris.brand = "Ferrari";
// ferraris.speed = 220;
// ferraris.price = 1000000;

ferraris.setSpeed(1000);
console.log(ferraris.getSpeed());
ferraris.move();

