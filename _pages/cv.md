---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
nav_section: cv
redirect_from:
  - /resume
---

<section class="profile-intro" aria-labelledby="cv-intro-title">
  <p class="profile-intro__eyebrow">Yiyang Liu · Shenzhen, China</p>
  <h2 id="cv-intro-title">Control Science and Engineering</h2>
  <p class="profile-intro__lead">M.Eng. student at Shenzhen University working on high-precision robotic joint servo control, predictive control, state estimation, and motor drives.</p>
  <p>Supervised by <strong>Prof. Li Qiu</strong> · Expected graduation: <strong>June 2027</strong></p>
  <div class="profile-actions" aria-label="Contact and academic links">
    {% if site.author.email %}<a class="btn btn--primary" href="mailto:{{ site.author.email }}">Email</a>{% endif %}
    {% if site.author.googlescholar %}<a class="btn btn--inverse" href="{{ site.author.googlescholar }}">Google Scholar</a>{% endif %}
    {% if site.author.orcid %}<a class="btn btn--inverse" href="{{ site.author.orcid }}">ORCID</a>{% endif %}
    {% if site.author.github %}<a class="btn btn--inverse" href="https://github.com/{{ site.author.github }}">GitHub</a>{% endif %}
  </div>
</section>

## Education

<div class="education-list">
  <article class="education-item">
    <h3>Shenzhen University</h3>
    <p><strong>M.Eng. in Control Science and Engineering</strong> · Advisor: Prof. Li Qiu</p>
    <p>Sep. 2024 – Expected Jun. 2027</p>
    <p>GPA: 3.56/4.00 · Rank: 1/21</p>
  </article>
  <article class="education-item">
    <h3>Dongguan University of Technology</h3>
    <p><strong>B.Eng. in Electrical Engineering and Intelligent Control</strong></p>
    <p>Sep. 2018 – Jun. 2022</p>
  </article>
</div>

## Research Interests

<ul class="research-tags" aria-label="Research interests">
  <li>High-Precision Robotic Joint Servo Control</li>
  <li>Predictive and Model Predictive Control</li>
  <li>State Estimation and Observer Design</li>
  <li>PMSM Drives and Motor Control</li>
  <li>High-Order Fully Actuated Systems</li>
  <li>Learning-Enhanced Control</li>
  <li>Active Vibration Suppression</li>
</ul>

## Research Experience

<div class="cv-entry-list">
  <article class="cv-entry">
    <header class="cv-entry__header">
      <div>
        <h3>Predictive Control and State Estimation for Robotic Joint Servo Systems</h3>
        <p class="cv-entry__role">Master's Researcher · Shenzhen University</p>
      </div>
      <p class="cv-entry__period">Dec. 2024 – Apr. 2027</p>
    </header>
    <ul>
      <li>Built a dual-motor PMSM position-servo platform based on the TI C2000 F28379D for networked robotic-joint research under random feedback noise, network-induced delay, and load-torque variation. Established an equivalent motor–load mechanical model and identified rotational inertia, viscous damping, and torque constants.</li>
      <li>Implemented an SVPWM-based field-oriented current-control system with current sampling, encoder feedback, coordinate transformations, and closed-loop signal processing.</li>
      <li>Formulated the PMSM position dynamics as a discrete second-order high-order fully actuated model and developed an HKF–HOFAPC framework combining local stabilizing control, a high-order fully actuated Kalman filter, and predictive control. The estimator fuses model-predicted position with network feedback, while a Diophantine-equation-based multistep predictor compensates for delays and load changes.</li>
      <li>Validated the method experimentally under random noise, 1–10 ms network delays, and a 0.05 N·m load disturbance. Compared with HOFAPC and KF–HOFAPC, the proposed method further reduced tracking error and overshoot while retaining rapid disturbance recovery. The related manuscript has been submitted to <em>IEEE Transactions on Industrial Electronics</em>.</li>
    </ul>
  </article>

  <article class="cv-entry">
    <header class="cv-entry__header">
      <div>
        <h3>Laboratory-Developed Autonomous Quadrotor Platform</h3>
        <p class="cv-entry__role">Master's Researcher · Shenzhen University</p>
      </div>
      <p class="cv-entry__period">Jul. 2025 – May 2027</p>
    </header>
    <ul>
      <li>Participated in platform construction and systems integration using PX4, ROS, MAVROS, RflySim, and EGO-Planner to combine perception, task planning, motion control, and software-in-the-loop validation.</li>
      <li>Integrated a RealSense D435 depth camera and Livox MID-360 LiDAR for depth acquisition, target localization, environmental perception, and obstacle detection. Contributed to an autonomous task pipeline combining vision-language-model task understanding, local planning, and a mission state machine for takeoff, target traversal, dynamic obstacle avoidance, and vision-guided landing.</li>
      <li>Contributed to a two-layer HOFA–GPC attitude-control framework that combines local stabilization with online predictive optimization. In RflySim software-in-the-loop tests with actuator-channel noise, the maximum attitude-tracking error was 1.23 × 10<sup>−3</sup> rad, the root-mean-square error was 7.44 × 10<sup>−5</sup> rad, and online optimization took approximately 1.2 ms within a 20 ms control period.</li>
      <li>The related work was published in <em>Aerospace Science and Technology</em>; I am the third author.</li>
    </ul>
  </article>
