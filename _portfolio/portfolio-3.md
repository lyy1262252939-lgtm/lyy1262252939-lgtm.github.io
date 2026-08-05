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

For small-angle attitude tracking, the research also develops a two-layer HOFA-GPC framework that combines local stabilizing control with online predictive optimization. Software-in-the-loop experiments in RflySim under actuator-channel noise achieved a maximum attitude-tracking error of 1.23 × 10<sup>−3</sup> rad, an RMS error of 7.44 × 10<sup>−5</sup> rad, and an online optimization time of approximately 1.2 ms, satisfying the 20 ms control period.
