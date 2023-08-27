function createUserUnits(user) {
  const userDiv = document.createElement('div');
	const id = document.createElement('p');
	const name = document.createElement('p');
	const age = document.createElement('p');
	const email = document.createElement('p');
	const country = document.createElement('p');
	const company = document.createElement('p');
	const birthday = document.createElement('p');
	
	userDiv.classList.add('user-div');
	id.classList.add('id-number');
	name.classList.add('name');
	age.classList.add('age');
	email.classList.add('email');
	country.classList.add('country');
	company.classList.add('company');
	birthday.classList.add('birthday');

	id.innerText = `ID number: ${user.id}`;
	name.innerText = `Name: ${user.name}`;
	age.innerText = `Age: ${user.age}`;
	email.innerText = `Email: ${user.email}`;
	country.innerText = `Country: ${user.country}`;
	company.innerText = `Company: ${user.company}`;
	birthday.innerText = `Birthday date: ${user.birthday}`;
	
	userDiv.appendChild(id);
  userDiv.appendChild(name);
  userDiv.appendChild(age);
  userDiv.appendChild(email);
  userDiv.appendChild(country);
  userDiv.appendChild(company);
  userDiv.appendChild(birthday);

	return userDiv;
}

export default createUserUnits;