</div>

## Funded Research Projects

<div class="cv-entry-list">
  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>Networked Control of Variable-Topology Cooperative Motion Systems under Random Multidimensional Attacks</h3>
        <p class="cv-entry__native-title" lang="zh-CN">随机多维攻击下变拓扑协同运动系统网络化控制研究</p>
        <p class="cv-entry__role">General Program of the National Natural Science Foundation of China · No. 62373256 · Core Member</p>
      </div>
      <p class="cv-entry__period">Jan. 2024 – Dec. 2027</p>
    </header>
    <p>Prepare milestone research summaries and project materials, and participate in multidimensional-attack modeling, variable-topology cooperative-system modeling, networked-control design, stability analysis, simulation, and experimental validation.</p>
  </article>

  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>Predictive Control of Networked Cooperative Motion Systems with Semi-Markov Jumping Topologies under DoS Attacks</h3>
        <p class="cv-entry__native-title" lang="zh-CN">DoS攻击下Semi-Markov跳变拓扑结构网络化协同运动系统预测控制研究</p>
        <p class="cv-entry__role">General Program of the Natural Science Foundation of Guangdong Province · Core Member</p>
      </div>
      <p class="cv-entry__period">Jan. 2024 – Dec. 2026</p>
    </header>
    <p>Contribute to research synthesis and project materials, DoS-attack and Semi-Markov topology modeling, predictive-controller design, closed-loop stability and performance analysis, simulation, and experimental-platform validation.</p>
  </article>

  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>Distributed Cooperative Motion Control of Networked Heterogeneous Swarm Systems in Complex Environments</h3>
        <p class="cv-entry__native-title" lang="zh-CN">复杂环境下的网络化异构集群智能系统分布式协同运动控制研究</p>
        <p class="cv-entry__role">General Program of the Shenzhen Basic Research Program · No. JCYJ20240813141419025 · Core Member</p>
      </div>
      <p class="cv-entry__period">Nov. 2024 – Nov. 2027</p>
    </header>
    <p>Participated throughout project investigation, proposal preparation, research-plan review, technical-route design, and preliminary-results synthesis; subsequently contributed to heterogeneous-swarm modeling, distributed cooperative-control design, theoretical derivation, simulation, experimental validation, and milestone reporting.</p>
  </article>
</div>

## Publications and Patent

### Journal Articles

<ol class="cv-publication-list">
  <li><strong>Yiyang Liu</strong>, Yiting Ma, Li Qiu, and Feiqi Deng, “Predictive observer-compensated high-order fully actuated tracking control for linear switched reluctance machine,” <em>International Journal of Systems Science</em>, pp. 1–13, 2026.</li>
  <li>Li Qiu, Yiting Ma, <strong>Yiyang Liu</strong>, Jiayi Qiu, and Feiqi Deng, “Online-optimized high-order fully actuated generalized predictive control for quadrotor UAV attitude tracking,” <em>Aerospace Science and Technology</em>, vol. 178, Art. no. 113151, 2026.</li>
</ol>

### Conference Papers

<ol class="cv-publication-list">
  <li><strong>Yiyang Liu</strong>, Yiting Ma, Shishuo Chen, et al., “Predictive observer-compensated high-order fully actuated tracking control for linear switched reluctance machine,” in <em>Proceedings of the 4th Conference on Fully Actuated System Theory and Applications (FASTA)</em>, pp. 2706–2711, 2025. IEEE conference paper; oral presentation.</li>
  <li>Yiting Ma, <strong>Yiyang Liu</strong>, Yucheng Wang, et al., “High-order fully actuated strict-feedback system-based approach for modeling and tracking control of linear switched reluctance machine,” in <em>Proceedings of the 4th Conference on Fully Actuated System Theory and Applications (FASTA)</em>, pp. 262–267, 2025. IEEE conference paper.</li>
</ol>

### Manuscript

<ol class="cv-publication-list">
  <li>Li Qiu, <strong>Yiyang Liu</strong>, Yiting Ma, et al., “High-order fully actuated estimation and predictive control for PMSM drives under network-induced delay and random noise,” submitted to <em>IEEE Transactions on Industrial Electronics</em>.</li>
</ol>

### Chinese Invention Patent Application

<ol class="cv-publication-list">
  <li><span lang="zh-CN">邱丽，<strong>刘易旸</strong>，汪玉城，董灵涛，等．一种预测补偿的高阶全驱电机控制方法</span>，Chinese invention patent application no. 202610422476.7, Apr. 2026; substantive examination stage. Second inventor.</li>
