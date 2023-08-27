import createUserUnits from "./createUnits.js";
import users from "./data.js";

function renderUsers() {
  const userList = document.getElementById('user-list');

  users.forEach((user) => {
    const userDiv = createUserUnits(user);
    userList.appendChild(userDiv);
  });
}

export default renderUsers;