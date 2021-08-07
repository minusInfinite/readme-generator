/*
"Apache License 2.0"
"BSD 3-Clause "New" or "Revised" license"
"BSD 2-Clause "Simplified" or "FreeBSD" license"
"GNU General Public License (GPL)"
"GNU Library or "Lesser" General Public License (LGPL)"
"MIT license"
"Mozilla Public License 2.0"
"Common Development and Distribution License"
"Eclipse Public License version 2.0"
*/

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`
}

export default generateMarkdown
