// Steg 1: Arrayer
const inventory: string[] = ["Äpple", "Banan", "Apelsin"];

// ny leverans
inventory.push("Päron");

// sista varan blev uppköpt
inventory.pop();

// lägga till mango på andra platsen
inventory.splice(1, 0, "Mango");

console.log(inventory);

// Steg 2: Loopar
// for...of varor i lager
for (const item of inventory) {
  console.log(`Vara i lager: ${item}`);
}

// forloop vara per hylla
for (let i = 0; i < inventory.length; i++) {
  const item: string = inventory[i];

  console.log(`Hylla ${i}: ${item}`);
}

// Steg 3: Vilkor
const stockCount: number = inventory.length;

// lager status
const inventoryStatus: string =
  stockCount >= 3
    ? "Lagret är fullt."
    : stockCount === 0
      ? "Lagret är tomt!"
      : "Normal nivå på lagret.";

console.log(inventoryStatus);

// Steg 4: Kassan
const isMember: boolean = false;
const hasCoupon: boolean = true;
let totalPrice: number = 400;
let message: string;

if (isMember && hasCoupon) {
  // super-rabatt
  message = "20% rabbat!";
  totalPrice -= totalPrice * 0.2;
} else if (isMember || hasCoupon) {
  // liten-rabatt
  message = "10% Rabbat!";
  totalPrice -= totalPrice * 0.1;
} else {
  // ingen-rabatt
  message = "Ordinarie oris!";
}

console.log(message);
console.log(`Total att betala: ${totalPrice} kr`);

// Steg 5: Jämförelser
// Kommer ej att kompileras då man kan inte utföra strict jämförelse mellan olika typ/er
// const inputPin: string = "1234";
// const correctPin: number = 1234;
// let loginMsg: string;
//
// if (inputPin === correctPin) {
//   loginMsg = "Inloggad!";
// } else {
//   loginMsg = "Fel PIN eller datatyp!";
// }
//
// console.log(loginMsg);
