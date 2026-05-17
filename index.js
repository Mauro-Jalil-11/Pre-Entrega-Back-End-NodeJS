import fetch from "node-fetch";

const args = process.argv.slice(2);
const method = args[0];
const endpoint = args[1];
const extraArgs = args.slice(2);

const BASE_URL = "https://fakestoreapi.com/";

async function main() {
  try {
    let response;

    if (method === "GET") {
      response = await fetch(BASE_URL + endpoint);
    } else if (method === "POST") {
      const [title, price, category] = extraArgs;
      response = await fetch(BASE_URL + endpoint, {
        method: "POST",
        body: JSON.stringify({ title, price, category }),
        headers: { "Content-Type": "application/json" },
      });
    } else if (method === "DELETE") {
      response = await fetch(BASE_URL + endpoint, { method: "DELETE" });
    } else {
      console.log("Método no soportado");
      return;
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();

