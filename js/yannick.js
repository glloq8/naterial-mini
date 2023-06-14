
$(document).ready(function(){
  
  
  // Appel des sliders photo sur la fiche produit  
  $('.block_metafield_block_4 .pictures_block .pictures').slick({
    lazyLoad: 'progressive',
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  $('.product-recommendations-placeholder').slick();
  
});

// Fonction pour afficher le texte de description d'une page liste en entier
function readMore() {

  const body = document.getElementsByTagName('body')

  if( body[0].classList.contains('template-collection') ) {
    let link = document.querySelector('.enlarge-text .read-more')
    let text = document.querySelector('.enlarge-text .text')

    if( text.clientHeight > 90 ) { // Si la zone de texte est trop grande alors on affiche le lien read more
      text.classList.add('active')
    } else {
      link.style.display = "block"
    }

    link.addEventListener('click', function() {
      text.classList.add('active')
      this.style.display = "none"
    })
  }
};

// Appel de la fonction readMore
readMore()


// Fonction pour afficher/masquer les caracteristiques produit
function ShowCaract() {
  
  	const body = document.querySelector('body')
    
    if( body.classList.contains('template-product') == true) {

      const wrapper = document.querySelector('.caracteristiques')
      // let buttonWrapper = document.createElement('p')
      // let buttonHTML = document.createElement('span')

      // const TextOff = "See all the information"
      // const TextOn = "Hide information"

      // buttonWrapper.classList.add('action-caract')

      // wrapper.after(buttonWrapper)
      // buttonWrapper.innerHTML = '<span></span>'

      // var buttonSpan = document.querySelector('.action-caract span')
      // buttonSpan.innerText = TextOff

      // buttonSpan.addEventListener('click', function() {
        wrapper.classList.toggle('active')

        // if( wrapper.classList.contains('active') ) {
        //   buttonSpan.innerText = TextOn
        // } else {
        //   buttonSpan.innerText = TextOff
        // }
      }
    }
  

// Appel de la fonction ShowCaract
 ShowCaract()


 
 