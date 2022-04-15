import { displayUsers } from "./displayUsers";

export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

    const listOfUsers = document.querySelectorAll('.card__user');
    for (let j = 0 ; j < listOfUsers.length; j++) {
        const select = displayUsers(users);
        console.log(listOfUsers[j]);
        listOfUsers[j].append(select)
    }
}