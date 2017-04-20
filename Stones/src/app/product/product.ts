export class Product {
    id: number;
    name: string;
    price: number;
    weight: number;

    constructor(id, name, price?, weight?) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}
