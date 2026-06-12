# Valmartin Healthcare Website

Official website for **Valmartin Healthcare Association**, a registered community-based clinic in Saker, Limbe, Cameroon.

**Live site:** https://valmartinhealthcare.org

## Tech stack

- **Static HTML/CSS/JS** (no build step required)
- **Netlify** for hosting and deployment
- **GitHub** for source control
- **Decap CMS** for content editing (no code needed once set up)
- **Netlify Forms** for contact and appointment submissions

## Site structure

```
valmartin-site/
├── index.html          # Homepage
├── about.html          # About / story / mission
├── services.html       # Detailed service descriptions
├── team.html           # Executive committee and staff
├── programmes.html     # Mama and Baby Day, outreaches
├── contact.html        # Contact info and form
├── book.html           # Appointment booking form
├── admin/              # Decap CMS content editor
│   ├── index.html
│   └── config.yml
├── assets/
│   ├── css/style.css   # Shared stylesheet
│   ├── js/main.js      # Shared JavaScript
│   └── images/         # Photos and logo
├── netlify.toml        # Netlify configuration
├── robots.txt
└── sitemap.xml
```

## Deployment guide (one-time setup)

### Step 1. Create the GitHub repository

1. Go to https://github.com/new
2. Repository name: `valmartin-healthcare-site`
3. Set to **Private** (or Public if you prefer)
4. Click **Create repository**

### Step 2. Push the site to GitHub

From your computer, in this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valmartin-healthcare-site.git
git push -u origin main
```

### Step 3. Connect Netlify

1. Go to https://app.netlify.com
2. Click **Add new site**, then **Import an existing project**
3. Choose **GitHub** and authorise Netlify
4. Pick `valmartin-healthcare-site`
5. Build settings: leave the build command empty, publish directory `.`
6. Click **Deploy site**

After about a minute, your site will be live at a `*.netlify.app` URL.

### Step 4. Connect your custom domain

1. In Netlify, go to **Site settings**, then **Domain management**
2. Click **Add custom domain**, enter `valmartinhealthcare.org`
3. Netlify will guide you to update DNS at your domain registrar
4. Once DNS propagates, Netlify will issue a free HTTPS certificate

### Step 5. Enable Decap CMS (Identity and Git Gateway)

This lets you edit the site through `/admin` without touching code.

1. In Netlify, go to **Site settings**, then **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, choose **Invite only**
4. Under **External providers**, enable **Google** if you want to log in with Google
5. Scroll down to **Services**, then **Git Gateway** and click **Enable Git Gateway**
6. Back in **Identity**, click **Invite users** and invite your own email
7. Check your email and accept the invite (set a password)
8. Visit https://valmartinhealthcare.org/admin and log in

You can now edit content through the CMS interface.

### Step 6. Set up form notifications

1. In Netlify, go to **Forms**
2. You will see two forms: `contact` and `appointment`
3. Click **Settings and usage**
4. Under **Form notifications**, add an email notification to your address

Now every time someone submits a contact or appointment form, you get an email.

## Editing content (no code required)

Once Decap CMS is set up:

1. Go to https://valmartinhealthcare.org/admin
2. Log in with your invited account
3. You can edit:
   - **Site Settings:** phone numbers, email, address, etc.
   - **Homepage:** hero text, story section, stats
   - **Services:** add, edit, or remove services
   - **Team Members:** add new staff with photos and bios
   - **Programmes:** add new programmes or edit existing ones
   - **News and Updates:** publish news posts and event announcements

Save your changes, and the site will rebuild automatically within about a minute.

## Local development

To preview the site locally, just open `index.html` in your browser. No server needed.

For Decap CMS local preview:

```bash
npx decap-server
# In config.yml, uncomment "local_backend: true"
# Then open http://localhost:8080/admin
```

## File naming convention for uploads

Following the iCloud convention used across Dr. Wilfred's projects:

`YYYYMMDD_ShortDescription_Version.ext`

Example: `20260428_TeamPhoto_v1.jpg`

## Image optimisation

Before uploading photos, compress them at https://tinypng.com or https://squoosh.app to keep the site fast. Aim for under 500 KB per photo.

## Contact

For technical questions about this site, contact the developer via the Anthropic Claude session that built it. For questions about Valmartin Healthcare, see the [Contact page](https://valmartinhealthcare.org/contact.html).

---

Caring for the community since 2021.
