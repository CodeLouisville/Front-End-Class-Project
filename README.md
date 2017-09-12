# Front-End-Class-Project

Louie has the best pizza in town, but his small pizza shop is only known to some die-hard local fans. Louie wants to expand his business and attract new customers so that more people can enjoy his amazing pizza. Louie has contracted you to build a website for "Louie's Pizza" and he has provided you with a PDF with what he wants the final product to look like. You will build a site that matches Louie's design in phases, with the final product being a marketing site that will help Louie grow his business.

To view a mockup of what we are building please visit: https://xd.adobe.com/view/37712139-3ff5-4da0-950f-16954ee9df0d/


Part 1
=========

### Basic Site Structure and file management.

Organization is key to making your project easy for you to work on and others in the future.

**Note:** *Please create all files and folders with lowercase letters, numbers, dashes, and underscores.*


Let's start by creating a place on our systems for our projects to live.

  1. Create a `Projects` folder.
  2. Inside that folder create a `louies-class` folder.

Now create folders for our assets to reside in.

   1. Create a `css` folder.
   2. Create a `img` folder.
   3. Create a `js` folder.

Open the `louies-class` project folder in your editor.

  1. In the `css` folder create a file called `normalize.css` and paste the following code:

  ```
  /*! normalize.css v6.0.0 | MIT License | github.com/necolas/normalize.css */button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}
  ```

  2. Create another file called `style.css` in the css folder and paste in this code:

  ```
  @import url("normalize.css");

  /****** Base ******/

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
      margin: 0;
      padding: 0;
  }
  ```

  3. Go back to the root folder and create a new file called `app.js` - leave it blank for now.
  4. **[Download](https://www.dropbox.com/s/128poel61h1qt38/louies-images.zip?dl=0)** the `louies-images.zip` file and put(extract) all the images in the `img` folder.

  Now that our assets are in place. Now let's create our first page!

    1. Create an `index.html` file in the root (base) of the `louies-class` folder.
    2. Copy and paste the default HTMl structure following:

  ```
  <!doctype html>

  <html lang="en">

  <head>

      <meta charset="utf-8" />

      <title>Louie’s Pizza | World's Favorite Pizza!</title>

      <meta name="author" content="CodeLouisville">
      <meta name="description" content="CodeLouisville">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="apple-touch-icon" href="icon.png">

      <!-- Insert Vendor Style Sheets Here-->


      <!-- Insert Style Sheets Here-->


      <!-- Insert Google Fonts Here -->


  </head>

  <body class="home">

  <!-- Header -->



  <!-- /Header -->

  <!-- Welcome -->



  <!-- /Welcome -->

  <!-- About -->



  <!-- /About -->

  <!-- Join Now -->



  <!-- /Join Now -->

  <!-- Menu -->



  <!-- /Menu -->

  <!-- Contact -->


  <!-- /Contact -->

  <!-- /Map -->



  <!-- /Map -->

  <!-- Footer -->



  <!-- /Footer -->

  <!-- Insert JavaScript Here -->

  </body>
  </html>
  ```

### Discussion/Reinforcement Points

  1. Basics of file management
  2. Naming conventions
  3. Internet/webserver basics
  4. HTML structure (doctype, html, head, body, footer)
