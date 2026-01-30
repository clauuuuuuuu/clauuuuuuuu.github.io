---
title: canbench
description: a custom pcb for monitoring CAN network performance
pubDatetime: 2026-01-30T16:00:00Z
featured: false
draft: false
thumbnail: ../../assets/images/projects/canbench.png
---

## current state
on hold since im more busy with other projects, and this is not that urgent / important. already had the custom pcb soldered, set some clock settings and pinout settings in stmcubemx already. see if i will have time to get back to it sometime, but probs not anytime soon :(

## motivation
i heard from cuhk robotics team teammates that the issue of the pi "lagging" is quite serious. it happens occasionally, and it causes the motor being controlled at that time to go wild. ymleung and i wanted to see if the preempt rt patch and switching to nvme would help. 

we saw from a [paper](https://antonio.paolillo.be/publications/workshops/ecrtsOspert2024_dewit_rtlinux_paper.pdf) where the author implemented the patch on a pi5 (the sbc used by our team), and ran some benchmarks. the concept sounded really cool, and if in our case we want to run some benchmarks on the CAN network specifically, we may need an external device as a probe, mainly cuz we will need an external clock

this can also be a fun project for me to learn pcb design and stm32 programming