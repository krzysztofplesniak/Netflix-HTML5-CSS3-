function showTextDescription(){0!==hiddenText.value&&(hiddenText.style.display="inline-block",showMoreText.style.display="none")}function setVideoRows(e){pageWidth=window.outerWidth,isNan(e)&&(e=5,console.log("Nie liczba",e)),pageWidth>1280&&(sectionHeight=e/Math.ceil(7.5)),pageWidth>1024&&pageWidth<1280&&(sectionHeight=e/Math.ceil(9)),pageWidth>768&&pageWidth<1024&&(sectionHeight=e/Math.ceil(45/4)),pageWidth>480&&pageWidth<768&&(sectionHeight=e/Math.ceil(15)),pageWidth<480&&(sectionHeight=e/Math.ceil(22.5)),videoSection.height(videoBoxes.height()*sectionHeight),pageWidth<480&&0===hiddenText.innerText.length&&(showMoreText.style.display="block")}function headerExpand(e){pageWidth=window.outerWidth,"mouseenter"==e.type&&pageWidth>1300?header.classList.add("headerBig"):"mouseleave"==e.type&&pageWidth>1300&&header.classList.remove("headerBig")}function scrollPage(){pageWidth=window.outerWidth,pageYScroll=window.scrollY,pageYScroll>75?scrollDown.style.display="none":scrollDown.style.display="block",pageYScroll>videoSection.position().top+.5*videoSection.height()&&(setVideoRows(7),console.log("setVideoRows = 7"))}function scrollViewTo(e){pageYOffset=window.pageYOffset;var o=$(e).offset().top-pageYOffset-105-85;window.scrollBy(0,o)}var scrollDown=document.querySelector("#scrollDown"),scrollDownBox=document.querySelector("#scrollDownBox"),hamburgerIcon=document.querySelector(".hamburgerIcon"),iconBars=document.querySelectorAll(".iconBar"),menuItems=document.querySelector("header ul"),header=document.querySelector("header nav"),showMoreText=document.querySelector(".showMoreText"),hiddenText=document.querySelector(".hiddenText"),videoSection=$("#videoSection"),videoBoxes=$(".videoBoxes"),pageYOffset,pageWidth,numberOfRows,sectionHeight;hamburgerIcon.addEventListener("click",function(){iconBars.forEach(function(e){e.classList.toggle("changeHambIcon")}),menuItems.classList.toggle("showMenuItems")}),showMoreText.addEventListener("click",showTextDescription),window.addEventListener("resize",setVideoRows),header.addEventListener("mouseenter",headerExpand),header.addEventListener("mouseleave",headerExpand),window.addEventListener("scroll",scrollPage),scrollDownBox.addEventListener("click",function(){scrollViewTo("#videoSection")});