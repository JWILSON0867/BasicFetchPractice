export function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("user-card");

  const fullName = `${user.firstName} ${user.lastName}`;

  card.innerHTML = `
    <h2>${fullName}</h2>
    <p>Email: ${user.email}</p>
    <p>Company: ${user.companyName}</p>
    <p>Years Employed: ${user.yearsEmployed}</p>
  `;

  return card;
}

export function clearCards(container) {
  container.innerHTML = '';
}

