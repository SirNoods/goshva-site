---
title: govee-cli
layout: post.njk
---
[← Back to Projects](/projects)

# govee-cli

**govee-cli** is a lightweight terminal tool I built to control my Govee smart lighting devices — because I like everything scripted, automatable, and under control.

## Why I made it  
I’ve got smart lights around my apartment, but flipping each one manually through the official app felt too slow and clunky. So I built a tool in **Python** to command my Govee lights by alias or group, flipping them on and off or changing their colours without ever opening the phone app.

## What it does  
- Let you name your lights (aliases) and command them by friendly names.  
- Turn groups of lights on/off, change colors, adjust brightness from the terminal.  
- Scriptable: you can hook it into your automation workflows, startup scripts, or just call it from your Linux box.  
- Built around the Govee HTTP API — I learned how to handle authentication, rate-limits and device control via REST.

## What I learned  
This project was a great quick project for a CLI and to be able to press shortcuts on my PC to flick my lights on and off.
- I deepened my Python scripting skills and built CLI patterns.  
- Got more comfortable working with APIs
- Built for Linux and terminal usage.

## Next steps  
- Add support for more device types and bulk operations.  
- Create a system daemon/service to auto-schedule lighting profiles (e.g., ambient mode).  
- Expand alias/group configuration so users can share configurations easily.

[View on GitHub](https://github.com/SirNoods/govee-cli)  
