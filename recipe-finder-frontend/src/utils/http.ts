

export const fetchRecipes = async (query: string) => {
  const res = await fetch(
    `http://localhost:5000/recipes/getByTitle?title=${query}`
    // `${API_HOST}/recipes/complexSearch?query=${query}&number=10&addRecipeInformation=true&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch recipes");
  const data = await res.json();
  return data.recipes
};

export const subscribeToEmail = async (email: string)=>{
  const res = await fetch(
    "http://localhost:5000/subscription/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
 } )
 if (!res.ok) {
  const error = await res.json();
  throw new Error(error.message || "Failed to subscribe");
}

return res.json();
}

export const contactForm = async (name: string, email: string, subject: string, message: string)=>{
  const res = await fetch(
    "http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email , subject,message}),
})
if (!res.ok) {
  const error = await res.json();
  throw new Error(error.message || "Failed to subscribe");
}

return res.json(); 
}