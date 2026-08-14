---
title: "Autonomous Quadrotor UAV Platform"
collection: portfolio
group: selected-research
order: 3
role: "Master's Researcher"
period: "Jul. 2025–May 2027"
summary: "An integrated perception, planning, and control platform for autonomous takeoff, target traversal, dynamic obstacle avoidance, and vision-guided landing."
keywords:
  - Quadrotor UAV
  - PX4
  - ROS / MAVROS
  - EGO-Planner
  - HOFA-GPC
---

This project integrates perception, mission planning, motion control, and software-in-the-loop validation using PX4, ROS, MAVROS, RflySim, and EGO-Planner. A RealSense D435 depth camera and Livox MID-360 LiDAR provide depth sensing, target localization, environmental perception, and obstacle detection. The autonomous task workflow combines vision-language-model task understanding, local path planning, and a task state machine to support autonomous takeoff, target traversal, dynamic obstacle avoidance, and vision-guided landing.

## Autonomous mission demonstration

<figure class="project-media project-video">
  <video class="project-video__player" width="1156" height="720" controls preload="metadata" playsinline poster="{{ '/images/research/uav/autonomous-mission-demo-poster.jpg' | relative_url }}" aria-label="ROS and RViz autonomous UAV mission demonstration">
    <source src="{{ '/videos/research/uav/autonomous-mission-demonstration.mp4' | relative_url }}" type="video/mp4">
    <p class="project-video__fallback">Your browser does not support embedded video. <a href="{{ '/videos/research/uav/autonomous-mission-demonstration.mp4' | relative_url }}">Download the UAV mission demonstration</a>.</p>
  </video>
  <figcaption>ROS/RViz demonstration of environment mapping, mission dispatch, gate and target recognition, and vision-guided landing-marker detection.</figcaption>
</figure>

## Platform and flight validation

<figure class="project-media">
  <a class="project-media__link" href="{{ '/images/activities/cicc-2025/challenge-flight.jpg' | relative_url }}" aria-label="Open the full-size CICC challenge flight image">
    <img src="{{ '/images/activities/cicc-2025/challenge-flight.jpg' | relative_url }}" width="1260" height="834" alt="Quadrotor flying through a checkered gate during the CICC unmanned-systems challenge" decoding="async">
  </a>
  <figcaption>On-site flight during the inaugural CICC Unmanned Systems Embodied Intelligence Algorithm Challenge, Beijing, December 2025.</figcaption>
</figure>

<div class="project-gallery project-gallery--two" aria-label="Quadrotor hardware platforms">
  <figure class="project-gallery__item project-gallery__item--portrait">
    <a class="project-gallery__media" href="{{ '/images/research/uav/quadrotor-pixhawk.jpg' | relative_url }}" aria-label="Open the full-size quadrotor hardware image">
      <img src="{{ '/images/research/uav/quadrotor-pixhawk.jpg' | relative_url }}" width="3072" height="4096" alt="Top view of a custom quadrotor with exposed flight controller, GPS module, and wiring" loading="lazy" decoding="async">
    </a>
    <figcaption>Custom quadrotor hardware platform with integrated flight controller, GPS, and power system.</figcaption>
  </figure>
  <figure class="project-gallery__item project-gallery__item--portrait">
    <a class="project-gallery__media" href="{{ '/images/research/uav/quadrotor-onboard-compute.jpg' | relative_url }}" aria-label="Open the full-size onboard-computing quadrotor image">
      <img src="{{ '/images/research/uav/quadrotor-onboard-compute.jpg' | relative_url }}" width="3072" height="4096" alt="Top view of a custom sensor-equipped quadrotor with propeller guards" loading="lazy" decoding="async">
    </a>
    <figcaption>Custom quadrotor platform with onboard computing and protective propeller guards.</figcaption>
  </figure>
</div>

For small-angle attitude tracking, the research also develops a two-layer HOFA-GPC framework that combines local stabilizing control with online predictive optimization. Software-in-the-loop experiments in RflySim under actuator-channel noise achieved a maximum attitude-tracking error of 1.23 × 10<sup>−3</sup> rad, an RMS error of 7.44 × 10<sup>−5</sup> rad, and an online optimization time of approximately 1.2 ms, satisfying the 20 ms control period.

## Experimental environment

<div class="project-gallery project-gallery--three" aria-label="Indoor UAV experimental environment">
  <figure class="project-gallery__item project-gallery__item--landscape">
    <a class="project-gallery__media" href="{{ '/images/research/uav/lab-preparation.jpg' | relative_url }}" aria-label="Open the full-size UAV test-area preparation image">
      <img src="{{ '/images/research/uav/lab-preparation.jpg' | relative_url }}" width="4096" height="3072" alt="Indoor UAV laboratory area during early test-site preparation" loading="lazy" decoding="async">
    </a>
    <figcaption>Indoor UAV test area during facility preparation.</figcaption>
  </figure>
  <figure class="project-gallery__item project-gallery__item--landscape">
    <a class="project-gallery__media" href="{{ '/images/research/uav/motion-capture-area.jpg' | relative_url }}" aria-label="Open the full-size motion-capture area image">
      <img src="{{ '/images/research/uav/motion-capture-area.jpg' | relative_url }}" width="4096" height="3072" alt="Motion-capture cameras and safety net surrounding the indoor UAV flight area" loading="lazy" decoding="async">
    </a>
    <figcaption>Motion-capture and safety infrastructure for indoor flight testing.</figcaption>
  </figure>
  <figure class="project-gallery__item project-gallery__item--landscape">
    <a class="project-gallery__media" href="{{ '/images/research/uav/obstacle-course.jpg' | relative_url }}" aria-label="Open the full-size obstacle-course image">
      <img src="{{ '/images/research/uav/obstacle-course.jpg' | relative_url }}" width="5824" height="4368" alt="Indoor UAV obstacle course with two checkered flight gates" loading="lazy" decoding="async">
    </a>
    <figcaption>Obstacle-course setup for autonomous gate-traversal and avoidance tests.</figcaption>
  </figure>
</div>
