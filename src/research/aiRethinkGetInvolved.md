---
title: "iVizLab - Rethinking AI"
layout: textlay.njk
excerpt: "Rethinking AI"
permalink: /aiRethink/getinvolved/
---


<style>
  /* All rules scoped under .rethink-wrap so they never touch the rest of the site.
  Font sizes below are fixed px on purpose (not rem) — rem inherits the site's
  root html font-size, which can be much smaller than 16px, shrinking headers
  relative to body text. Px keeps this section's type scale predictable. */
  
  html {overflow-x: hidden;}

  .rethink-wrap, .rethink-wrap *, .rethink-wrap *::before, .rethink-wrap *::after {box-sizing: border-box;}
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

  .rt-list { list-style: none; padding: 0; margin: 0.5rem 0; }
  .rt-list li { padding: 0.5rem 0 0.5rem 1rem; position: relative; border-bottom: 1px solid #E4EEED; font-size: 16px; line-height: 1.55; }
  .rt-list li:last-child { border-bottom: none; }
  .rt-list li::before { content: ''; position: absolute; left: 0; top: 1rem; width: 5px; height: 5px; border-radius: 50%; background: #027D7A; }

  .rt-grid-container{display: grid; grid-template-columns:1fr 3fr;}
  .rt-center-quote{align-self: center; justify-self: center; font-size:20px; padding: 50px;}

  .rt-nav-wrapper{padding-bottom: 25px;}
  @media (max-width: 600px) {
    .rt-nav-wrapper{border-top: 1px solid #656c6b;}
  }
  ul.rt-nav{ list-style-type: none; margin: 0; padding: 0; padding-top: 25px; overflow: hidden; }
  ul.rt-nav li {float: left; padding: 0px 10dvw 10px 0px;}
  ul.rt-nav li a{color:black;}

.rt-hero-img { display: block; width: 100vw !important; max-width: 100vw !important; margin: 0 calc(50% - 50vw) !important; padding-bottom: 0;}
.rt-hero-block{position: relative;}
.rt-hero-text {position: absolute; bottom: 0; left: calc(50% - 50vw); background-color: #ffffff86; border-radius: 0 8px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); padding: 0px 50px 0px calc(50vw - 50% + 15px);}

.nb{border:none;} /*no border*/

.rt-hero-text h1{font-size: 32pt; color: black; font-weight: 600;}
.rt-hero-text p{font-size: 14pt; color: black; font-weight: 400; margin-bottom: 20px;}

/* Make hero title/subtitle scale down before they overwhelm the image */
.rt-hero-text h1 { font-size: clamp(22px, 6vw, 32pt); }
.rt-hero-text p  { font-size: clamp(13px, 3.5vw, 14pt); }

/* Below a breakpoint, drop the overlay entirely and stack instead */
@media (max-width: 600px) {
  .rt-hero-text {position: static; left: auto; bottom: auto; background-color: #fff; backdrop-filter: none; -webkit-backdrop-filter: none; border-radius: 0; width: 100%; padding: 12px 20px 20px; margin: 0 calc(50% - 50vw); 
  }
}

.grid-half{display: grid; grid-template-columns: 1fr 1fr; gap: 10px;}
@media (max-width: 600px) {
  .grid-half {grid-template-columns: 1fr;}
}

/* Get Involved */
.giv-left{ display: flex; width: 90%; flex-direction: column; justify-content: space-between; padding: 20px; background-color: #F5EDE9;}
.giv-right{display: flex; flex-direction: column; padding: 20px; justify-items: flex-start; align-items: flex-start;}
.giv-button{ background-color: white; width: fit-content; padding: 1rem; border-radius: 10px;}
.giv-button p{color: #DABB82; font-weight: 500; margin: 0;}

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
    <li><a href="/aiRethink/practice">In Practice</a></li>
    <li><a href="/aiRethink/getinvolved"><b>Get Involved</b></a></li>
  </ul>
</div>

<!-- Get Involved -->
<div class="rt-section grid-half nb" style="padding-top:50px;">
  <div class="giv-left">
    <h2>Join Us in Re-Democratizing AI</h2>
    <p>We are actively seeking collaborators, community partners, and early  users. If your organization works in arts, culture, education,  Indigenous knowledge, or community services, we want to hear from you.</p>
    <div class="giv-button" ><a href="mailto:sdiplaola@sfu.ca" style="color:#D4A873;">Contact us at sdiplaola@sfu.ca</a></div>
  </div>
  <div class="giv-right">
    <h3><b>Who we are looking for</b><br><br></h3>
    <p><b>Faculty and researchers</b> to co-develop the Cultural Captioning framework with domain expertise in Indigenous, Asian, dance, design, or other traditions</p>
    <p><b>Cultural institutions and non-profits</b> to pilot Uness as a private, free AI tool for your community</p>
    <p><b>Artists and designers</b> to use and help shape the RethinkAI Creative Journey interface</p>
    <p><b>Students</b> interested in graduate research at the intersection of AI, ethics, and community</p>
  </div>
</div>

<!-- About -->
<div class="rt-section">
  <p class="rt-section-label">Who We Are</p>
  <h2>Artists and Researchers Who Build Tools and Use Them</h2>
  <p><i>We are not primarily researchers who study artists. We are artists and researchers who build tools and use them.</i></p>
  <p>The <a href="/team/">iVizLab team</a> at SFU is embedded in the communities we serve. We build working prototypes and deploy them in real creative and  professional contexts — gallery shows, Chinese scroll conservation,  dance and movement research, medical education, architectural ideation,  and animal communication studies — then refine the tools against genuine creative and community needs, not just lab conditions.</p>
  <p>This work is grounded in five published or submitted papers (AIES  2026, ICML 2026, IJCAI, ICCC 2023) covering inference-phase energy  visibility, Slow AI design principles, the environmental burden of  stored AI output ("AI slag," as distinct from "AI slop"), and culturally grounded generative systems. </p>
</div>
