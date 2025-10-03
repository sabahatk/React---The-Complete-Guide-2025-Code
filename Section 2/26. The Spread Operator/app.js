const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];
const mergedhobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = {
  name: "Max",
  age: 34,
};

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(extendedUser);
