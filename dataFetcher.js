export async function fetchUsers(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
  return await res.json();
}
