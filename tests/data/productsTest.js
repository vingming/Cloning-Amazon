import {Product,Clothing,Appliance} from "../../data/products.js";

describe('test suite: products', ()=>{

  it('products class', ()=>{
    const product1 = new Product(
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });

    expect(product1.id)
      .toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(product1.image)
      .toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
    expect(product1.name)
      .toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
    expect(product1.rating.stars)
      .toEqual(4.5);
    expect(product1.rating.count)
      .toEqual(87);
    expect(product1.priceCents)
      .toEqual(1090);
    expect(product1.getStarsUrl())
      .toEqual('images/ratings/rating-45.png');
    expect(product1.getPrice())
      .toEqual('$10.90');
  });

  it('product-clothing class', ()=>{
    const product2 = new Clothing(
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });

    expect(product2.id)
      .toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
    expect(product2.image)
      .toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
    expect(product2.name)
      .toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
    expect(product2.rating.stars)
      .toEqual(4.5);
    expect(product2.rating.count)
      .toEqual(56);
    expect(product2.priceCents)
      .toEqual(799);
    expect(product2.sizeChartLink)
      .toEqual('images/clothing-size-chart.png');
    expect(product2.getStarsUrl())
      .toEqual('images/ratings/rating-45.png');
    expect(product2.getPrice())
      .toEqual('$7.99');
    expect(product2.extraInfoHTML())
      .toContain('images/clothing-size-chart.png');
  });

  it('product-appliances class', ()=>{
    const product3 = new Appliance(
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliances",
      instructionsLink: "images/appliance-instructions.png",
      warrantyLink: "images/appliance-warranty.png"
    });

    expect(product3.id)
      .toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
    expect(product3.image)
      .toEqual("images/products/black-2-slot-toaster.jpg");
    expect(product3.name)
      .toEqual("2 Slot Toaster - Black");
    expect(product3.rating.stars)
      .toEqual(5);
    expect(product3.rating.count)
      .toEqual(2197);
    expect(product3.priceCents)
      .toEqual(1899);
      expect(product3.instructionsLink)
      .toEqual('images/appliance-instructions.png');
      expect(product3.warrantyLink)
      .toEqual('images/appliance-warranty.png');
    expect(product3.getStarsUrl())
      .toEqual('images/ratings/rating-50.png');
    expect(product3.getPrice())
      .toEqual('$18.99');
    expect(product3.extraInfoHTML())
      .toContain('images/appliance-instructions.png');
      expect(product3.extraInfoHTML())
    .toContain('images/appliance-warranty.png');
  });
});