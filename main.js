


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
      // using object destructuring 
      const { name, bio, login, html_url, avatar_url } = data

      userName.textContent = name
      githubBio.textContent = bio
      githubLoginName.textContent = login
      document.getElementById("githubHtmlUrl").href = html_url
      document.getElementById("githubAvatar").src = avatar_url
      console.log(data)

    })

}

getGithubProfileInfos()

//linked in 
// function changeSocialMediaLinks() {
//   for (let li of socialLinks.children) {
//     const social = li.getAttribute('class')

//      if ((social = 'linkedin')) {
//        li.children[0].href = https://${social}.com/in/${LinksSocialMedia[social]}
//     }
//     li.children[0].href = https://${social}.com/${LinksSocialMedia[social]}

//   }
// }