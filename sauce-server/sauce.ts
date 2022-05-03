export function sauceFor(): string {
  const foodSaucesMap = new Map<string, string>();

  foodSaucesMap.set("", "");
  foodSaucesMap.set("", "");
  foodSaucesMap.set("", "");

  return foodSaucesMap.get(food);
}
