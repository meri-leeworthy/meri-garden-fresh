---
title: Customising a Cargo Portfolio Site
isPublished: true
image: archie2.png
alt: A screenshot of Archie's website
tags:
  - freelance
  - recent
---

Performance and video artist Archie Barry asked me to help them customise their
artist portfolio site. They had had the opportunity to have subsidised access to
[Cargo](https://cargo.site/), so we agreed this would be the best platform for
them to showcase their work. I was asked to make customisations to an existing
theme. Here is a screenshot of the Lecomte theme I was asked to customise:

![A screenshot of the default Lecomte theme](/images/lecomte.png)

And here is a screenshot of the customised theme:

![A screenshot of the customised theme](/images/archie2.png)

One interesting point in the process has been learning about using SVG Color
Matrix filters. I was asked to show the images for each art project in
monochromatic blue. On hover, the blue filter should be removed to show the
image in colour. Rather than simply replacing the image (which I thought could
create a delay in the second image rendering), I decided to try using CSS
filters to achieve the effect.

At first I tried converting the image to Sepia then shifting the hue, but the
way it shifted the colours didn't line up with the sample I was given. Instead I
tried using an SVG Color Matrix, and this has been more precise and effective.
Here is an article about the feature on
[CSS Tricks](https://css-tricks.com/color-filters-can-turn-your-gray-skies-blue/).

The completed site can be viewed at [archiebarry.com](https://archiebarry.com)
