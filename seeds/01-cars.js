exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "JF1GF4350XH802545",
          make: "Subaru",
          model: "Impreza",
          mileage: 100596,
          transmission: "V8",
        },
        {
          vin: "1B3BG56P3FX563681",
          make: "Dodge",
          model: "Diplomat",
          mileage: 50626,
          transmission: "V8",
        },
        {
          vin: "JHMZA2H4XDT000050",
          make: "Honda",
          model: "Fit",
          mileage: 99256,
        },
        {
          vin: "JH4DB1640MS004246",
          make: "Acura",
          model: "Integra",
          mileage: 596,
        },
        {
          vin: "1MEBP67D5BF617327",
          make: "Mercury",
          model: "Capri",
          mileage: 250689,
        },
      ]);
    });
};
