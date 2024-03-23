const namesList = ["Programmer", "Developer", "Software Engineer", "Data Scientist", "QA Analyst", "Web Developer", "Database Engineer", "Game Developer", "Data Analyst", "Professional"]
const projectNames = ["crestfallen","lidarVR","triageSim"]; // tonyLang, xmlEngine, bloonsCloneDefense"];
const projectDescriptions = ["Crestfallen is a sidescroller action rpg that takes inspiration from games like Dark Souls and Castlevania. You traverse the level while learning the games core mechanics. Can you survive until the end? ", "LidarVR is a first-person VR horror game. LidarVR is a game based around the concept of lidar. Using your lidar scanner you map out the facility you're placed in with the goal being a succesful escape.", "Triage Sim is a 'serious' game placing you at the helm of a ground zero event. You are tasked with assesing civialian damage and determining their level of need for medical care."]

function camelCaseToStd(camelcaseStr) {
    // Insert a space between lowercase and uppercase letters
    let result = camelcaseStr.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Capitalize the first letter
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
}