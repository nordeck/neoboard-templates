---
layout: post
type: advent-calendar-door
title: "Door 4: Partially convert a NeoBoard to SVG"
date: 2024-12-04 00:00:00 +0200
lastmod: 2024-12-04 01:00:00 +0200
lang: en
categories: tech
tags: [NeoBoard Advent Calendar]
---

Using the Zod parser from [yesterday's door]({{% ref "/posts/2024-12-03-neoboard/" %}}), we can more easily generate a SVG file of our NeoBoard. 

The linked code can convert rectangles, circles and ellipses. A NeoBoard whiteboard can also contain text, lines, triangles and other elements which don't get displayed with this code.

https://github.com/jaller94/neoboard-to-svg
