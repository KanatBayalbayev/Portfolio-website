// Mobile menu variables start

const barsBtn = document.querySelector(".bars");
const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".mobileNavbar");
const aboutMeBtn = document.querySelector(".mobileAboutMeBtn");
const projectsBtn = document.querySelector(".mobileProjectsBtn");
const contactBtn = document.querySelector(".mobileContactBtn");

// Mobile menu end

// Toast notification variables start
const btnToast = document.querySelector(".btn-toast");
const toast = document.querySelector(".toast");
const close = document.querySelector(".close");
// Toast notification end

//
const jobExperienceBtn = document.querySelector(".jobExperience");
const timelinePage = document.querySelector(".timelinePage");
const educationBtn = document.querySelector(".education");
const containerJob = document.querySelector(".containerJob");
const containerEducation = document.querySelector(".container-education");

jobExperienceBtn.addEventListener("click", () => {
  containerJob.classList.remove("active");
  containerEducation.classList.add("active");
  timelinePage.style.height = 130 + "vh";
});
educationBtn.addEventListener("click", () => {
  containerEducation.classList.remove("active");
  containerJob.classList.add("active");
  timelinePage.style.height = 100 + "vh";
});

// Toast notification code start
let progressStart = 0;
let progressEnd = 100;
let squadProgress = document.querySelector(".squad");

btnToast.addEventListener("click", function () {
  toast.classList.add("showing");
  console.log("Clciked");
  let theProgress = setInterval(() => {
    progressStart++;
    squadProgress.style.background = `conic-gradient(#32cd32 ${
      progressStart * 3.6
    }deg, #fff 0deg)`;

    if (progressStart == progressEnd) {
      clearInterval(theProgress);
      progressStart = 0;
    }
  }, 40);

  setTimeout(function () {
    toast.classList.remove("showing");
  }, 4000);

  close.addEventListener("click", function () {
    toast.classList.remove("showing");
  });
});
// Toast notification code end

// Mobile menu code start
barsBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hideAndShowMeny");
  mobileNavbar.style.dispay = "none";
  navbar.style.backgroundColor = "";
  // navbar.style.backgroundColor = "rgb(16,95,145)";
  // navbar.style.backgroundImage =
  //   "linear-gradient(90deg, rgba(16,95,145,1) 40%, rgba(255,0,83,1) 100%)";
  // navbar.style.zIndex = "-1";
});

aboutMeBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hideAndShowMeny");
  navbar.style.backgroundColor = "";
  navbar.style.backgroundImage = "";
});
projectsBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hideAndShowMeny");
  navbar.style.backgroundColor = "";
  navbar.style.backgroundImage = "";
});
contactBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hideAndShowMeny");
  navbar.style.backgroundColor = "";
  navbar.style.backgroundImage = "";
});
// Mobile menu code end

const javascriptBtn = document.querySelector(".javascriptBtn");
const reactBtn = document.querySelector(".reactBtn");
const javascriptProject = document.querySelectorAll(".javascriptProject");
const reactProject = document.querySelectorAll(".reactProject");

javascriptBtn.addEventListener("click", () => {
  javascriptProject.forEach((itemJs) => {
    itemJs.classList.add("activeProject");
  });
  reactProject.forEach((itemReact) => {
    itemReact.classList.remove("activeProject");
  });
});
reactBtn.addEventListener("click", () => {
  javascriptProject.forEach((itemJs) => {
    itemJs.classList.remove("activeProject");
  });
  reactProject.forEach((itemReact) => {
    itemReact.classList.add("activeProject");
  });
});
