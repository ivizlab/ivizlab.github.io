---
title: "iVizLab - Rethinking AI"
layout: textlay.njk
excerpt: "Rethinking AI"
permalink: /aiRethink/practice/
---
 
 
<style>
  /* All rules scoped under .rethink-wrap so they never touch the rest of the site.
     Font sizes below are fixed px on purpose (not rem) — rem inherits the site's
     root html font-size, which can be much smaller than 16px, shrinking headers
     relative to body text. Px keeps this section's type scale predictable. */
   html { overflow-x: hidden;}

  .rethink-wrap, .rethink-wrap *, .rethink-wrap *::before, .rethink-wrap *::after { box-sizing: border-box;}
  .rethink-wrap { max-width: 100%; font-family: 'Georgia', serif; font-size: 16px; color: #1A2631; line-height: 1.65;}
  .rethink-wrap img { max-width: 100%; height: auto; }
  .rethink-wrap .rt-figure { display: block; max-width: 80%; margin: 0.75rem auto; }

  .rt-section { margin-bottom: 100px; padding-top: 25px; border-top: 1px solid #E4EEED; }
  .rt-section:first-of-type { padding-top: 0; border-top: none; }
  .rt-section-label {font-size: 16px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #D4A873; margin-bottom: 0.3rem; }
  .rt-section h2 { font-size: 30px; font-weight: 400; margin-bottom: 2rem; line-height: 1.25; color: #1A2631; }
  .rt-section h3 { font-size: 19px; font-weight: 700; margin: 1rem 0 0.25rem; color: #1A2631; }
  .rt-section .subtitle{font-size: 18px;}
  .rt-section .large-text{ font-size: 22px;}
  .rt-section p{margin-bottom: 1.5rem}

  .rt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 0.75rem; }
  .rt-grid > * {min-width: 0;}

  @media (max-width: 600px) {
    .rt-grid {
      grid-template-columns: 1fr;
    }
  }

  .rt-nav-wrapper{padding-bottom: 25px;}
  @media (max-width: 600px) {
    .rt-nav-wrapper{border-top: 1px solid #656c6b;}
  }
  ul.rt-nav{ list-style-type: none; margin: 0; padding: 0; padding-top: 25px; overflow: hidden; }
  ul.rt-nav li {float: left; padding: 0px 10dvw 10px 0px;}
  ul.rt-nav li a{color:black;}

.rt-hero-img {display: block; width: 100vw !important; max-width: 100vw !important; margin: 0 calc(50% - 50vw) !important; padding-bottom: 0;}

.rt-hero-block{position: relative;}
.rt-hero-text { position: absolute; bottom: 0; left: calc(50% - 50vw); background-color: #ffffff86; border-radius: 0 8px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);padding: 0px 50px 0px calc(50vw - 50% + 15px);}

.nm{margin-bottom: 25px; padding-top: 25px;} /*no margin*/

.rt-hero-text h1{font-size: 32pt; color: black; font-weight: 600;}
.rt-hero-text p{font-size: 14pt; color: black; font-weight: 400; margin-bottom: 20px;}

/* Make hero title/subtitle scale down before they overwhelm the image */
.rt-hero-text h1 { font-size: clamp(22px, 6vw, 32pt); }
.rt-hero-text p  { font-size: clamp(13px, 3.5vw, 14pt); }
 iframe{width: 100%; aspect-ratio:16/9;}

.rt-video-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%;}
.rt-video-grid .rt-full-card img { width: 100%; height: auto; display: block;}

.video-card.shorts {
  flex: 0 0 200px;   
  img {aspect-ratio: 9 / 16;  object-fit: cover; object-position: center;}
  .rt-full-card{width: 100%;}
}

/* Shows a grey play button on the video grid on-hover */
.rt-full-card .rt-thumb {position: relative; overflow: hidden; display: block;}
.rt-full-card .rt-thumb::before {content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0); transition: background 0.2s ease;}
.rt-full-card:hover .rt-thumb::before {background: rgba(0,0,0,0.15);}
.rt-full-card .rt-thumb::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-width: 20px 0 20px 30px;
  border-color: transparent transparent transparent rgb(140, 140, 140);
  opacity: 0;
  transition: opacity 0.2s ease;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.35));
}
.rt-full-card:hover .rt-thumb::after {opacity: 1;}

/* Below a breakpoint, drop the overlay entirely and stack instead for the hero img and title */
@media (max-width: 600px) {
  .rt-hero-text {
    position: static;
    left: auto;
    bottom: auto;
    background-color: #fff;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-radius: 0;
    width: 100%;
    padding: 12px 20px 20px;
    margin: 0 calc(50% - 50vw); /* keep it edge-to-edge like the image */
  }
}
</style>

<div class="rethink-wrap">

<!-- Hero and Title -->
<div class="rt-hero-block">
  <img class="rt-hero-img" src="/assets/images/res/airethink-hero.png">
  <div class="rt-hero-text">
    <h1>AiRethink</h1>
    <p class="subtitle">A Community Answer to Corporate AI</p>
  </div>
</div>

<!-- Navigation -->
<div class="rt-nav-wrapper">
  <ul class="rt-nav">
    <li><a href="/aiRethink/">Overview</a></li>
    <li><a href="/aiRethink/practice"><b>In Practice</b></a></li>
    <li><a href="/aiRethink/getinvolved">Get Involved</a></li>
  </ul>
</div>

<!-- Shorts Carousel-->
<div class="rt-section nb" style="padding-top:25px; margin-top:0px;">
  <div class="video-carousel-container">
    <button class="carousel-control-btn prev" onclick="scrollCarousel(-1)">&#10094;</button>
    <div class="video-carousel" id="videoSlider">
      {% for short in hilmaShorts %}
      <div class="video-card shorts">
        <a href="https://www.youtube.com/shorts/{{ short.id }}" target="_blank">
          <img src="https://img.youtube.com/vi/{{ short.id }}/maxresdefault.jpg" alt="{{ short.title }}">
          <p>{{ short.title }}</p>
        </a>
      </div>
      {% endfor %}
    </div>
    <button class="carousel-control-btn next" onclick="scrollCarousel(1)">&#10095;</button>
  </div>
</div>

<!-- Full Frame Video -->
<div class="rt-section nm" style="padding-top:50px;">
  <iframe src="https://www.youtube.com/embed/0oftfWVBang?si=MXeocZsIpgmmUIW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>

  <h3 style="margin-bottom: 1rem;"><b><br>Realtime interactive programmable genAI video</b></h3>
  <p>With the Advanced Stream DIffusion based artist tool we built ( ivizDiff ) - we can use source images - and even use several and blend them. And prompts ( again many and wieght them) - and either live video or looped video files which we can control in realtime interactiveluy  with all our advanced paramaters to make a realtime video with full interactive control including as you see here mapping live music,  breath work, mic levels, hand gestures, and game controllers. We can also have several personally trained models LORAs on a users work or ideas. Here I am using my own original art work as image  inputs and a lora trained on my style ( my art work) - all with me controlling my face video. See other demos of inputs from a living tree, or physically based manipulation for realtime architecture ideation.</p>
</div>

<!-- Video Grid -->
<div class="rt-section nm rt-video-grid">
 {% for video in hilmaVideos %}
 <div class="rt-full-card">
      <a href="https://www.youtube.com/watch?v={{ video.id }}" target="_blank">
        <div class="rt-thumb">
          <img src="https://img.youtube.com/vi/{{ video.id }}/mqdefault.jpg" alt="{{ video.title }}">
        </div>
        <p>{{ video.title }}</p>
      </a>
  </div>
    {% endfor %}
</div>

<!-- Shorts Carousel Script -->
<script>
function scrollCarousel(direction) {
  const slider = document.getElementById('videoSlider');
  slider.scrollBy({ left: direction * 300, behavior: 'smooth' });
}
</script>