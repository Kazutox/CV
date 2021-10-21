<template>
  <!-- This data doesnt change often, use the better flexibility of a vue component to render the first part -->
  <div style="padding: 30px;" class="container">
    <img alt="Photo of Jc Cloete" class="image" src="/resources/jcloete.jpg" />
    <div class="header">
      <h1>Jc Cloete - CV</h1>
      <h5>Updated 19 October 2021</h5>
      <hr />
    </div>
    <div class="intro">
      <span>Location:</span>
      <span>Pretoria, Gauteng, South Africa</span>
      <span>Email Address:</span>
      <a href="mailto:jcccloete97@gmail.com">jcccloete97@gmail.com</a>
      <span>Phone Number:</span>
      <a href="tel:+27834564309" target="_blank">(+27) 083 456 4309</a>
      <span>Linkedin:</span>
      <a href="https://www.linkedin.com/in/jc-cloete-263527128/" target="_blank">in/jc-cloete</a>
    </div>
    <!-- Place markdown content here -->
    <Content class="content" />
  </div>
</template>

<style>
@media only screen and (max-width: 1200px) {
  .container {
    grid-template:
      "header image" 100px
      "intro image" 103px
      "content content" 1fr
      / calc(70vw - 265px) 205px !important;
  }
}

@media only screen and (max-width: 870px) {
  .container {
    grid-template:
      "header image" 100px
      "intro image" 103px
      "content content" 1fr
      / 1fr 205px !important;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    grid-template:
      "header" 100px
      "image" min-content
      "intro" 100px
      "content" 1fr
      / 1fr !important;
  }
  .image {
    justify-self: start !important;
    width: 100% !important;
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 350px) {
  .container {
    grid-template:
      "header" 100px
      "image" min-content
      "intro" 100px
      "content" 1fr
      / 1fr !important;
  }
  .intro {
    grid-template-columns: max-content 1fr !important;
    white-space: normal !important;
  }
  .image {
    justify-self: start !important;
    width: 100% !important;
    margin-bottom: 10px;
  }
}

.container {
  background-color: rgb(218, 217, 206);
  display: grid;
  grid-template:
    "header image" 100px
    "intro image" 103px
    "content content" 1fr
    / calc(50vw - 265px) 205px;

  justify-content: center;
}

.content {
  grid-area: content;
}
.image {
  grid-area: image;
  height: auto;
  width: 205px;
  justify-self: end;
}
.intro {
  grid-area: intro;
  display: grid;
  grid-template-columns: min-content min-content;
  white-space: nowrap;
  column-gap: 10px;
  row-gap: 5px;
}
.header {
  grid-area: header;
}
</style>