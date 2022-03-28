function loadProject(id, h2_string, p1_string, p2_string, img_url) {
    // let webcontainer = document.getElementsByClassName("webcontainer");
    let projects = document.getElementsByClassName("projects")[0];
    // let projects = document.getElementById("projects");

    let project = document.createElement('div')
    project.id = "project"+id;
    project.className = loadProjectFav(id) == true ? 'project' : 'project saved';
    projects.appendChild(project)

        let project_a = document.createElement('a')
        project_a.className = "flex"
        // project_a.href = "/projects/"+id
        project.appendChild(project_a)
        project_a.addEventListener("click", function(){ loadSidepanel("De Kuip Videoclip", 
        "Camera Operator", 
        "Re-flax", 
        "Rotterdam, De Kuip", 
        "2021-09-25", 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias excepturi est porro voluptas minima et officia consequuntur dicta, atque vitae voluptate, assumenda temporibus eligendi neque pariatur? Sint quae dicta voluptatum.", 
        "reflax-dekuip.jpg")});

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

                let save_btn = document.createElement('button')
                save_btn.id = "save_btn"+id
                save_btn_string = loadProjectFav(id) == true ? 'Save' : 'Unsave';
                save_btn.innerHTML = save_btn_string
                textbody.appendChild(save_btn)
                save_btn.addEventListener("click", function(){ addProjectFav(id)});
            
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

function loadSidepanel(title, type, client, location, date_start, discription, img_url) {
    let webcontainer = document.getElementsByClassName("webcontainer")[0];

    let sidebar = document.createElement('section')
    sidebar.className = "sidebar"
    webcontainer.appendChild(sidebar)

        let textheader = document.createElement('div')
        textheader.className = "textheader"
        sidebar.appendChild(textheader)

            let h2 = document.createElement('h2')
            h2.className = "h2"
            h2.innerHTML = title
            textheader.appendChild(h2)

            let tags = document.createElement('h2')
            tags.className = "tags"
            textheader.appendChild(tags)

                let small1 = document.createElement('p')
                small1.className = "small"
                small1.innerHTML = type
                tags.appendChild(small1)

                let small2 = document.createElement('p')
                small2.className = "small"
                small2.innerHTML = client+" | "+date_start+" | "+location
                tags.appendChild(small2)

        let textbody = document.createElement('div')
        textbody.className = "textbody"
        sidebar.appendChild(textbody)

            let p1 = document.createElement('p')
            p1.innerHTML = discription
            textbody.appendChild(p1)

            let img = document.createElement('img')
            img.src = "images/"+img_url
            textbody.appendChild(img)

            let p2 = document.createElement('p')
            p2.innerHTML = discription
            textbody.appendChild(p2)
}

// loadSidepanel("De Kuip Videoclip", 
// "Camera Operator", 
// "Re-flax", 
// "Rotterdam, De Kuip", 
// "2021-09-25", 
// "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias excepturi est porro voluptas minima et officia consequuntur dicta, atque vitae voluptate, assumenda temporibus eligendi neque pariatur? Sint quae dicta voluptatum.", 
// "reflax-dekuip.jpg")

function addProjectFav(id) {
    localStorage.setItem(`projectsaved${id}`, 1);
    console.log(`projectsaved${id}`, 1)

    let save_btn = document.getElementById(`save_btn${id}`)

    save_btn.addEventListener("click", function(){ removeProjectFav(id)});
    save_btn.innerHTML = "Unsave"

    let project = document.getElementById(`project${id}`)
    project.className = 'project saved';
}

function loadProjectFav(id) {
    return localStorage.getItem(`projectsaved${id}`);
}

function removeProjectFav(id) {
    localStorage.setItem(`projectsaved${id}`, 0);
    console.log(`projectsaved${id}`, 0)

    let save_btn = document.getElementById(`save_btn${id}`)

    save_btn.addEventListener("click", function(){ addProjectFav(id)});
    save_btn.innerHTML = "Save"

    let project = document.getElementById(`project${id}`)
    project.className = 'project';
}


