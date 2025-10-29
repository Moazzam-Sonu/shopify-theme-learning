  class SwatchGroup extends HTMLElement{
    constructor(){
      super();
     
    }
    connectedCallback(){
  
  this.querySelectorAll(".swatch-images").forEach(s=>{
       s.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopImmediatePropagation();
       const main_img = e.target.closest (".card-wrapper").querySelector(".card__media img")
       let newImage = e.target.src;
       newImage = newImage.replace("width=100","width=600")
       main_img.setAttribute("src",newImage)
       main_img.removeAttribute("srcset")

      })
   
   });
  
    }
  }
  customElements.define('variant-swatch',SwatchGroup)
