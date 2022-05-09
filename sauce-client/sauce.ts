export async function sauceFor(food: string): Promise<string> {
  const jsonResponse = await fetch(`http://localhost:5000/sauce/?_for=${food}`);
  const jsonData = await jsonResponse.json();
  return jsonData.sauce_name;
}
