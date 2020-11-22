let tabLinks = document.querySelectorAll(".tablink");
let tabContents = document.querySelectorAll(".tabcontent");
for(let i=0;i<tabLinks.length; i++) {
  tabLinks[i].addEventListener("click",function(){
    let tabName = this.innerText;
    for(let i=0;i<tabContents.length;i++){
      tabContents[i].style.opacity="0";
      tabContents[i].style.zindex="0";
      tabContents[i].style.transform="rotateY(20deg)";
    }
    for (let i=0;i<tabLinks.length ; i++){
      tabLinks[i].className = tabLinks[i].className.replace(" active","");
    }


    document.querySelector(`#${tabName}`).style.opacity="1";
    document.querySelector(`#${tabName}`).style.zindex="1";
    document.querySelector(`#${tabName}`).style.transform="rotateY(0)";
    


    this.className = this.className + " active";
  
  });
}

document.querySelector("#defaultOpen").click();