</ol>

<p><a class="btn btn--small btn--outline" href="{{ '/publications/' | relative_url }}">View publication records</a></p>

## Conference Presentations and Academic Activities

<div class="cv-entry-list">
  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>2026 Conference on Complex Systems and Automation Control (CSAC 2026)</h3>
        <p class="cv-entry__role">Poster Presentation · Guangzhou</p>
      </div>
      <p class="cv-entry__period">Jun. 5–7, 2026</p>
    </header>
    <p>Presented research on high-precision tracking control of a linear switched reluctance machine using high-order fully actuated predictive control.</p>
  </article>

  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>First CICC Conference on Embodied Intelligent Systems and Applications</h3>
        <p class="cv-entry__native-title" lang="zh-CN">首届中国指挥与控制学会具身智能系统与应用大会</p>
        <p class="cv-entry__role">Poster Presentation · Beijing</p>
      </div>
      <p class="cv-entry__period">Dec. 13–14, 2025</p>
    </header>
    <p>Presented a laboratory research poster covering high-order fully actuated systems and multi-agent systems.</p>
  </article>

  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>4th Conference on Fully Actuated System Theory and Applications (FASTA 2025)</h3>
        <p class="cv-entry__role">Oral Presentation · Nanjing</p>
      </div>
      <p class="cv-entry__period">Jul. 4–6, 2025</p>
    </header>
    <p>Presented the first-authored conference paper on predictive observer-compensated high-order fully actuated tracking control for a linear switched reluctance machine, and helped organize a thematic exchange on applying fully actuated system theory to motor control and optimization.</p>
  </article>

  <article class="cv-entry cv-entry--compact">
    <header class="cv-entry__header">
      <div>
        <h3>IEEE/CAA Journal of Automatica Sinica 10th-Anniversary Academic Forum</h3>
        <p class="cv-entry__role">Forum Participant · Guangzhou</p>
      </div>
      <p class="cv-entry__period">Dec. 6–8, 2024</p>
    </header>
    <p>Participated in the forum on complex-system modeling, optimization, and control, helping refine research directions in high-order fully actuated predictive control and robotic motion control.</p>
  </article>
</div>

## Honors and Awards

<ul class="highlight-list">
  <li><strong>First CICC Unmanned Systems Embodied Intelligence Algorithm Challenge</strong> <span lang="zh-CN">（中国指挥与控制学会首届无人系统具身智能算法挑战赛）</span>: First Prize in the online simulation competition and Third Prize in the on-site real-system competition, Dec. 2025.</li>
  <li><strong>Shenzhen University Graduate Academic Scholarship:</strong> First Class, 2025–2026 academic year.</li>
  <li><strong>Shenzhen University Graduate Academic Scholarship:</strong> Second Class, 2024–2025 academic year.</li>
  <li><strong>Outstanding Key Volunteer Award</strong> <span lang="zh-CN">（十五运会和残特奥会赛会志愿者优秀骨干奖）</span>, Mar. 2026.</li>
</ul>

## Technical Skills

<div class="skill-grid">
  <article class="skill-card">
    <h3>Control and State Estimation</h3>
    <p>Model predictive control, HOFA predictive control, extended state observers, Kalman filtering, fuzzy control, LSTM-based state estimation, linear-matrix-inequality optimization, and Lyapunov stability analysis.</p>
  </article>
  <article class="skill-card">
    <h3>Motor and Robotic Control</h3>
    <p>PMSM robotic-joint servo systems, TI C2000 F28379D, HPM6200EVK, FOC, SVPWM, current- and position-loop control, parameter identification, state observation, and experimental motion-control validation.</p>
  </article>
  <article class="skill-card">
    <h3>Autonomous Systems and Platforms</h3>
    <p>Quadrotor UAVs, Pixhawk, RealSense D435, and Livox MID-360.</p>
  </article>
  <article class="skill-card">
    <h3>Software and Tools</h3>
    <p>MATLAB/Simulink, ROS 1, RflySim3D, Isaac Sim, QGroundControl, Code Composer Studio, and SEGGER Embedded Studio.</p>
  </article>
  <article class="skill-card">
    <h3>Languages</h3>
    <p>Native Mandarin; CET-4 English with experience reading technical literature, writing academic papers, and participating in technical communication.</p>
  </article>
</div>

## Contact

{% if site.author.email %}- Email: [{{ site.author.email }}](mailto:{{ site.author.email }}){% endif %}
{% if site.author.googlescholar %}- Google Scholar: [Yiyang Liu]({{ site.author.googlescholar }}){% endif %}
{% if site.author.orcid %}- ORCID: [{{ site.author.orcid | remove: 'https://orcid.org/' }}]({{ site.author.orcid }}){% endif %}
{% if site.author.github %}- GitHub: [{{ site.author.github }}](https://github.com/{{ site.author.github }}){% endif %}
