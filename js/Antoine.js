function fermetureMenu() {
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
      ? ($(".header-layout").on("touchend", function () {
            $(document).find(".menuVisible").removeClass("menuVisible"), (test = $(".site-navigation")), cleanMenu(test);
        }),
        $(".menuVisible").on("touchend", function () {
            $(document).find(".menuVisible").removeClass("menuVisible");
        }),
        $(document).on("touchmove", function (e) {
            $(document).find(".menuVisible").removeClass("menuVisible"), (test = $(".site-navigation")), cleanMenu(test);
        }),
        $("button.collection-filter__btn.text-link").on("click", function () {
            $(this).hasClass("is-active") ? de : ($("#CollectionInlineFilterWrap > div").removeClass("is_active"), $("#CollectionInlineFilterWrap > div").removeClass("is-transitioning"));
        }))
      : ($("button.collection-filter__btn.text-link").on("click", function () {
            $(this).hasClass("is-active") || $("#CollectionInlineFilterWrap > div").removeClass("is_active is-transitioning");
        }),
        $(window).click(function () {
            $("#CollectionInlineFilterWrap > div").removeClass("is_active is-transitioning");
        }));
}
function testSuppression() {
  (tailleCollection = $(".collection-sidebar__group").length), tailleCollection == 2 && $(".collection-filter__inner").hide();
}
var attente = 500;
$(document).ready(function () {
  fermetureMenu(),
      testSuppression(),
      $(document).find(".menuVisible").removeClass("menuVisible"),
      suite(),
      testtest(),
      (step = $(".step").data("step")),
      document.querySelector("body > div > div > div > footer > ul > li:nth-child(2) > a"),
      step == "payment_method" &&
          ($(".condition-terms").show(),
          $("#continue_button").on("click", function () {
              if ($("#agree").is(":checked")) $(".erreur_coche").hide(), $(this).submit();
              else return $(".erreur_coche").show(), !1;
          })),
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
          ? ((attente = 1),
            $(".site-nav__expanded-item").on("touchend", function () {
                (maDiv = $(this)), (parentDiv = maDiv.parent()), sousMenu_Grisee(parentDiv), maDiv.find("a").addClass("menu_selected"), ajoutDiv2(), fermetureMenu();
            }))
          : ($(".site-nav__expanded-item").on("mouseover", function () {
                (maDiv = $(this)),
                    setTimeout(function () {
                        ajoutDiv();
                    }, attente),
                    fermetureMenu();
            }),
            $(".site-navigation").on("mouseleave", function () {
                $(document).find(".menuVisible").removeClass("menuVisible"), (attente = 500);
            }),
            $(".collapsibles-wrapper > div > a").addClass("btn"),
            $(".collapsibles-wrapper > div > a").addClass("btnWhite"),
            $("button.collection-filter__btn.text-link").on("click", function () {
                $(this).hasClass("is-active") ? console.log("apas") : (console.log("a"), $("#CollectionInlineFilterWrap > div").removeClass("is_active is-transitioning"));
            })),
      (bouton = document.getElementsByClassName("collection-filter__btn")),
      (croix = document.getElementsByClassName("svgCroixFermeture")),
      croix[0] != null &&
          ((croix = croix[1]),
          (croix.onclick = function () {
              bouton[0].click();
          })),
      (contact = document.querySelector("#FooterMenus > div > div > div:nth-child(1) > ul > li:nth-child(7) > a"));
});
function testAntoine() {
  console.log("TEST");
}
function ajoutDiv() {
  return (
      $(".menuVisible").removeClass(".menuVisible"),
      $(".site-nav__expanded-item").on("mouseover", function () {}),
      maDiv.is(":hover") == !0
          ? ((attente = 0), $(document).find(".menuVisible").removeClass("menuVisible"), (fils = maDiv.find(".site-nav__dropdown")), fils.addClass("menuVisible"), fils.find(".site-nav__dropdown-animate").addClass("textVisible"))
          : ($(document).find(".menuVisible").removeClass("menuVisible")),
      attente
  );
}
function ajoutDiv2() {
  return (
      $(".menuVisible").removeClass(".menuVisible"),
      $(".site-nav__expanded-item").on("mouseover", function () {}),
      $(document).find(".menuVisible").removeClass("menuVisible"),
      (fils = maDiv.find(".site-nav__dropdown")),
      fils.addClass("menuVisible"),
      fils.find(".site-nav__dropdown-animate").addClass("textVisible"),
      attente
  );
}
function cleanMenu(e) {
  (enfant = e.children()), (enfant2 = enfant.children()), enfant2.removeClass("menu_selected"), enfant2.removeClass("menu_grey");
}
function sousMenu_Grisee(e) {
  (enfant = e.children()), (enfant2 = enfant.children()), enfant2.removeClass("menu_selected"), enfant2.addClass("menu_grey");
}
function modifSlider() {
  $(".secondary-slide:nth-child(2)").style.left = "50%";
}
function testtest() {
  var e = $(".product__description").text(),
      i = e.indexOf("Download assembly instructions");
  i > -1 && ((test = e.substr(0, i)), $(".product__description").html(test));
}
function removeImage() {
  (test = $(" div.our-essentials__product-images > div > div > div > div > div.grid-item.grid-product.slick-slide.slick-current.slick-active > div > a > div.grid-product__image-wrap > div")),
      (test2 = $("div.our-essentials__product-images img")),
      test2.hide();
}
function suite() {
  window.innerWidth > 768 && $(".mobile-scroll").css("display", "none");
}
//# sourceMappingURL=/s/files/1/0603/2677/2912/t/11/assets/Antoine.js.map?v=135210967972979854781675985198
