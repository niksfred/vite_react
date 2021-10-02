export async function getPages() {
  const response = await fetch("https://reqres.in/api/users");
  const data = response.json();
  return data;
}

export const getPage = async (i) => {
  let response = await fetch(`https://reqres.in/api/users?page=${i}`);
  const data = response.json();
  return data;
};

export async function getData() {
  let allUsers = [];
  const { total_pages: totalPages } = await getPages();
  for (let i = 1; i < totalPages + 1; i++) {
    const { data: users } = await getPage(i);
    users.forEach((element) => {
      allUsers.push(element);
    });
  }
  return allUsers;
}
