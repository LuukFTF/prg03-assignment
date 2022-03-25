function loadProject(id, img_url, h2_string, p_string) {
    // let webcontainer = document.getElementsByClassName("webcontainer");
    let projects = document.getElementsByClassName("projects")[0];
    // let projects = document.getElementById("projects");

    let project = document.createElement('div')
    project.className = "project"
    projects.appendChild(project)

    let project_a = document.createElement('a')
    project_a.className = "flex"
    project_a.href = "/projects/"+id
    project.appendChild(project_a)

    let img = document.createElement('img')
    img.src = "images/"+img_url
    project_a.appendChild(img)

    let textbody = document.createElement('div')
    textbody.className = "textbody"
    project_a.appendChild(textbody)

    let h2 = document.createElement('h2')
    h2.innerHTML = h2_string 
    textbody.appendChild(h2)

    let p = document.createElement('p')
    p.innerHTML = p_string
    textbody.appendChild(p)

    // console.log(webcontainer)
    console.log(projects)
    // console.log(project)

}

loadProject(0, "reflax-dekuip.jpg", "Project 0", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore voluptate ullam molestias recusandae placeat nisi rerum ipsa. Consectetur, dolor.");

