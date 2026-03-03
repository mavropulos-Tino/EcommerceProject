export class Product {
    constructor(data) {
        this.thumbnail = data.thumbnail;
        this.title = data.title;
        this.category = data.category;
        this.rating = data.rating;
        this.reviews = data.reviews;
        this.price = data.price;
        this.id = data.id;
    }
}

export class ProductPage {
    constructor(data) {
        this.title = data.title;
        this.thumbnail = data.thumbnail;
        this.images = data.images;
        this.description = data.description;
        this.brand = data.brand;
        this.category = data.category;
        this.price = data.price;
        this.tags = data.tags;
        this.reviews = data.reviews;
        this.rating = data.rating;
        this.dimensions = data.dimensions;
        this.weight = data.weight;
        this.availabilityStatus = data.availabilityStatus;
        this.returnPolicy = data.returnPolicy;
        this.warrantyInformation = data.warrantyInformation;
        this.shippingInformation = data.shippingInformation;
    }
}