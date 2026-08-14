---
permalink: /
title: "Yiyang Liu"
author_profile: true
nav_section: about
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-intro" aria-labelledby="profile-intro-title">
  <p class="profile-intro__eyebrow">M.Eng. Student · Control Science and Engineering</p>
  <h2 id="profile-intro-title">High-precision control for robotic and autonomous systems</h2>
  <p class="profile-intro__lead">My research centers on high-precision robotic servo control, predictive control, and state estimation, with particular interests in motor drives, learning-enhanced control, and active vibration suppression.</p>
  <p>I am an M.Eng. student at <strong>Shenzhen University</strong>, supervised by <strong>Prof. Li Qiu</strong>, and expect to complete my degree in June 2027. I received my B.Eng. in Electrical Engineering and Intelligent Control from Dongguan University of Technology. At Shenzhen University, I have a GPA of <strong>3.56/4.00</strong> and rank <strong>1st among 21 students</strong> in my program.</p>

  <ul class="research-tags" aria-label="Core research areas">
    <li>Robotic Servo Control</li>
    <li>Predictive Control</li>
    <li>State Estimation</li>
    <li>Motor Drives</li>
  </ul>

  <div class="profile-actions" aria-label="Academic profile links">
    {% if site.author.googlescholar %}<a class="btn btn--primary" href="{{ site.author.googlescholar }}">Google Scholar</a>{% endif %}
    <a class="btn btn--inverse" href="{{ '/cv/' | relative_url }}">View CV</a>
    {% if site.author.email %}<a class="btn btn--inverse" href="mailto:{{ site.author.email }}">Email</a>{% endif %}
  </div>
</section>

## Research Interests

<div class="interest-grid">
  <article class="interest-card">
    <h3>Robotic Servo Systems</h3>
    <p>High-precision robotic joint servo control, PMSM drives, motor control, parameter identification, and embedded FOC implementation.</p>
  </article>
  <article class="interest-card">
    <h3>Predictive Control</h3>
    <p>Predictive and model predictive control, high-order fully actuated system theory, and applications to motor drives and networked systems.</p>
  </article>
  <article class="interest-card">
    <h3>Estimation and Robust Performance</h3>
    <p>State estimation and observer design for measurement noise, network-induced delays, and load variations, together with learning-enhanced control and active vibration suppression.</p>
  </article>
  <article class="interest-card">
    <h3>Autonomous Aerial Vehicles</h3>
    <p>Quadrotor control and platforms that integrate perception, planning, and control for autonomous flight.</p>
  </article>
</div>

## Selected Research Highlights

<ul class="highlight-list">
  <li>Developed an integrated state-estimation and predictive-control framework for networked PMSM servo systems under random noise, communication delays, and load disturbances.</li>
  <li>Conducted motor–load modeling, parameter identification, embedded implementation, and experimental validation on the TI C2000 F28379D platform.</li>
  <li>Developed predictive observer-compensated high-order fully actuated control methods for linear switched reluctance machines.</li>
  <li>Participated in the development of an online-optimized predictive attitude-control framework and an autonomous quadrotor platform using PX4, ROS, MAVROS, RflySim, EGO-Planner, depth cameras, and LiDAR.</li>
  <li>Published two journal articles in the <em>International Journal of Systems Science</em> and <em>Aerospace Science and Technology</em>, and two IEEE conference papers at FASTA 2025; additional work has been submitted to <em>IEEE Transactions on Industrial Electronics</em>.</li>
  <li>Contribute as a core member to projects supported by the National Natural Science Foundation of China, the Natural Science Foundation of Guangdong Province, and the Shenzhen Basic Research Program.</li>
  <li>Received First Prize in the online simulation competition and Third Prize in the on-site real-system competition of the inaugural CICC Unmanned Systems Embodied Intelligence Algorithm Challenge in 2025.</li>
</ul>

## Education

<div class="education-list">
  <article class="education-item">
    <h3>Shenzhen University</h3>
    <p><strong>M.Eng. in Control Science and Engineering</strong></p>
    <p>Sep. 2024 – Expected Jun. 2027 · GPA: 3.56/4.00 · Rank: 1/21</p>
  </article>
  <article class="education-item">
    <h3>Dongguan University of Technology</h3>
    <p><strong>B.Eng. in Electrical Engineering and Intelligent Control</strong></p>
    <p>Sep. 2018 – Jun. 2022</p>
  </article>
</div>
