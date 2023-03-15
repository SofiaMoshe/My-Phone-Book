<!-- /**
* Template Name: Homepage
*/ -->

<?php
  get_header();
?>
<div class="container">

  <h1>My Phone Book</h1>
  <div class="search-bar">
  <input type="text" id="search-input" placeholder="Find a contact...">
    <button onclick="search()">Search</button>
</div>
    
    <input type="text" id="name-input" placeholder="Enter Contact Name">
    <input type="text" id="number-input" placeholder="Enter Phone Number">
    <button onclick="addContact()">Add Contact</button>
    <br><br>
    <ul id="contact-list"></ul>
</div>

    <?php

  get_footer();
?>

