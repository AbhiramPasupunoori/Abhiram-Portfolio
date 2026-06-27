# Abhiram Portfolio

A personal portfolio website for Abhiram Pasupunoori. It showcases the home
profile section, education, about, experience, projects, skills, and contact
pages.

This project is built with plain HTML, CSS, and JavaScript. It does not need a
frontend framework, package installation, backend server, database, or migration
step.

## Project Structure


Abhiram-Portfolio/
├── README.md
└── Portfolio/
    ├── index.html
    ├── about.html
    ├── experience.html
    ├── projects.html
    ├── skills.html
    ├── contact.html
    ├── style.css
    ├── script.js
    └── images/
        └── abhi.jpg


## Requirements

- A web browser such as Chrome, Edge, Firefox, or Safari
- Optional: Python 3, only if you want to run a local development server

## Start The Project

Open a terminal and go to the project folder:


cd /Users/abhiram/Documents/GitHub/Abhiram-Portfolio/Portfolio


Start a local server:


python3 -m http.server 5501


Open the site in your browser:


open http://localhost:5501


If you are using Windows, use this command instead:


start http://localhost:5501


## Open Without A Server

You can also open the home page directly:


cd /Users/abhiram/Documents/GitHub/Abhiram-Portfolio/Portfolio
open index.html


On Windows:


start index.html


## Migration

No migration is required for this project.

This is a static website, so there is no database and no migration command to
run. After cloning or downloading the project, you can open `index.html`
directly or start the local server shown above.

## Edit The Website

- Update page content in the `.html` files inside `Portfolio/`.
- Update design, layout, colors, and responsiveness in `Portfolio/style.css`.
- Add JavaScript behavior in `Portfolio/script.js`.
- Replace or add images inside `Portfolio/images/`.

## Main Pages

- Home: `Portfolio/index.html`
- About: `Portfolio/about.html`
- Experience: `Portfolio/experience.html`
- Projects: `Portfolio/projects.html`
- Skills: `Portfolio/skills.html`
- Contact: `Portfolio/contact.html`

## Notes

- Font Awesome icons are loaded from a CDN in the HTML files, so icons need an
  internet connection to display correctly.
- If you change files while the local server is running, refresh the browser to
  see the updates.
