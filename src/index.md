---
title: "iVizLab - Home"
layout: homelay.njk
excerpt: "iVizLab, SFU."
permalink: /
---

<!-- All the CSS here is for the hero carousel at the top of the page -->
<style>
  html { overflow-x: hidden; }
  
  .hero-carousel {position: relative; width: 100vw; max-width: 100vw; margin: 0 calc(50% - 50vw);overflow: hidden;}
  .hero-carousel-track { display: flex; transition: transform 0.5s ease;}
  .hero-slide {flex: 0 0 100%; min-width: 0;}
  .hero-slide img {display: block; width: 100%; height: auto;}

  .hero-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.4);
    color: #fff;
    border: none;
    font-size: 20px;
    line-height: 1;
    padding: 10px 14px;
    cursor: pointer;
    z-index: 2;
    border-radius: 4px;
  }
  .hero-arrow.prev { left: 12px; }
  .hero-arrow.next { right: 12px; }
  .hero-arrow:hover { background: rgba(0,0,0,0.6); }

  .hero-dots { position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 2;}
  .hero-dot {width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,0.5); cursor: pointer; padding: 0; border: none;}
  .hero-dot.active { background: #fff; }

</style>

<!-- Hero Carousel -->
<div class="hero-carousel" id="heroCarousel">
  <div class="hero-carousel-track">
    {% for slide in heroSlides %}
    <div class="hero-slide">
      <img src="{{ slide.image }}" alt="{{ slide.alt }}">
    </div>
    {% endfor %}
  </div>
  <button class="hero-arrow prev" aria-label="Previous slide">&#10094;</button>
  <button class="hero-arrow next" aria-label="Next slide">&#10095;</button>
  <div class="hero-dots">
    {% for slide in heroSlides %}
    <button class="hero-dot{% if loop.first %} active{% endif %}" aria-label="Go to slide {{ loop.index }}"></button>
    {% endfor %}
  </div>
</div>


<section class="two-col">
  <!-- Introduction -->
  <div>
    <h1>Welcome to the iViz Lab</h1>
    <p class="large-text" ><a href="https://www.sfu.ca/" target="_blank">Simon Fraser University</a> in the School SIAT. (see <a href="/research">Research</a>).</p>
    <p class="large-text" style="margin: 50px 0 50px 0;">iVizlab is - “An interdisciplinary human centric AI research lab that strives to make computational systems bend more to the human experience by incorporating biological, cognitive and behavioral knowledge models.” - <a href="/team">Dr. Steve DiPaola</a></p>
    <p><b>Our Focus:</b> Computer Modelling Human Expression/Cognition/Creativity – iVizLab is  focused on AI based computationally modelling (and understanding) of  human characteristics such as expression, emotion, behavior, empathy and creativity; including computer graphics based facial/character systems  and AI based cognitive modelling systems.</p>
    <p><b>Our Vision:</b> This “Expression Based Interactive or Intelligent Visualization (or  iViz) Lab” is grounded in the engineering of advanced AI techniques but  also computer graphics, data visualization and user interfaces and  strives to encompass work from the areas of cognitive science,  neuroscience, and the arts.</p>
  </div>

  <!-- News column on the right -->
  <div id="newsid">
    {% include "partials/news.njk" %}
  </div>
</section>

<!-- Videos at the bottom -->
<section style="border-top: 1px solid #E4EEED;">
  <div class="two-col">
    <h2>Latest Videos</h2>
    <p style="align-self:center; margin-top:16px; text-align:right;"><a href="https://www.youtube.com/@ivizlabYT" target="_blank">see more</a></p>
  </div>
  <div>
    <div class="row">
      {% for video in videos | limit(3) %}
      <div class="col-md-4 video-card">
        <a href="https://www.youtube.com/watch?v={{ video.id }}" target="_blank" rel="noopener" class="video-thumb">
          <img src="https://img.youtube.com/vi/{{ video.id }}/hqdefault.jpg" alt="{{ video.title }}" class="img-responsive">
          <span class="play-overlay"></span>
        </a>
        <p class="video-title">{{ video.title }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Hero Carousel Script -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  var track = carousel.querySelector('.hero-carousel-track');
  var slides = carousel.querySelectorAll('.hero-slide');
  var dots = carousel.querySelectorAll('.hero-dot');
  var prevBtn = carousel.querySelector('.hero-arrow.prev');
  var nextBtn = carousel.querySelector('.hero-arrow.next');
  var index = 0;
  var autoplayTimer;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    dots.forEach(function (d, di) {
      d.classList.toggle('active', di === index);
    });
  }

  function startAutoplay() {
    autoplayTimer = setInterval(function () { goTo(index + 1); }, 6000);
  }
  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  prevBtn.addEventListener('click', function () { goTo(index - 1); resetAutoplay(); });
  nextBtn.addEventListener('click', function () { goTo(index + 1); resetAutoplay(); });
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goTo(i); resetAutoplay(); });
  });

  var touchStartX = 0;
  track.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', function (e) {
    var diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 50) { goTo(index - 1); resetAutoplay(); }
    else if (diff < -50) { goTo(index + 1); resetAutoplay(); }
  });

  goTo(0);
  startAutoplay();
});
</script>