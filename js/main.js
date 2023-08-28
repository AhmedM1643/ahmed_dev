const skillsContainer = document.getElementById("skills");
console.log(skillsContainer)

const skills = {
    html: {
        name: "HTML",
        icon: "html5",
        progress: 94,
    },
    css: {
        name: "CSS",
        icon: "css3-alt",
        progress: 88,
    },
    js: {
        name: "JavaScript",
        icon: "square-js",
        progress: 92,
    },
    bs: {
        name: "Bootstrap",
        icon: "bootstrap",
        progress: 79,
    },
    tw: {
        name: "Tailwind",
        icon: "bootstrap",
        progress: 91,
    },
    react: {
        name: "ReactJS",
        icon: "react",
        progress: 86,
    },
    sass: {
        name: "Sass",
        icon: "sass",
        progress: 53,
    },
    git: {
        name: "Git",
        icon: "git-alt",
        progress: 72,
    },
}

for (const skillName in skills) {
    const skill = skills[skillName];
    skillsContainer.innerHTML += 
    `<div class="skill-parent">
        <div class="skill-title" id="${skillName}-title">
            <p ><i class="fa-brands fa-${skill.icon}"></i>${skill.name}</p>
            <span>${skill.progress}%</span>
        </div>
        <div class="skill" ><div class="exp" id="${skillName}-exp"></div></div>  
    </div>`;
}