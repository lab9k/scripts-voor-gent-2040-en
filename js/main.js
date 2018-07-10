
$(".menu-btn").click(() => {

  if($(".chapter-nav").is(".show")){
    $(".chapter-nav").removeClass("show");
    $(".page").removeClass("withsidebar");
    $(".navbar").removeClass("withsidebar");
    window.setTimeout(() => {
      $(".chapter-nav").addClass("hide");
    }, 510);

  } else{
    $(".chapter-nav").removeClass("hide");
    $(".chapter-nav").addClass("show");
    $(".page").addClass("withsidebar");
    $(".navbar").addClass("withsidebar");
    $(".overlay").addClass("open").fadeIn(500);
    $('html, body').css({
      overflow: 'hidden',
      height: '100vh'
    });
  }

});

$(".close, .overlay").click(() => {
  $(".chapter-nav").removeClass("show");
  $(".page").removeClass("withsidebar");
  $(".navbar").removeClass("withsidebar");
  $(".overlay").removeClass("open").fadeIn(500);
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  });
  window.setTimeout(() => {
    $(".chapter-nav").addClass("hide");
  }, 510);
});

$(() => {

  if($("div.in-chapter-nav").length > 0){
    $(".chapter-text").find("h3").each((i,el) => {
      $el = $(el);
      var slug = $el.text().toLowerCase().replace(/\s/g, "-").replace("'", "");
      $el.append("<a href='#"+slug+"' name='"+slug+"' ></a>")
      var $sectionLink = $("<li>"+$el.text()+"</li>");
      (($el) => {
        $sectionLink.click(() => {
          $(document).scrollTo( $el, 500, {offset:{top:-120}, easing:"swing" });
        });
      })($el);
      $("div.in-chapter-nav ul.sections").append($sectionLink);
    });
  }
});


// Fix chapter navigation in place when it's about to be scrolled off the window
var $fixedEl = $('.in-chapter-nav')
var fixedElPosition
var fixedElWidth = $fixedEl.width()

$(window).scroll(() => {
  if ($fixedEl.length > 0 ) {
    if ($(window).scrollTop() > $fixedEl.offset().top - 110 && !fixedElPosition) {
      fixedElPosition = $fixedEl.offset().top - 110
      $fixedEl.css('position', 'fixed').css('top', '90px').css('width', fixedElWidth + 'px');
      $('.return-top').show()
    }
    else if ($(window).scrollTop() < fixedElPosition) {
      fixedElPosition = null
      $fixedEl.css('position', 'relative').css('top', '0');
      $('.return-top').hide()
    }
  }
});
