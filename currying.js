function createIcecream(coneType, flavor, topping) {
  const icecreamCone = `A ${coneType} cone with ${flavor} ice cream and ${topping} on top`;
  console.log(icecreamCone);
}

function curry(func) {
  // function to curry is supplied as the argument
  return function (a) {
    return function (b) {
      return function (c) {
        return func(a, b, c);
      };
    };
  };
}

const curriedIcecream = curry(createIcecream);

curriedIcecream("sugar")("chocolate")("rainbow sprinkles");

const sugarCone = curriedIcecream("sugar");
sugarCone("vanilla")("rainbow sprinkles");

const chocolateChip = sugarCone("chocolate chip");
chocolateChip("chocolate sprinkles");
