import { fetchUsers } from './dataFetcher.js';
import { createUserCard, clearCards } from './domUtils.js';

const container = document.getElementById('card-container');
const loadAllBtn = document.getElementById('load-all');
const filterBtn = document.getElementById('filter');
const clearBtn = document.getElementById('clear');

const url = './data/user.json';

loadAllBtn.addEventListener('click', async () => {
  try {
    const users = await fetchUsers(url);
    console.log(users);  // Optional for debugging
    clearCards(container);
    users.forEach(user => container.appendChild(createUserCard(user)));
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
});

filterBtn.addEventListener('click', async () => {
  try {
    const users = await fetchUsers(url);
    clearCards(container);
    users
      .filter(user => user.yearsEmployed < 10)
      .forEach(user => container.appendChild(createUserCard(user)));
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
});

clearBtn.addEventListener('click', () => clearCards(container));

