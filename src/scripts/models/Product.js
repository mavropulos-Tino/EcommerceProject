export class Product {
  constructor(
    title, thumbnail, description,
    brand, category, price,
    tags, reviews, rating,
    dimensions, weight,
    availabilityStatus, returnPolicy,
    id
  ) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.description = description;

    this.brand = brand;
    this.category = category;
    this.price = price;

    this.tags = tags;
    this.reviews = reviews;
    this.rating = rating;

    this.dimensions = dimensions;
    this.weight = weight;

    this.availabilityStatus = availabilityStatus;
    this.returnPolicy = returnPolicy;

    this.id = id;
  }
}