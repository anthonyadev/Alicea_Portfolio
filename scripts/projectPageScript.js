


var searchParams = new URLSearchParams(window.location.search)
projectPageName = document.getElementById("projPageName")
projectImage = document.getElementById("projPageImg")
projectText = document.getElementById("projPageText")

let projectMap = new Map();                                                                                                                   


//initialize the map based on the values stored in projectData
for(let i = 0; i < projectNames.length; i++){
    projectMap.set(projectNames[i], projectDescriptions[i]);
}

projectImage.src = `../images/${searchParams.get("project")}.png`
projectText.innerText = projectMap.get(searchParams.get("project"));
projectPageName.innerText = camelCaseToStd(searchParams.get("project"));

