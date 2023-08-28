const projectsWrapper = document.querySelector(".projects .wrapper");

const projects = {
    project1: {
        name: "TaskList",
        img: "projects1.jpg",
        desc: `It's a task list. Its job is to make you organize your tasks easily.`,
    },
    project2: {
        name: "YouTube Clone",
        img: "projects2.jpg",
        desc: `It's a Clone of YouTube made in HTML, CSS and JS and it is not dynamic.`,
    },
    project3: {
        name: "Twitter Clone",
        img: "projects3.jpg",
        desc: `It's a Clone of Twitter made in HTML, CSS and JS and it is not dynamic.`,
    },
};

for (const projectName in projects) {
    const project = projects[projectName];

    projectsWrapper.innerHTML += 
    `<div class="project">
        <a href="#"><img class="project-img" src="imgs/${project.img}" alt=""></a>
        <div class="info">
            <p class="project-title">${project.name}</p>
            <p class="project-desc">${project.desc}</p>
        </div>
    </div>`;
};