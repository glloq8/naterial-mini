$( document ).ready(function() {
  var weareintemplateproduct = document.getElementsByClassName('template-product');
  if ( weareintemplateproduct.length>0 ){
    load_compisitionsblock();
  }
});

// Systéme pour afficher ou masqué le bouton de filtre
bouton = document.querySelector("#CollectionSection > div.collection-filter > div.collection-filter__inner > div > button.buttonClearAllFilters");
var weareincollection = document.getElementsByClassName('template-collection');
function collection_button(){
  var url = window.location.pathname;
    if ((url != bouton.dataset.url)){ 
        bouton.style.display = "inline-block";
    } else{
        bouton.style.display = "none";
    }	
	}

if ( weareincollection.length>0 ){
	collection_button();
}
// Fin

var weareintemplateproduct = document.getElementsByClassName('template-product');
if ( weareintemplateproduct.length>0 ){
	load_compisitionsblock();
}

// Systéme pour afficher le return top button
var btn_top = $('#return-top');
btn_top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    btn_top.addClass('show-return-top');
  } else {
    btn_top.removeClass('show-return-top');
  }
});
// Fin


const urlParams = new URLSearchParams(window.location.search);
const collectionPage = urlParams.get('page');
if (collectionPage >1){
  $('.rte').hide();
}

function changevariant(e){
  let all_variant = e.parentNode.children;
  let value = e.children[0].innerHTML;
  let value_json = JSON.parse(value);
  let MainFrame = e.parentNode.parentNode.children[0];
  let MainFrame_Img = MainFrame.children[0].children[0].children[0];
  let MainFrame_subtitle = MainFrame.children[1].children[1].children[0];
  let MainFrame_title = MainFrame.children[1].children[1].children[1];
  let MainFrame_price = MainFrame.children[1].children[2].children[0].children[0].children[0];
  let new_link = value_json.collection_url + "/products/" + value_json.url;
  let new_img = value_json.image;
  let new_subtitle = value_json.sub_title;
  let new_title = value_json.title;
  let new_price = value_json.price;
  for (let i=0; i<all_variant.length;i++){
    all_variant[i].style.border = "none";    
  }
  e.style.border = "1px solid #001E28";
  MainFrame.href = new_link;
  MainFrame_Img.srcset = new_img;
  MainFrame_subtitle.innerHTML = new_subtitle;
  MainFrame_title.innerHTML = new_title;
  MainFrame_price.innerHTML = new_price+'€';
}


let dark_modal = document.getElementsByClassName("variant_dark_modal");
// variant_close_button_a
if (document.getElementsByClassName("modify_a").length > 0) {
  let variant_modify_a = document.getElementsByClassName("modify_a");
  let variant_close_button_a = document.getElementsByClassName("variant_close_button_a");
  dark_modal[0].addEventListener("click", function(){hide_variant_list();});
  variant_close_button_a[0].addEventListener("click", function(){hide_variant_list();});
  variant_modify_a[0].addEventListener("click", function(){variantlist("a");});
}
// variant_close_button_b
if (document.getElementsByClassName("modify_b").length > 0) {
  let variant_modify_b = document.getElementsByClassName("modify_b");
  let variant_close_button_b = document.getElementsByClassName("variant_close_button_b");
  dark_modal[1].addEventListener("click", function(){hide_variant_list();});
  variant_close_button_b[0].addEventListener("click", function(){hide_variant_list();});
  variant_modify_b[0].addEventListener("click", function(){variantlist("b");});
}




function hide_variant_list(){
  //document.getElementsByClassName("variant_select_a")[0].style.display = "none";
  document.getElementsByClassName("variant_select_a")[0].classList.remove('active');
  setTimeout(function() {
    document.querySelector(".variant_select_a .variant_list_pick").style.transform = "translateX(0)";
  }, 300);

  document.getElementsByClassName("variant_select_b")[0].classList.remove('active');
  setTimeout(function() {
    document.querySelector(".variant_select_b .variant_list_pick").style.transform = "translateX(0)";
  }, 300);
  document.body.style.overflow = "scroll";
}



function variantlist(e){
  if (e=="a"){
    //document.getElementsByClassName("variant_select_a")[0].style.display = "flex";
    document.getElementsByClassName("variant_select_a")[0].classList.add('active');
    setTimeout(function() {
      document.querySelector(".variant_select_a .variant_list_pick").style.transform = "translateX(-496px)";
    }, 300);
    
    //document.getElementsByClassName("variant_list_pick")[0].style.overflow = "scroll";
    document.body.style.overflow = 'hidden';
  }
  else if (e=="b"){
    document.getElementsByClassName("variant_select_b")[0].classList.add('active');
    setTimeout(function() {
      document.querySelector(".variant_select_b .variant_list_pick").style.transform = "translateX(-496px)";
    }, 300);
    document.body.style.overflow = 'hidden';
  }
}

function load_compisitionsblock(){
  slideIndex = 0;
  $('.product-compositions').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

$(document).ready(function(){

  $("img.lazyload").lazyload();

});