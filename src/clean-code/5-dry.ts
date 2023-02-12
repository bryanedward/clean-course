type Size = "" | "S";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}
  toString() {
    const stringPropierte = [""];
    return "OKO";
  }
}

() => {
  const bluPants = new Product("ok");
  console.log("🚀 ~ file: 5-dry.ts:11 ~ bluPants", bluPants);
};
