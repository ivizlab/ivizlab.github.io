---
title: "iVizLab - Rethinking AI"
layout: textlay.njk
excerpt: "Rethinking AI"
permalink: /aiRethink/
researchTag: aiMeaning
---

<style>
  /* All rules scoped under .rethink-wrap so they never touch the rest of the site.
     Font sizes below are fixed px on purpose (not rem) — rem inherits the site's
     root html font-size, which can be much smaller than 16px, shrinking headers
     relative to body text. Px keeps this section's type scale predictable. */
  .rethink-wrap, .rethink-wrap *, .rethink-wrap *::before, .rethink-wrap *::after {
    box-sizing: border-box;
  }
  .rethink-wrap {
    max-width: 100%;
    font-family: 'Georgia', serif;
    font-size: 16px;
    color: #1A2631;
    line-height: 1.65;
  }
  
  html {
  overflow-x: hidden;
}

  .rethink-wrap img { max-width: 100%; height: auto; }
  .rethink-wrap .rt-figure { display: block; max-width: 80%; margin: 0.75rem auto; }

  .rt-hero {
    background: #027D7A;
    color: #fff;
    padding: 2rem 1.5rem;
    border-radius: 8px;
    margin: 0.5rem 0 1.5rem;
  }
  .rt-hero-eyebrow { font-family: Arial, sans-serif; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #B2D8D6; margin-bottom: 0.5rem; }
  .rt-hero h2 { font-family: Arial, sans-serif; font-size: clamp(26px, 6vw, 36px); font-weight: 800; line-height: 1.2; margin: 0 0 0.4rem; color: #fff; }
  .rt-hero-sub { font-family: Arial, sans-serif; font-size: 17px; color: #D4EFED; font-style: italic; margin-bottom: 0.75rem; }
  .rt-hero-meta { font-family: Arial, sans-serif; font-size: 14px; color: #A8D8D5; }

  .rt-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    background: #B2D8D6;
    border: 1px solid #B2D8D6;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }
  .rt-stat {
    flex: 1 1 45%;
    min-width: 140px;
    background: #E8F4F3;
    padding: 0.9rem 0.8rem;
    text-align: center;
  }
  .rt-stat-num {font-size: 26px; font-weight: 800; color: #027D7A; line-height: 1; margin-bottom: 0.25rem; }
  .rt-stat-label { font-family: Arial, sans-serif; font-size: 13px; color: #3D5263; line-height: 1.3; }

  .rt-section { margin-bottom: 100px; padding-top: 25px; border-top: 1px solid #E4EEED; }
  .rt-section:first-of-type { padding-top: 0; border-top: none; }
  .rt-section-label {font-size: 16px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #D4A873; margin-bottom: 0.3rem; }
  .rt-section h2 { font-size: 30px; font-weight: 400; margin-bottom: 2rem; line-height: 1.25; color: #1A2631; }
  .rt-section h3 { font-size: 19px; font-weight: 700; margin: 1rem 0 0.25rem; color: #1A2631; }
  .rt-section .subtitle{font-size: 18px;}
  .rt-section .large-text{ font-size: 22px;}
  .rt-section p{margin-bottom: 1.5rem}


  .rt-pull-quote { border-left: 4px solid #027D7A; padding: 0.5rem 0 0.5rem 1rem; margin: 1rem 0; font-style: italic; font-size: 18px; color: #4A7C7A; }

  .rt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 0.75rem; }
  .rt-card { border-radius: 8px; padding: 1.1rem 1.25rem; }
  .rt-card.teal { background: #E8F4F3; }
  .rt-card.rust { background: #F5EDE9; }
  .rt-card-label { font-family: Arial, sans-serif; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.2rem; }
  .rt-card.teal .rt-card-label { color: #027D7A; }
  .rt-card.rust .rt-card-label { color: #C05A3A; }
  .rt-card-title { font-family: Arial, sans-serif; font-size: 21px; font-weight: 800; margin-bottom: 0.15rem; }
  .rt-card-sub { font-family: Arial, sans-serif; font-size: 14px; font-style: italic; margin-bottom: 0.6rem; }
  .rt-card.teal .rt-card-sub { color: #4A7C7A; }
  .rt-card.rust .rt-card-sub { color: #C05A3A; }
  .rt-card-body { font-size: 16px; line-height: 1.6; }
  .rt-card-status { font-family: Arial, sans-serif; font-size: 14px; font-weight: 700; margin-top: 0.6rem; }
  .rt-card.teal .rt-card-status { color: #027D7A; }
  .rt-card.rust .rt-card-status { color: #C05A3A; }
  .rt-card-target { font-family: Arial, sans-serif; font-size: 13px; font-style: italic; color: #3D5263; margin-top: 0.2rem; }

  .rt-list { list-style: none; padding: 0; margin: 0.5rem 0; }
  .rt-list li { padding: 0.5rem 0 0.5rem 1rem; position: relative; border-bottom: 1px solid #E4EEED; font-size: 16px; line-height: 1.55; }
  .rt-list li:last-child { border-bottom: none; }
  .rt-list li::before { content: ''; position: absolute; left: 0; top: 1rem; width: 5px; height: 5px; border-radius: 50%; background: #027D7A; }

  .rt-cta { background: #1A2631; color: #fff; padding: 1.75rem 1.25rem; text-align: center; border-radius: 8px; margin-bottom: 1.5rem; }
  .rt-cta-quote { font-style: italic; color: #A8D8D5; font-size: 17px; max-width: 520px; margin: 0 auto 1rem; line-height: 1.55; }
  .rt-cta-btn { display: inline-block; background: #027D7A; color: #fff; font-family: Arial, sans-serif; font-size: 15px; font-weight: 700; padding: 0.65rem 1.4rem; border-radius: 4px; text-decoration: none; margin: 0.3rem; }
  .rt-cta-btn.outline { background: transparent; border: 2px solid #B2D8D6; color: #B2D8D6; }

  .rt-grid-container{display: grid; grid-template-columns:1fr 3fr;}
  .rt-center-quote{align-self: center; justify-self: center; font-size:20px; padding: 50px;}

  .rt-nav-wrapper{padding-bottom: 25px;}
  ul.rt-nav{ list-style-type: none; margin: 0; padding: 0; padding-top: 25px; overflow: hidden; }
  ul.rt-nav li {float: left; padding: 0px 100px 10px 0px;}
  ul.rt-nav li a{color:black;}

.rt-hero-img {
  display: block;
  width: 100vw !important;
  max-width: 100vw !important;
  margin: 0 calc(50% - 50vw) !important;
  padding-bottom: 0;   /* was 30px */
}

.rt-hero-block{position: relative;}
.rt-hero-text {
  position: absolute;
  bottom: 0;
  left: calc(50% - 50vw);   
  background-color: #ffffff86;
  border-radius: 0 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0px 50px 0px calc(50vw - 50% + 15px);
}

.nm{margin-bottom: 25px; padding-top: 25px;}
.nb{border:none;}

.rt-hero-text h1{font-size: 32pt; color: black; font-weight: 600;}
.rt-hero-text p{font-size: 14pt; color: black; font-weight: 400; margin-bottom: 20px;}

  @media (max-width: 480px) {
    .rt-stat { flex: 1 1 100%; }
  }
</style>

<div class="rethink-wrap">

<div class="rt-hero-block">
  <img class="rt-hero-img" src="/assets/images/res/airethink-hero.png">
  <div class="rt-hero-text">
    <h1>AiRethink</h1>
    <p class="subtitle">A Community Answer to Corporate AI</p>
  </div>
</div>


<div class="rt-nav-wrapper">
  <ul class="rt-nav">
    <li><a href="/aiRethink/"><b>Overview</b></a></li>
    <li><a href="/aiRethink/practice">In Practice</a></li>
    <li><a href="/aiRethink/getinvolved">Get Involved</a></li>
  </ul>
</div>

  <strong>[See Related Papers](#paperSection) and Related Projects:</strong>
  [Semantic Meaning & Analysis](/aiMeaning) &nbsp; [AI Modeling Thought & Language](/aiThought) &nbsp; [AI Affective Virtual Human](/virtualHumans)<br>
  [XR Avatars; Edu, Coaches, Health](/xrAvatars) &nbsp; [Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)<br>

  <p><b>Researchers:</b><a href="/team/"> Steve DiPaola</a>, <a href="/team/">Vanessa Utz</a>, <a href="/team/">Rafael Arias Gonzalez</a></br>
  <b>Funders:</b> SSHRC Insight Grant 2026–2030</p>

<div class="rt-section nm nb">
  <p class="large-text">Rethinking what AI should be: local, open, human-led, and owned by no one but you. Ai Rethink is a research initiative building a full-stack alternative to corporate AI - free and unlimited systems that run  privately on your own computer, on open models and open tools, with the  human, not the cloud, in charge.</p>
</div>

<div class="rt-section nm nb" style="margin-bottom: 100px;">
  <p class="rt-section-label">The Problem</p>
  <h2>What is wrong with AI today and who gets to fix it?</h2>
  <p>Corporate AI has one architecture: your words travel to their  servers, their model answers, and everything about the exchange belongs  to them &mdash; your data, the running cost, the model, and the rules. From  that single design choice, the familiar problems follow.</p>
 <p><b>Privacy.</b> Your prompts, documents, and creative work are routed through corporate  infrastructure under terms you don't set and can't renegotiate.</p>
 <p><b>Access.</b> Subscription walls and rate limits price out students, non-profits,  Indigenous communities, and cultural organizations &mdash; the very groups  with the most to gain
</p>
<p><b>Energy.</b> Cloud inference consumes energy at a scale that meaningfully harms the  climate, and none of that cost is ever shown to the person incurring it.</p>
<p><b>Data taken without consent.</b> The dominant models were trained on copyrighted and culturally sensitive works, with no attribution and no provenance.</p>
<p><b>Cultural flattening.</b> A graduate student in our lab, studying Chinese art conservation, fed  traditional Chinese scroll paintings into a leading commercial model and received output shaped by modern Japanese aesthetics. That is not a  glitch; it is Western-dominated bias baked in at the data level, and  Indigenous and non-Western traditions are harmed most.</p>
<p><b>Passive use.</b> The "you prompt, AI produces" pattern  erodes the reasoning, questioning, and synthesis of the people who use  it &mdash; and, in creative fields, displaces the artist from their own  process.</p>

</div>

<div class="rt-section">
  <p class="rt-section-label">Two Projects &mdash; One Unified Mission</p>
  <h2>Same Foundation, Two Layers</h2>
  <p>The two projects share the foundation above but attack different layers  of the AI stack and, to our knowledge, no one else is rebuilding both. Open infrastructure answers "how do you run AI without corporate  capture?" A new model answers "is what's inside the model ethical?" You  need both.</p>
  <div class="rt-grid">
    <div class="rt-card teal">
      <p class="rt-card-label">Project 1</p>
      <p class="rt-card-title">Uness (<a href="https://uness.org" target="_blank" rel="noopener noreferrer">uness.org</a>)</p>
      <p class="rt-card-sub">The Knowledge Layer &mdash; LLM / Text AI</p>
      <p class="rt-card-body">A fully open-source, locally-run AI system. Free, private, no cloud, no subscription. Runs on your Mac or PC. Designed for deliberate, human-led use.</p>
      <p class="rt-card-status">Status: v4.0 deployed</p>
      <p class="rt-card-target">Students &middot; educators &middot; non-profits &middot; Indigenous groups &middot; cultural institutions</p>
    </div>
    <div class="rt-card rust">
      <p class="rt-card-label">Project 2</p>
      <p class="rt-card-title">The Hilma Project</p>
      <p class="rt-card-sub">The Creative Layer &mdash; Visual / Image AI</p>
      <p class="rt-card-body">A new visual generative model built from ethically sourced data, with culturally grounded captioning and a Creative Journey interface that puts artists in control.</p>
      <p class="rt-card-status">Funding: Large 5 year SSHRC Insight Grant</p>
      <p class="rt-card-target">Artists &middot; designers &middot; cultural institutions &middot; Indigenous communities</p>
    </div>
  </div>
  <p><br>Uness takes its name as a phonetic play on Eunice, for Eunice Newton Foote, whose 1856 experiments first showed that CO₂-rich air traps heat, an early articulation of the greenhouse effect; her paper was read at the AAAS meeting by a male colleague, and her insight went uncredited for over a century, making her name a fitting choice for a system built around environmental transparency and returning control to the people usually left out. </p>
  <p>The Hilma Project, its companion, is named for Hilma af Klint, the pioneering abstract painter who worked outside the commercial art market and went unrecognized for decades, echoing Foote's own erased history. Funded by a major five-year SSHRC Insight Grant (2026-2030), Hilma reorients visual generative AI to protect and empower artists and cultural communities rather than displace them.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label" style="color:#15BA7C">Project 1</p>
  <h2>Uness: The Knowledge Layer</h2>
    <div class="rt-grid">
      <img src="/assets/images/res/energy4all.jpg">
      <p class="rt-center-quote">Uness is our fully open-source, locally-run LLM system for  reflective knowledge work: free, unlimited, and private, designed to  democratize access to AI and shrink the digital divide.</p>
    </div>
  <p><b>Runs on your machine.</b> A single mid- to high-end consumer Mac or PC. No cloud dependencies, no logins, no costs; your  conversation history stays on your own file system.</p>
  <p><b>Open, modular models.</b> You choose the distilled  open model that fits your hardware and your energy goals &mdash; smaller for  light tasks, larger when the work demands it.</p>
  <p><b>Built for orchestration.</b> Web research,  reasoning, and document knowledge (PDF, DOCX, TXT) are deliberately  separate tools you invoke on purpose &mdash; human-in-the-loop by design, with live efficiency tips as you work.</p>
  <p><b>Deployed now.</b> v4.0 is in real use with  students, researchers, and community partners &mdash; from Indigenous  knowledge projects and medical education to Chinese art conservation and animal communication research.</p>
  <p>Learn More: <a href="https://uness.org" target="_blank" rel="noopener noreferrer">uness.org</a></p>
</div>

<div class="rt-section">
  <p class="rt-section-label" style="color:#C05A3A">Project 2</p>
  <h2>RethinkAI: The Creative Layer</h2>
  <p>A new visual generative model built from ethically sourced data, with culturally grounded captioning and a Creative Journey interface that puts artists in control. AI ReThink fundamentally reorients visual generative AI to protect and empower artists and cultural communities rather than displace them. </p>
  <p>Artists have always pushed at the material boundaries of their craft,  from the move to oil paint, to the camera, to digital tools and generative code. Each shift was resisted, absorbed, and eventually became its own vocabulary in the hands of practitioners who took it seriously. We see AI the same way: not as a replacement for human creative labor, and not as something to adopt wholesale because it exists, but as a new medium whose material properties artists are still discovering. The question worth asking is not whether AI belongs in the studio, but on whose terms, with what materials, and toward what ends.</p>
    <img src="/assets/images/res/air_map.jpg" alt="Diagram comparing passive prompting vs. HITL orchestration workflow" class="rt-figure">
    <h3 style="margin-top:25px;">Why a New Model, Not Just a New Interface</h3>
    <p>Today's image models were trained on copyrighted and culturally  sensitive work taken without consent, captioned by systems that flatten  cultural and aesthetic distinctions, and tuned toward a pop-commercial  center of gravity. Every artist who uses them feels the pull: outputs  drift toward the same polished, Western, market-tested look. For an  artist trying to reach what is in their own head and heart, that gravity is hard to escape, the model keeps dragging the work back toward  everyone else's. Fixing this requires going below the interface, to the  data and the model itself. We are doing that across three objectives.</p>
    <p><b>1 An Ethically Sourced Dataset and a New Model</b><p>
    <p>A new visual generative model trained exclusively on pre-1932  public domain artworks and design works &mdash; legally clean and fully  documented, with special emphasis on Canadian and Indigenous artistic  traditions. Every source, artist, and image will be publicly searchable. Provenance is not an afterthought; it is a design requirement.</p>
    <p><b>2 Culturally Grounded Captioning</b><p>
    <p>A semantic captioning and retraining system built with Indigenous  communities, Asian cultural experts, dance and movement practitioners,  designers, and other domain experts. The goal: captions that preserve  cultural specificity, art-historical knowledge, stylistic nuance, and  technical execution &mdash; instead of erasing them. We are actively seeking  faculty collaborators across traditions to help build this "Culture  Caption" framework.</p>
    <p><b>3 The Creative Journey Interface</b><p>
    <p>Artists don't prompt in the real world; they journey. Hilma maps  every step of a creative session and makes that map visible and  navigable: move forward, return to an earlier branch, label, fork in a  new direction, and see the whole territory of your own creative process. Session-specific personalization adapts the model to the artist's  emerging direction &mdash; toward their vision, not the market's.  Human-in-the-loop throughout, running locally, with the energy dashboard integrated so artists see the cost of every session.</p>
</div>

<div class="rt-section">
  <h2>One Foundation, Three Commitments</h2>
  <p class="large-text">Everything we build, both projects, every tool, rests on the same three commitments, in this order.</p>
  <p><b>1 Ownership &mdash; Free, Local, Private, Unlimited</b><p>
  <p>This is the base condition for everything else. Our systems run entirely on your own computer, on open models and open tools. No cloud, no  login, no API key, no subscription, no rate limit. Your prompts, your  documents, and your creative work never leave your machine &mdash; which means there is nothing for a company to collect, mine, or monetize. AI you  can actually own, on hardware you already have.</p>
  <p><b>2 Orchestration &mdash; Humans Conduct, AI Plays a Part</b><p>
  <p>We are moving away from the "you prompt, AI produces" trap. Passive  prompting leads to cognitive atrophy: the slow erosion of reasoning,  questioning, synthesis, and reflection. Real professional and creative  work is never one-shot &mdash; so our systems are built for active  orchestration. You decompose the problem, direct each step, verify the  output, then fork, reflect, and continue. You are the conductor; AI  executes a part. This human-in-the-loop philosophy shapes the interface  of both projects.</p>
  <img src="/assets/images/res/human_loop.jpg" alt="Diagram comparing passive prompting vs. HITL orchestration workflow" class="rt-figure">
  <p><b><br>3 Sustainability &mdash; Energy You Can See and Manage</b><p>
  <p>Running locally already cuts energy use to a fraction of cloud AI:  our measured 0.13 watt-hours per query, against an estimated 20–50  watt-hours for GPT-5. But we go further. Both tools include a real-time  energy dashboard, so the environmental cost of every prompt and every  session is visible as you work. Our published user studies show that  this visibility changes behavior &mdash; people query more deliberately when  they can see the cost.<br><br></p>
    <img src="/assets/images/res/energy4all.jpg" alt="Diagram comparing passive prompting vs. HITL orchestration workflow" class="rt-figure">
</div>





<div id="paperSection"></div>

**------ PAPERS: AI Rethink ------**

{% for publi in publist %}
  {% if "aiThought" in publi.research or "aiEthics" in publi.research %}
    <pubtit>{{ publi.title }}</pubtit> by
    {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
    <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}