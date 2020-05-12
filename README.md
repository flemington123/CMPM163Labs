# CMPM163Labs
# Lab2

Part1 short video: https://drive.google.com/file/d/1ovDRIraY6janxNIbhTh6pnXfc3croQoM/view?usp=sharing

Part2 screen shoot: <img src ="Screenshoot/Xuqi Lab2.png">

# Lab3

Short Video: https://drive.google.com/file/d/1wH6FDm3047eWeRMtoD2EOPIwo8zAxcaG/view?usp=sharing

BottomLeft: This is one is followed the tutorial. Basic material and color with Three.js.

BottomRight: My own Three.js one. I try to look some special material on the example site.

TopLeft: Also the tutorial one with renderer. Basic material and color.

TopRight: My own renderer cube. In the fragment shader, I changed the color from two to three. By modifying the code, I made them work.

# Lab4
Questions:
1. x = 8u while u = x/8.
2. y = 8 - 8v.
3. As I conut by previous two formula, (0.375, 0.25) is white.

Short Video: https://drive.google.com/file/d/1Nus-hktz3rR6SRBfmyHUBFBHDrf3xNhZ/view?usp=sharing

From left to the right:

Cube 1: Created by following the tutorial. Two texture (151.jpg and 155_norm.jpg) mix together and create this detail cube.

Cube 2: Also created by tutorail. Using the one of the same texture (151.jpg) with the cube 1, but it lacks another texture.

Cube 3: My own mix cube which created by three.js. The two texture are 154.jpg and 156_norm.jpg.

Cube 4: Created by tutorial and renderer. Using the normal renderer setting and 152.jpg as texture.

Cube 5: My own renderer 4x4 cube. Using only one texture 172.jpg and changing the fragmentShader setting to make the texture display mulptiple times by changing the vUv.

# Lab5

Part 1
Shortvideo: https://drive.google.com/file/d/1M31i1m3eKF0L_DUCtnWEZczvNdbPfMof/view?usp=sharing.

First, I made two particle shinning at the back of the car to pretend the fire of accelerator. Then made a new metal material for the track. Let it reflects the light from sun. Then did a little change to the check point and use new particle system to made a wall. Furthermore, I putted some crash objects on the ground for player to get crash with it.

# Lab6

Part 1

Point light: The green one is point light which light the objects around it in a limit range. The change of position and range will influce the light in scene while the angle will not.

Spotlight: The spot light is the yellow one. As its name said, it act similar with the real spot light. The change of angle, position, range will influence the light area. 

Directional light: The direction light in my scene is red. The direction light is like sunlight in real world. It always works everywhere. The only thing could change it is changing the intensity and angle.

Area light: This one only work on baked. The blue light is my area light in scene. It lights the one side of itself.

Material: The real object is tissue box with tissue. To made it, I tried to create the material ball first. Then I changed the shader type from standard to standard with specualr. Because I wanted to simulate the reflection light by using specular. Furthermore, I adjusted the smoothness to make the reflection similar with the real one, and made it looks like a shinny paper plastic. Also, I changed the Albedo color to the right one. In the end, I added an Albedo texture to make some decoration. 

Texture: I downloaded the textrue pictures from the google drive with their related normal map. The first one is rock texture, and the another one is brick texture.

Skybox: I found this skybox from the Unity Store, and I thought this one is coool then I just downloaded it.

