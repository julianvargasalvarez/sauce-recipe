export async function sauceFor(): Promise<string> {
  const jsonResponse = await fetch(`http://localhost:5000/`);
  const jsonData = await jsonResponse.json();
  return jsonData.;
}
