<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jempico/femhack_backend_challenge">
    <img src="src/images/logonodejs.png" alt="Logo" height="80">
  </a>

  <h3 align="center">Computerwoman Challenge</h3>

  <p align="center">
    A CLI app built with NodeJS for the International Fem Hack 2022
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#stack-used">Stack used</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

As part of the [International Fem Hack](https://nuwe.io/challenge/computerwoman) Back End Challenge, I've built a CLI app to send the information about ballistic trajectories and compute them as fast as possible:

Compute the maximum height of the projectile:
h_max = ( v0 * v0 ) / ( 2 * g ) 

Compute the maximum traveled distance
x_max = 2 * v0 * sin(alpha) / g


<!-- STACK -->
## Stack Used

✔️  NodeJS <br />
✔️  Inquirer package<br />


<!-- USER STORIES -->
## User Stories

✅ Task 1 → Introduce the data using the command line

✅ Task 2 → Select the way to introduce the data (JSON or Manual)

✅ Task 3 → Compute the maximum height of the projectile

✅ Task 4 → Compute the maximum traveled distance

✅ Task 5 → Save the computed data (Inputs + Results) into a file


<!-- GETTING STARTED -->
## Installation

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/jempico/femhack_backend_challenge.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run
     ```sh
   npm start
   ```
 

<!-- REQUIREMENTS -->
## Requeriments

An input.json file is already included in the root directory, to simulate how the app works with JSON files. In case you want to add your own one, make sure to meet the following requirements:

   ```sh
   {"input": [
        {"alpha": 10, "v0": 20},
        {"alpha": 3, "v0": 6},
        {"alpha": 4, "v0": 9},
        {"alpha": 15, "v0": 15}
]}
 
   ```

<!-- RESULTS -->
## Results

Here are some screenshots of the results obtained:
<img width="830" alt="Screenshot 2022-01-28 at 10 10 47" src="https://user-images.githubusercontent.com/25463174/151519082-e9dfa399-db3e-458d-a470-5f8e91d7c1fc.png">
<br />
<img width="841" alt="Screenshot 2022-01-28 at 10 08 19" src="https://user-images.githubusercontent.com/25463174/151519143-13063f9b-3d09-4a65-a8c4-0e7513aa97b2.png">
<br />
<img width="840" alt="Screenshot 2022-01-28 at 10 08 40" src="https://user-images.githubusercontent.com/25463174/151519240-f7c66257-91c2-4519-921a-b38a9c3c958e.png">
<br />




<!-- CONTACT -->
## Contact

Jemimah Pico - [Portfolio](https://jempico.com) - [Linkedin](http://linkedin.com/in/jempico) - jpfilarca@gmail.com 

Project Link: [https://github.com/jempico/femhack_backend_challenge](https://github.com/jempico/femhack_backend_challenge)

