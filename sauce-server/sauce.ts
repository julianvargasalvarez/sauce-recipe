export function sauceFor(food: string): string {
  const foodSaucesMap = new Map<string, string>();

  foodSaucesMap.set("fries", "ketchup");
  foodSaucesMap.set("rice", "honey-mustard");
  foodSaucesMap.set("nuggets", "szechuan");

  return foodSaucesMap.get(food) || "ketchup";
}
