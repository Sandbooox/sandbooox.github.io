// HTML content to be loaded
const htmlContent = `
<div id="page">
    <h1>Sandbox</h1>
    <div id="info">
        <p>Welcome to the page! 🎉</p>
        <hr>
        <a href="https://clustrmaps.com/site/1bztp" title="Visit tracker">
            <img src="https://www.clustrmaps.com/map_v2.png?d=Pz3fNb4ZrJszMt5Y1k9POeW_G7mRjpPYnN_4aMSCc88&amp;cl=ffffff">
        </a>
        <hr>
        <h1>Follow us!</h1>
        <div id="links">
            <a href="links/github" title="Follow me!">
                <img class="icons" src="assets/images/icons/github.png" alt="git">
            </a>
            <a href="links/youtube" title="Follow me!">
                <img class="icons" src="assets/images/icons/youtube.png" alt="yt">
            </a>
            <a href="links/x" title="Follow me!">
                <img class="icons" src="assets/images/icons/x.png" alt="x">
            </a>
            <a href="links/facebook" title="Follow me!">
                <img class="icons" src="assets/images/icons/facebook.png" alt="fb">
            </a>
        </div>
        <hr>
        <h1>Email</h1>
        <a href="mailto:sandboox235@gmail.com">Send Email to sandboox235@gmail.com</a>
        <hr>
    </div>
    <title>Sandbox</title>
    <a href="https://sandbooox.github.io/Privacy-Policy">Privacy Policy</a>
    <div id="credits">
        <p>Sandbooox.github.io Copyright © 2024 all rights reserved</p>
    </div>
</div>
`;

// Insert the HTML content into the div with id "content"
document.getElementById('load').innerHTML = htmlContent;
