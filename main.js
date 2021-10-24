


const linksSocialMedia = {
  github: 'antoniPrz',
  youtube: 'watch?v=i9AHJkHqkpw&list=RDMMi9AHJkHqkpw&start_radio=1',
  facebook: '',
  instagram: 'antonijarrod',
  twitter: '',
}

function changeSocialmediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`

  }
}

changeSocialmediaLinks()


function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      githubBio.textContent = data.bio
      githubLoginName.textContent = data.login
      document.getElementById("githubHtmlUrl").href = data.html_url
      document.getElementById("githubAvatar").src = data.avatar_url
      console.log(data)

    })

}

getGithubProfileInfos()