export class Product {
  public id: number;
  public name: string;
  public brand: string;
  public type: string;
  public concentration: string;
  public concentration_unit: string;
  public image: string;

  constructor(id: number, name: string, brand: string, type: string, concentration: string, concentration_unit: string, image: string) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.type = type;
    this.concentration = concentration;
    this.image = image;
    this.concentration_unit = concentration_unit;
  }
}
