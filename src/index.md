---
title: "iVizLab - Home"
layout: homelay.njk
excerpt: "iVizLab, SFU."
permalink: /
---

[Simon Fraser University](https://www.sfu.ca) in the School [SIAT](https://www.sfu.ca/siat/). (see [Research](/research)).

iVizlab is - "An interdisciplinary **human centric AI research lab** that strives to make computational systems bend more to the human experience by **incorporating biological, cognitive and behavioral knowledge models**." - [Dr. Steve DiPaola](/dipaola)


<div id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover">
  <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
    <li data-target="#carousel" data-slide-to="3"></li>
    <li data-target="#carousel" data-slide-to="4"></li>
    <li data-target="#carousel" data-slide-to="5"></li>
  </ol>
  <div class="carousel-inner">
    <div class="item active">
      <img src="/assets/images/slider7001400/a1_1024x512.jpg" alt="Slide 1" />
    </div>
    <div class="item">
      <img src="/assets/images/slider7001400/a2_1024x512.jpg" alt="Slide 2" />
    </div>
    <div class="item">
      <img src="/assets/images/slider7001400/a3_1024x512.jpg" alt="Slide 3" />
    </div>
    <div class="item">
      <img src="/assets/images/slider7001400/a4_1024x512.jpg" alt="Slide 4" />
    </div>
    <div class="item">
      <img src="/assets/images/slider7001400/a5_1024x512.jpg" alt="Slide 5" />
    </div>
    <div class="item">
      <img src="/assets/images/slider7001400/a6_1024x512.jpg" alt="Slide 6" />
    </div>
  </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

**Our Focus:**
Computer Modelling Human Expression/Cognition/Creativity -- iVizLab is focused on AI based computationally modelling (and understanding) of human characteristics such as expression, emotion, behavior, empathy and creativity; including computer graphics based facial/character systems and AI based cognitive modelling systems.

**Our Vision:**
This "Expression Based Interactive or Intelligent Visualization (or iViz) Lab" is grounded in the engineering of advanced AI techniques but also computer graphics, data visualization and user interfaces and strives to encompass work from the areas of cognitive science, neuroscience, and the arts.

**Recent Videos:**
[See More](/media)

<div class="video-carousel-container">
  <button class="carousel-control-btn prev" onclick="scrollCarousel(-1)">&#10094;</button>
  <div class="video-carousel" id="videoSlider">
    {% for video in videos %}
    <div class="video-card">
      <a href="https://www.youtube.com/watch?v={{ video.id }}" target="_blank">
        <img src="https://img.youtube.com/vi/{{ video.id }}/mqdefault.jpg" alt="{{ video.title }}">
        <p>{{ video.title }}</p>
      </a>
    </div>
    {% endfor %}
  </div>
  <button class="carousel-control-btn next" onclick="scrollCarousel(1)">&#10095;</button>
</div>

<a href="/"><img src="/assets/images/ref/ivizLogo.jpg" class="img-responsive" width="40%" style="float: left" /></a>
<a href="https://www.sfu.ca/siat.html"><img src="/assets/images/ref/siatLogo.jpg" class="img-responsive" width="22%" style="float: left" /></a>
<a href="https://www.sfu.ca/"><img src="/assets/images/ref/sfuLogo.jpg" class="img-responsive" width="19%" style="float: left" /></a>

<script>
function scrollCarousel(direction) {
  const slider = document.getElementById('videoSlider');
  slider.scrollBy({ left: direction * 300, behavior: 'smooth' });
}
</script>
