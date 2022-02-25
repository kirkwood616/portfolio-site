import projects from "./projects.js";

const main = document.getElementById("main");
const container = document.getElementById("container");

projects.forEach((project) => {
  // CARD
  const card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);
  // THUMBNAIL
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");
  card.appendChild(thumbnail);
  // THUMBNAIL TEXT
  const thumbText = document.createElement("span");
  thumbText.classList.add("thumbText");
  thumbText.innerText = project.thumbText;
  thumbnail.appendChild(thumbText);
  // THUMBNAIL SHADOW
  const thumbnailShadow = document.createElement("div");
  thumbnailShadow.classList.add("thumbnailShadow");
  thumbnail.appendChild(thumbnailShadow);
  // THUMBNAIL IMAGE
  const image1 = document.createElement("img");
  image1.classList.add("thumbnailImage");
  image1.classList.add(project.className);
  image1.src = `./public/${project.image1}`;
  image1.setAttribute("alt", project.name);
  thumbnail.appendChild(image1);
  function mouseOver() {
    image1.src = `./public/${project.image2}`;
  }
  function mouseOut() {
    image1.src = `./public/${project.image1}`;
  }
  card.addEventListener("mouseover", mouseOver);
  card.addEventListener("mouseout", mouseOut);
  // NAME
  const h3 = document.createElement("h3");
  h3.innerText = project.name;
  card.appendChild(h3);
  // DESCRIPTION
  const p = document.createElement("p");
  p.innerText = project.description;
  card.appendChild(p);
  // BUILD TOOLS
  const builtWith = document.createElement("p");
  builtWith.classList.add("builtWith");
  builtWith.innerText = "Build Tools:";
  card.appendChild(builtWith);
  // PIPE SEPARATOR
  const pipe = document.createElement("span");
  pipe.classList.add("pipe");
  pipe.innerText = " | ";
  // BUILD TOOLS
  const buildTools = document.createElement("p");
  buildTools.classList.add("buildTools");
  card.appendChild(buildTools);
  project.buildTools.forEach((tool, index) => {
    const pipe = document.createElement("span");
    pipe.classList.add("pipe");
    pipe.innerText = " | ";
    const toolText = document.createTextNode(tool);
    buildTools.appendChild(toolText);
    if (index !== project.buildTools.length - 1) buildTools.appendChild(pipe);
  });
  // LINKS
  const links = document.createElement("p");
  links.classList.add("links");
  card.appendChild(links);
  // LINK => LIVE SITE
  const liveSite = document.createElement("a");
  liveSite.href = project.liveSite;
  liveSite.target = "_blank";
  liveSite.innerText = "Live Site";
  links.appendChild(liveSite);
  links.appendChild(pipe);
  // LINK => SOURCE CODE
  const sourceCode = document.createElement("a");
  sourceCode.href = project.sourceCode;
  sourceCode.target = "_blank";
  sourceCode.innerText = "Source Code";
  links.appendChild(sourceCode);
});
