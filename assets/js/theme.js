(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Toggle Prodi pilihan 2
  $("#btn-pilihan-2").click(function () {
    $("#prodi-pilihan-2").toggleClass('hidden');
    if ($("#prodi-pilihan-2").hasClass("hidden")) {
      $("#btn-pilihan-2").text('Tambah Pilihan 2');
    } else {
      $("#btn-pilihan-2").text('Tutup Pilihan 2');
    }
  });

  //  Radio Kewarganegaraan
  $('input[type="radio"]').click(function () {
    var inputValue = $(this).attr("value");
    if ($(this).attr('id') == 'wnaRadio') {
      if ($('#input-kewarganegaraan').hasClass('hidden')) {
        $('#input-kewarganegaraan').toggleClass('hidden');
        $('#input-no-paspor').toggleClass('hidden');
      }
    } else if ($(this).attr('id') == 'wniRadio') {
      if (!$('#input-kewarganegaraan').hasClass('hidden')) {
        $('#input-kewarganegaraan').toggleClass('hidden');
        $('#input-no-paspor').toggleClass('hidden');
      }
    }
  });

  // Option Wali
  $("#guardianSelect").change(function () {
    if ($(this).val() == 'wali') {
      if ($('#input-guardian').hasClass('hidden')) {
        $('#input-guardian').toggleClass('hidden');
      }
    } else {
      if (!$('#input-guardian').hasClass('hidden')) {
        $('#input-guardian').toggleClass('hidden');
      }
    }
  });

  $("#guardianSelect").change(function () {
    if ($(this).val() == 'wali') {
      if ($('#input-guardian-relation').hasClass('hidden')) {
        $('#input-guardian-relation').toggleClass('hidden');
      }
    } else {
      if (!$('#input-guardian-relation').hasClass('hidden')) {
        $('#input-guardian-relation').toggleClass('hidden');
      }
    }
  });

  // Option Agama
  $("#religionSelect").change(function () {
    if ($(this).val() == 'kristen' || $(this).val() == 'katolik') {
      if ($('#input-asal-gereja').hasClass('hidden')) {
        $('#input-asal-gereja').toggleClass('hidden');
      }
    } else {
      if (!$('#input-asal-gereja').hasClass('hidden')) {
        $('#input-asal-gereja').toggleClass('hidden');
      }
    }
  });

  // CB Pernah Kuliah
  $("#cbPernahKuliah").change(function () {
    if ($(this).is(':checked')) {
      if ($('#input-asal-universitas').hasClass('hidden')) {
        $('#input-asal-universitas').toggleClass('hidden');
        $('#dp-tahun-kuliah').toggleClass('hidden');
      }
    } else {
      if (!$('#input-asal-universitas').hasClass('hidden')) {
        $('#input-asal-universitas').toggleClass('hidden');
        $('#dp-tahun-kuliah').toggleClass('hidden');
      }
    }
  });

  //  Auto Collapse
  //  Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      if (!$(".sidebar").hasClass("toggled")) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
      }
    } else {
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      }
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });



})(jQuery); // End of use strict
