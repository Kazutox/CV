# CV Project
### Live link: [cv.jcloete.dev](https://cv.jcloete.dev/)

## About
This simple project aims to allow for a live CV to be hosted on my personal site, changing the content shouldn't involve worrying about layouts or styling etc.

As such this small application is using Vitepress to statically generate the site from a single vue component acting as the layout wrapper, and a simple .md (markdown) file for the actual content.

## Why Vitepress
A CV is a document that does not change that often, but is always a pain to share around - using vitepress allows me to focus on the end-goal while enjoying lightning fast load times and ulta-small file sizes!

## Why a web-based CV
There is usually some requirement for multiple versions of your CV for multiple purposes, commonly a PDF, TXT and Doc file is required - having the page on the web like this removes that need entirely as this page itself is text, and can be "printed" to any document format using ctrl+p