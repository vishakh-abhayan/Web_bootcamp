const avatarElement = document.getElementById("avatar");
const usernameElement = document.getElementById("username");
const repoListElement = document.getElementById("repo-list");

const username = "vishakh-abhayan"; // Replace with your GitHub username

fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => {
    avatarElement.src = data.avatar_url;
    usernameElement.textContent = data.login;
  });

fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      const repoCard = document.createElement("div");
      repoCard.classList.add("repo-card");
      repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <p>Stars: ${repo.stargazers_count}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
      repoListElement.appendChild(repoCard);
    });
  });
