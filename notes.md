My personal notes for the direction of the site:

### jan 1, 2026

I have a few ideas for domain names but I think I can wait until I have finished the site
Most portfolio websites have these base pages: Home, About, Projects. An optional page is Experiences, but that is sometimes put under About or Projects
These sites also have a resume pdf download button somewhere. Will need a new resume tailored to engineering-related things.

Background theme idea: 
    background a big invisible grid, blocks jump from one to the next in finite lines and different colours. If a block hits a grid square of a different colour (most will be blank), then it too changes colours. This could be implemented programmatically. Not sure about performance impacts but it would be really cool. Kind of like watching a factorio factory (but much less complex) or that one block factory game.
     - Can also have option for light and dark mode, just with different colour schemes

Foreground:
    Just a simple information panel. Takes up a block in the middle of the page so the background can still be seen. Floating windows can popup for other infos


Mobile:
   Tablets:
      Keep same animations, buttons, and colour schemes, but just formatted properly for the screen size
   Phones:
    Can just be a simple portfolio site with the same colour scheme as the rest. No need to too many complex animations


Update after adding center box:
On mobile, I can just make it so that the center box fills up entire screen once we get small enough. Will determine that point after adding content though.

#### IMPORTANT
I have a new idea on what to do with the center box once I'm done:
Make it kind of like a text file / code editor with line counts and stuff, in a theme similar-ish to tokyonight for dark mode, and i'll figure out something for light mode. Do some text highlighting as well. Have the space in the background able to be used for popup windows for projects and stuff.



Not as important down here
After having tested the site with the dark theme I think I'll stick fully to that. The snakes now will just be lines snaking their way through using pathfinding
Or something. That animation will be very difficult but I think I can do it

Still good to use the tokyonight theme is for this https://github.com/folke/tokyonight.nvim/blob/main/lua/tokyonight/colors/moon.lua


### jan 3, 2026

I have the snake and background animation finished, now I want to make a page-transition animation. I will make a temporary navbar, then on page transition have a ripple effect where the similar blocks to the backround will fade in wait and fade out in a wave pattern (or multiple different ones that trigger randomly).
I think that my previous asthetic for the centre box is good, just without the terminal parts. A nice thing with the files at the top to click to switch to works.


### jan 4 2026

Good idea for how to implement the page transitions:
Create some predetermined filled screens of blocks (could be 1 general one or 4 with custom color palettes based on the links).
Then i can pretermine some svg paths that will quickly fill the entire screen in like a wave form or something
mask the filled screen of blocks onto the svg path.

Just for testing I will start just by making a monocolor svg path to get the base logic done




### jan 7 2026

I'm starting to think that unfortunately this site may not be the best design. I guess I should try to think of a new asthetic. Shame that i put so much work it but i can always archive it
