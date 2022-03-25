function loadProject(id, h2_string, p1_string, p2_string, img_url) {
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

    let p1 = document.createElement('p')
    p1.innerHTML = p1_string
    textbody.appendChild(p1)

    let p2 = document.createElement('p')
    p2.innerHTML = p2_string
    textbody.appendChild(p2)

    // console.log(webcontainer)
    // console.log(projects)
    // console.log(project)

}

loadProject(1, "De Kuip Videoclip",
    "Camera Operator",
    "Re-flax",
    "reflax-dekuip.jpg");
loadProject(2, "Bartcoin",
    "Bartcoin",
    "Frontend Development",
    "project-example.png");
loadProject(3, "Winterconcert",
    "Winterconcert",
    "Live Video Production",
    "reflax-dekuip.jpg");


