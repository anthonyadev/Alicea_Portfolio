var searchParams = new URLSearchParams(window.location.search)
//grabbing elements
const intro = document.getElementById("introText");
var projImgLeft = document.getElementById("projImgLeft")
var projectImage = document.getElementById("projectImage");
var projImgRight = document.getElementById("projImgRight")
var projectName = document.getElementById("projectName")
var projectText = document.getElementById("projectsText");
var projectLink = document.getElementById("projectImageLink")
var backgroundVideo = document.getElementById("projectVideo")

//start intitialization
var speed = 400;
var projectIndex = 0;
setProjectImages();
setProjectText();
setUrl();
setBackgroundVideo();

//onLoad we start the js side of the intro animation
for (let index = 0; index < namesList.length; index++){
    speed -= 10;
    var timeOut = setTimeout(() => {
        intro.innerText = namesList[index];
    }, speed * index);
}



//scrolls through projects, passing true scrolls right. passing false scrolls left
function scrollProjects(direction){
    if(direction){
        if(projectIndex >= projectNames.length - 1){
            projectIndex = 0;
        }else{
            projectIndex++;
        }
    }else{
        if(projectIndex <= 0){
            projectIndex = projectNames.length - 1;
        }else{
            projectIndex--;
        }
    }
    setProjectImages();
    setProjectText();
    setUrl();
    setBackgroundVideo();
}

function setProjectImages(){
    if(projectIndex > 0){
        projImgRight.src=`../images/${projectNames[projectIndex - 1]}.png`;
    }else{
        projImgRight.src=`../images/${projectNames[projectNames.length - 1]}.png`;
    }
    projectImage.src=`../images/${projectNames[projectIndex]}.png`;
    if(projectIndex <= projectNames.length - 2){
        projImgLeft.src=`../images/${projectNames[projectIndex + 1]}.png`;
    }else{
        projImgLeft.src=`../images/${projectNames[0]}.png`;
    }
}

function setProjectText(){
    projectName.innerText = camelCaseToStd(projectNames[projectIndex]);
    projectText.innerText = projectDescriptions[projectIndex];
}

function setUrl(){
    searchParams.set("project", projectNames[projectIndex])
    history.replaceState(null, null, `?${searchParams.toString()}`);
    //appends link 
    projectLink.href = `projectPage.html?${searchParams.toString()}`
}

function setBackgroundVideo(){
    backgroundVideo.src = `../videos/${projectNames[projectIndex]}.mp4`
}




