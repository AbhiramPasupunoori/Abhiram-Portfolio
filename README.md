# Abhiram Portfolio

A responsive personal portfolio website for Abhiram Pasupunoori. It includes
Home, About, Experience, Projects, Skills, and Contact pages.

## Technology Used

- HTML5
- CSS3
- Vanilla JavaScript
- [Font Awesome 6.5.2](https://cdnjs.com/libraries/font-awesome) (CDN)
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins) (CDN)

This is a static website. It has no frontend framework, backend, API, database,
Python dependency, or build step.

## Project Structure

```text
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
```

## Prerequisites

### Required software

- [Git](https://git-scm.com/downloads)
- A modern browser such as Chrome, Edge, Firefox, or Safari

### Choose one local server

Only one of these is needed:

- Python 3 (recommended because no package installation is required)
- Visual Studio Code with the Live Server extension
- Node.js with `npx` (optional alternative)

Confirm that Git and your chosen server are available:

```bash
git --version
python3 --version
```

On Windows, Python may use the `py` command:

```powershell
git --version
py --version
```

## Complete Setup

### 1. Clone the repository

```bash
git clone https://github.com/AbhiramPasupunoori/Abhiram-Portfolio.git
cd Abhiram-Portfolio
```

### 2. Install dependencies

There are no project dependencies to install. In particular:

- There is no `requirements.txt`, so do **not** run `pip install`.
- There is no `package.json`, so do **not** run `npm install`.
- There are no environment variables or `.env` files to configure.

Font Awesome and Google Fonts are loaded automatically from their CDNs when the
browser has internet access.

### 3. Set up the database and run migrations

No database setup or migration is required. The site does not read or write
database data, and there are no migration files or migration commands.

### 4. Start the website

#### Option A: Python (recommended)

macOS or Linux:

```bash
cd Portfolio
python3 -m http.server 5501
```

Windows PowerShell or Command Prompt:

```powershell
cd Portfolio
py -m http.server 5501
```

Open <http://localhost:5501> in a browser. Stop the server with `Ctrl+C`.

If port `5501` is already in use, choose another port:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

#### Option B: Visual Studio Code Live Server

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension by Ritwick Dey (`ritwickdey.LiveServer`).
3. Open the cloned `Abhiram-Portfolio` folder in VS Code.
4. Open `Portfolio/index.html`.
5. Select **Go Live** in the status bar, or right-click the file and select
   **Open with Live Server**.

#### Option C: Node.js

This option downloads the `serve` utility through npm:

```bash
cd Portfolio
npx serve .
```

Open the local URL printed in the terminal. No global npm installation is
required.

### 5. Open without a server (quick preview only)

You can double-click `Portfolio/index.html`, but a local server is recommended
because it behaves more like a deployed website.

From a terminal:

```bash
# macOS
open Portfolio/index.html

# Linux
xdg-open Portfolio/index.html
```

Windows PowerShell:

```powershell
start Portfolio/index.html
```

## Recommended VS Code Extensions

These extensions are optional:

- **Live Server** (`ritwickdey.LiveServer`) for a development server and reloads
- **Prettier** (`esbenp.prettier-vscode`) for consistent formatting
- **HTML CSS Support** (`ecmel.vscode-html-css`) for CSS class suggestions

Install them from VS Code's Extensions view, or with the command line:

```bash
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension ecmel.vscode-html-css
```

## Editing the Portfolio

- Update page content in `Portfolio/*.html`.
- Update colors, layout, animation, and responsive styles in
  `Portfolio/style.css`.
- Add JavaScript behavior in `Portfolio/script.js`.
- Add or replace images in `Portfolio/images/` and update the matching HTML
  path.

Refresh the browser after a change. Live Server can refresh it automatically.

## Verification Checklist

After starting the server:

1. Open <http://localhost:5501>.
2. Visit Home, About, Experience, Projects, Skills, and Contact.
3. Confirm that `images/abhi.jpg` appears.
4. Confirm that the navigation and external project/social links work.
5. Check desktop and mobile widths using the browser's developer tools.

You can also confirm that the home page is being served:

```bash
curl -I http://localhost:5501
```

An `HTTP/1.0 200 OK` or `HTTP/1.1 200 OK` response means the server is working.

## Troubleshooting

### `python3` is not recognized

Install Python 3, try `python` on macOS/Linux, or use `py` on Windows. You can
also use the Live Server option.

### Address or port already in use

Stop the other process or start the server on another port, such as `8000`.

### Icons or fonts do not appear

Check the internet connection and ensure your network is not blocking
`cdnjs.cloudflare.com` or `fonts.googleapis.com`. The rest of the website still
works without these CDN resources.

### A page returns `404 Not Found`

Run the server from the `Portfolio` directory, not from a different folder:

```bash
cd Abhiram-Portfolio/Portfolio
python3 -m http.server 5501
```

## Deployment

Because the project is fully static, the contents of `Portfolio/` can be hosted
on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any standard web server.
No server-side runtime or hosted database is needed.
