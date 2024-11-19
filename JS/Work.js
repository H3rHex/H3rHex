function loadData() {
    return fetch('../JS/Work-data.json') // Asegúrate de que la ruta sea correcta
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('Error cargando datos:', error));
}

function loadWork(data) {
    const container = document.getElementById('workContainer');

    for (d in data) {
        let workSection = document.createElement('section');
        workSection.classList.add('workSection');
        container.appendChild(workSection);

        let workTitle = document.createElement('h3');
        workTitle.classList.add('workTitle');
        workTitle.textContent = data[d]['Tittle'];
        workSection.appendChild(workTitle);

        let workImage = document.createElement('img');
        workImage.classList.add('workImage');
        workImage.src = `../ASSETS/OTHER/PROJECT-MEDIA/${data[d]['Img']}`;
        workSection.appendChild(workImage);

        let workDescription = document.createElement('p');
        workDescription.classList.add('workDescription');
        workDescription.textContent = data[d]['Body'];
        workSection.appendChild(workDescription);

        //LINKS
        
        const linksContainers = document.createElement('div');
        linksContainers.classList.add('linksContainer');
        workSection.appendChild(linksContainers);


        let gitLink = document.createElement('a');
        gitLink.classList.add('wLinks');
        gitLink.href = data[d]['LinkGit'];
        linksContainers.appendChild(gitLink);

        const gitIcon = document.createElement('svg');
        gitIcon.classList.add('wLinks');
        gitIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">viewBox=&quot;0 0 48 48&quot;<path fill="#000" fill-rule="evenodd" d="M24.02 0C10.737 0 0 11 0 24.608c0 10.878 6.88 20.086 16.424 23.345 1.193.245 1.63-.53 1.63-1.18 0-.571-.039-2.527-.039-4.564-6.682 1.467-8.073-2.934-8.073-2.934-1.074-2.852-2.665-3.585-2.665-3.585-2.187-1.507.16-1.507.16-1.507 2.425.163 3.698 2.526 3.698 2.526 2.147 3.748 5.607 2.689 7 2.037.198-1.59.834-2.69 1.51-3.3-5.329-.57-10.936-2.69-10.936-12.142 0-2.689.954-4.889 2.466-6.6-.239-.61-1.074-3.137.239-6.519 0 0 2.028-.652 6.6 2.526a23.094 23.485 0 0 1 6.006-.815c2.028 0 4.095.286 6.005.815 4.573-3.178 6.601-2.526 6.601-2.526 1.313 3.382.477 5.908.239 6.52 1.55 1.71 2.465 3.91 2.465 6.6 0 9.452-5.607 11.53-10.976 12.14.876.775 1.63 2.241 1.63 4.564 0 3.3-.039 5.948-.039 6.763 0 .652.438 1.426 1.63 1.182C41.12 44.694 48 35.486 48 24.608 48.04 11 37.262 0 24.02 0Z" clip-rule="evenodd" style="stroke-width:.495814"/></svg>`;
        gitLink.appendChild(gitIcon);

        if (data[d]['LinkWeb'] !== ''){
            let webLink = document.createElement('a');
            webLink.classList.add('wLinks');
            webLink.href = data[d]['LinkWeb'];
            linksContainers.appendChild(webLink);
            
            let webIcon = document.createElement('svg');
            webIcon.classList.add('wLinks');
            webIcon.innerHTML = `<svg fill="#000000" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.962 15.867a2.469 2.469 0 0 1-.69 1.377l-1.029 1.028a2.5 2.5 0 0 1-3.536-3.536l1.029-1.029a2.464 2.464 0 0 1 1.423-.694l1.781-1.781a4.425 4.425 0 0 0-4.619 1.062l-1.028 1.028a4.5 4.5 0 0 0 6.364 6.364l1.029-1.029a4.489 4.489 0 0 0 1.073-4.587zM19.686 4.293a4.511 4.511 0 0 0-6.364 0l-1.029 1.029a4.49 4.49 0 0 0-1.063 4.62l1.779-1.779a2.476 2.476 0 0 1 .7-1.427l1.029-1.029a2.5 2.5 0 0 1 3.536 3.536l-1.029 1.029a2.484 2.484 0 0 1-1.379.693l-1.796 1.794a4.409 4.409 0 0 0 4.587-1.072l1.029-1.029a4.5 4.5 0 0 0 0-6.365z"></path> <path d="M9 16a1 1 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.414 1.414l-6 6A1 1 0 0 1 9 16z"></path> </g></svg>`;
            webLink.appendChild(webIcon);
        } else {
            continue;
        }
    }
}

window.addEventListener("load", () => {
    loadData().then(data => {
        loadWork(data); // Crea la estructura HTML con los datos cargados
    });
});

