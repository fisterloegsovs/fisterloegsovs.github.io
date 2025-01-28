document.addEventListener('DOMContentLoaded', function () {
  const githubUsername = 'your-github-username'; // Replace with your GitHub username
  const reposContainer = document.getElementById('github-repos');

  fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`)
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('project-card');

        repoCard.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || 'No description available.'}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;

        reposContainer.appendChild(repoCard);
      });
    })
    .catch(error => {
      console.error('Error fetching GitHub repos:', error);
      reposContainer.innerHTML = '<p>Unable to load projects at this time.</p>';
    });
});