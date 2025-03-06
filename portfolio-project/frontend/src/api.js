const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://your-backend.pythonanywhere.com";

export async function fetchComments() {
  try {
    const response = await fetch(`${API_URL}/comments`);
    if (!response.ok) throw new Error("Failed to fetch comments");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
