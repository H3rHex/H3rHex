fetch('../js/handleProjects/projects.json')
  .then(response => response.json())
  .then(data => createStructure(data))
  .catch(error => console.error('Error cargando datos:', error));

function createStructure(projectData){
    const projectContainerDiv = document.querySelector('.projectContainer')

    for (let i in projectData){
        const project = projectData[i];  

        //DIV CONTENEDOR DEL PROYECTO
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        projectDiv.setAttribute('aria-label', i)
        projectContainerDiv.appendChild(projectDiv);

        //DIV - IMG Y TITULO
        const projectImg_Tittle_Div = document.createElement('div');
        projectImg_Tittle_Div.classList.add('projectImg_TittleDiv');
        projectDiv.appendChild(projectImg_Tittle_Div);

        //DIV INFO - LINK GITHUB
        const projectInfo_Div = document.createElement('div');
        projectInfo_Div.classList.add('projectInfoDiv');
        projectDiv.appendChild(projectInfo_Div);

        //LINK
        const projectTitle = document.createElement('a');
        projectTitle.classList.add('projectTitle');
        projectTitle.textContent = project['project-name'];
        projectTitle.href = project['project-link'];
        projectTitle.target = '_blank'
        projectImg_Tittle_Div.appendChild(projectTitle);

    
        //IMG - PROYECTO
        const projectImgDiv = document.createElement('div');
        projectImgDiv.classList.add('projectImgDiv');
        projectImg_Tittle_Div.appendChild(projectImgDiv);

        const projectImg = document.createElement('img');
        projectImg.src =  `../scr/assets/projectAssets/${project['project-img']}`
        projectImgDiv.appendChild(projectImg);
      
        //P - DESCRIPICION Y LINK GITHUB
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('projectDescription');
        projectDescription.textContent = project['project-description'];
        projectInfo_Div.appendChild(projectDescription);

        //LINK GITHUB
        const projectGitHub = document.createElement('a');
        projectGitHub.classList.add('projectGitHub');
        projectGitHub.href = project['projetc-github'];
        projectGitHub.target = '_blank'

        projectInfo_Div.appendChild(projectGitHub);
        const  projectGitHubIcon = document.createElement('svg');
        projectGitHubIcon.classList.add('githubIcon');
        projectGitHubIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">viewBox=&quot;0 0 48 48&quot;<path fill="#fff" fill-rule="evenodd" d="M24.02 0C10.737 0 0 11 0 24.608c0 10.878 6.88 20.086 16.424 23.345 1.193.245 1.63-.53 1.63-1.18 0-.571-.039-2.527-.039-4.564-6.682 1.467-8.073-2.934-8.073-2.934-1.074-2.852-2.665-3.585-2.665-3.585-2.187-1.507.16-1.507.16-1.507 2.425.163 3.698 2.526 3.698 2.526 2.147 3.748 5.607 2.689 7 2.037.198-1.59.834-2.69 1.51-3.3-5.329-.57-10.936-2.69-10.936-12.142 0-2.689.954-4.889 2.466-6.6-.239-.61-1.074-3.137.239-6.519 0 0 2.028-.652 6.6 2.526a23.094 23.485 0 0 1 6.006-.815c2.028 0 4.095.286 6.005.815 4.573-3.178 6.601-2.526 6.601-2.526 1.313 3.382.477 5.908.239 6.52 1.55 1.71 2.465 3.91 2.465 6.6 0 9.452-5.607 11.53-10.976 12.14.876.775 1.63 2.241 1.63 4.564 0 3.3-.039 5.948-.039 6.763 0 .652.438 1.426 1.63 1.182C41.12 44.694 48 35.486 48 24.608 48.04 11 37.262 0 24.02 0Z" clip-rule="evenodd" style="stroke-width:.495814"/></svg>`;
        projectGitHub.appendChild(projectGitHubIcon);


        
    }
}