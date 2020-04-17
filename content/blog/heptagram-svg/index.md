---
title: How to make a Heptagram with SVG ?
date: '2019-10-02T08:16:19.462Z'
description: Cool SVG heptagram based on Tool's new album Fear Inoculum
---

I'm a huge fan of the band Tool and with their latest album they used a lot of 7s in the music and in the artwork. 

The artwork contained a bunch of Heptagrams which is a seven sided polygon but internally connected.

Here's what it looks like

![](https://i.redd.it/j89n39zl8gy21.jpg)

I wanted to see if I could draw the [heptagram](https://en.wikipedia.org/wiki/Heptagram) using svg and javascript.

## Initial approach

I thought at first I can just try to draw one edge at a time. Keeping the internal angle of 77.143deg between them. This turned out very tricky as \<Line/> and \<Path/> didn't work based on angles or radians. So I looked at how to draw it on paper.

## So how do you draw one on paper?

- Get the seven vertices of a regular heptagon
- Join alternate vertices
- And that's it you have a 7/2 heptagram

## Let's do it with SVG now, using the same approach

### Finding the 7 vertices

- First draw a \<Circle />
- Divide the circle into 7 pieces ( 360 deg divided by 7 = 51.4deg)
- Take the sine and cosine of incrementing angles(0, 51.4deg, 51.4deg * 2, 51.4deg * 3...)  to find the x,y co-ordinates on the circle
- That's it, getting these vertices solves most of our problems

### Joining alternate vertices

- Now that we have the vertices (x,y co-ordinates), we've to join them
- All we do now is take alternate vertices and draw a \<Line /> between them

### Then add some animation jazz and you have a cool heptagram in SVG

TLDR; Here's the codepen link
https://codepen.io/mbmanohars/pen/vYBoxVY