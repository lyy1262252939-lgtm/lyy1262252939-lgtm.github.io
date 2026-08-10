---
title: "Predictive Control and State Estimation for Robotic Joint Servo Systems"
collection: portfolio
group: selected-research
order: 1
role: "Master's Researcher"
period: "Dec. 2024–Apr. 2027"
summary: "An HKF-HOFAPC framework for high-precision position control of PMSM robotic joint modules under random feedback noise, network-induced delays, and load-torque variations."
keywords:
  - PMSM
  - Robotic Joint Servo
  - HKF-HOFAPC
  - Networked Control
  - TI C2000 F28379D
---

This research uses the TI C2000 F28379D to build a dual-motor PMSM position-servo testbed for networked robotic joint modules. The experimental work covers equivalent drive-motor/load-motor mechanical modeling, identification of inertia, viscous damping, and torque constants, and an SVPWM-based FOC current-control system with current sampling, encoder feedback, coordinate transformations, and closed-loop signal processing.

## Dual-motor experimental testbed

<figure class="project-media">
  <a class="project-media__link" href="{{ '/images/research/pmsm/dual-motor-rigid-coupling-schematic.png' | relative_url }}" aria-label="Open the full-size dual-motor testbed schematic">
    <img src="{{ '/images/research/pmsm/dual-motor-rigid-coupling-schematic.png' | relative_url }}" width="6033" height="3416" alt="Line drawing of two permanent-magnet synchronous motors connected by a rigid coupling on an aluminum test base" loading="lazy" decoding="async">
  </a>
  <figcaption>Mechanical layout of the rigidly coupled dual-PMSM plant, with Motor 1 acting as the drive motor and Motor 2 providing the programmable load torque.</figcaption>
</figure>

<figure class="project-media">
  <a class="project-media__link" href="{{ '/images/research/pmsm/dual-motor-experimental-platform.png' | relative_url }}" aria-label="Open the full-size annotated PMSM experimental platform image">
    <img src="{{ '/images/research/pmsm/dual-motor-experimental-platform.png' | relative_url }}" width="2031" height="1231" alt="Annotated dual-motor PMSM test platform showing MATLAB Simulink, motor drives, magnetic encoder, rigid coupling, power supply, and drive and load motors" loading="lazy" decoding="async">
  </a>
  <figcaption>Annotated hardware-in-the-loop platform used for controller implementation, encoder-based feedback, and drive-motor/load-motor experiments.</figcaption>
</figure>

<figure class="project-media">
  <a class="project-media__link" href="{{ '/images/research/pmsm/f28379d-dual-motor-testbench.png' | relative_url }}" aria-label="Open the full-size PMSM experiment image">
    <img src="{{ '/images/research/pmsm/f28379d-dual-motor-testbench.png' | relative_url }}" width="1920" height="1080" alt="MATLAB Simulink motor-control experiment with a measured speed response and dual-motor test bench" decoding="async">
  </a>
  <figcaption>TI C2000 F28379D-based dual-motor PMSM experiment, showing the Simulink model, measured speed response, and hardware test bench.</figcaption>
</figure>

The PMSM position dynamics are formulated as a discrete second-order high-order fully actuated model. The resulting HKF-HOFAPC framework combines a locally stabilizing HOFA controller, a HOFA Kalman filter (HKF), and a high-order fully actuated predictive controller (HOFAPC). The HKF fuses model-predicted position with network-transmitted feedback, while a Diophantine-equation-based multistep prediction model compensates for network delay and load variation.

Hardware comparisons were conducted under random noise, network delays of 1–10 ms, and a 0.05 N·m load disturbance. Compared with HOFAPC and KF-HOFAPC, the proposed method further reduced tracking error and overshoot while retaining rapid recovery from load disturbances.
