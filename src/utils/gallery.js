
import prevIcon from "/src/assets/icons/prev.svg";
import nextIcon from "/src/assets/icons/next.svg";

(function () {
  document.addEventListener("mousemove", function (e) {
    isMouseInBox(e);
  });

  function transitionImgGallery() {
    let portfolioSection =
      document.querySelector("#portfolioSection");
    if (portfolioSection === null) return;
    portfolioSection.addEventListener("click", function (e) {
      let cursorPos = e.clientX - window.innerWidth / 2;
      let slickTrack =
        document.querySelector("#slick-track");
      let numChilds = slickTrack?.childElementCount;

      let translateObj = getMatrix(slickTrack);
      let bodyWidth = document.body.clientWidth;
      let slickTrackWidth = slickTrack.clientWidth;
      let translateRes = 0;
      let escortInfoContainer = document.querySelector(
        ".escort-info-container"
      );
      if (cursorPos < 0) {
        if (translateObj.x === 0) {
          translateObj.x = -slickTrackWidth;
          escortInfoContainer.classList.remove("z-[40]");
          escortInfoContainer.classList.add("-z-[40]");
          setTimeout(() => {
            escortInfoContainer.classList.remove("-z-[40]");
            escortInfoContainer.classList.add("z-[40]");
          }, 1100);
        } else {
          escortInfoContainer.classList.remove("z-[40]");
          escortInfoContainer.classList.add("z-[1]");
          setTimeout(() => {
            escortInfoContainer.classList.remove("z-[1]");
            escortInfoContainer.DOCUMENT_POSITION_PRECEDINGclassList.add("z-[40]");
          }, 1100);
        }
        translateRes = translateObj.x + bodyWidth;
        slickTrack.style.transition =
          "-webkit-transform 1100ms cubic-bezier(0.645, 0.045, 0.355, 1)";
        slickTrack.style.transform =
          "translate3d(" + translateRes + "px, 0px, 0px)";
      } else if (cursorPos > 0) {
        translateRes = translateObj.x - bodyWidth;
        if (translateRes * -1 >= slickTrackWidth) {
          translateRes = 0;
          escortInfoContainer.classList.remove("z-[40]");
          escortInfoContainer.classList.add("-z-[40]");
          setTimeout(() => {
            escortInfoContainer.classList.remove("-z-[40]");
            escortInfoContainer.classList.add("z-[40]");
          }, 1100);
        } else {
          escortInfoContainer.classList.remove("z-[40]");
          escortInfoContainer.classList.add("z-[1]");
          setTimeout(() => {
            escortInfoContainer.classList.remove("z-[1]");
            escortInfoContainer.classList.add("z-[40]");
          }, 1100);
        }
        slickTrack.style.transition =
          "-webkit-transform 1100ms cubic-bezier(0.645, 0.045, 0.355, 1)";
        slickTrack.style.transform =
          "translate3d(" + translateRes + "px, 0px, 0px)";
      } else {
        slickTrack.style.transform = slickTrack.style.transform;
      }
      //   console.log(slickTrack.style.transform.);
      // transform: translate3d(-1905px, 0px, 0px);
    });
  }

  function getMatrix(element) {
    const values = element.style.transform.split(/\w+\(|\);?/);
    const transform = values[1]
      .split(/,\s?/g)
      .map((d) => parseInt(d.replace("px", "")));
    return {
      x: transform[0],
      y: transform[1],
      z: transform[2],
    };
  }
  // if (window.innerWidth < 1280)
  //     return null;
  // {
  //     let l = document.querySelector("#portfolioSection")
  //         , t = e.clientX - window.innerWidth / 2;
  //     l && (t < 0 ? l.style.cursor = 'url("/icons/prev.svg"), auto' : t > 0 ? l.style.cursor = 'url("/icons/next.svg"), auto' : l.style.cursor = "default")
  // }



  function isMouseInBox(event) {
    let portfolioSection=
      document.querySelector("#portfolioSection");
    let cursorPos = event.clientX - window.innerWidth / 2;
    if (portfolioSection === null) return;
    cursorPos < 0
      ? (portfolioSection.style.cursor =
        `url("${prevIcon.src}"), auto`)
      : cursorPos > 0
        ? (portfolioSection.style.cursor =
          `url("${nextIcon.src}"), auto`)
        : (portfolioSection.style.cursor = "default");
  }

  transitionImgGallery();
  document.addEventListener("astro:after-swap", transitionImgGallery);
})();