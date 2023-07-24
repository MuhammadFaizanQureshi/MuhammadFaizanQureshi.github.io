# Assets
This repository contains website structure

## Folder Structure

 📂  **Assets**

  * 📂 font
  * 📂 img
  * 📂 node_modules
  * 📂 scss
      * 📂 abtract
          * 📁 _functions.scss
          * 📁 _mixins.scss
          * 📁 _variables.scss
      * 📂 base
          * 📁 _animation.scss
          * 📁 _base.scss
          * 📁 _font.scss
          * 📁 _typography.scss
          * 📁 _utilities.scss
      * 📂 components
          * 📁 _button.scss
          * 📁 _card.scss
          * 📁 _formatting.scss
      * 📂 layout
        * 📁 _footer.scss
        * 📁 _grid.scss
        * 📁 _header.scss
        * 📁 _section.scss
      * 📂 pages
        * 📁 _home.scss
  * 📂 svg
  * 📂 vendors
      * 📁 bootstrap.css
      * 📁 fontawesome.css
      * 📁 swiper.css
      * 📁 jquery.js
      * 📁 bootstrap.js
      * 📁 swiper.js

## Instructions

1. If the `font-family` that you are using is available in [google fonts](https://fonts.google.com/) then delete font folder from assets folder and font file from sass folder.
2. `cdnjs` files of jquery, bootstrap and swiper are added in html and their files are saved in vendors folder. If you dont need any of then just delete the files and remove the code linking to them
3. Any default sass file that you don't need, you can delete them
4. All the colors in the website will be written in variables file. Theme colors will be named as `$primary colors` and `$secondary colors`.
5. I have made the `@mixins`. Use the mixins where necessary.
6. If there is any `@keyframe` animation, that will go in animation file. Otherwise delete the file.
7. If the font is not available in google fonts and you are downloading it then i have made folder for the files of font and font file for the `@font-face` code. Put the font name on `font-family` of `@font-face` and put the same code in base file. Give the exact urls of the font files in `@font-face`.
8. All typography styles will go in typography file. The `line-height` of each text is the height of the text. Kindly note the `line-height` of the text
9. All the common parts will go in components.
10. All the styles done in a specific page will go in pages. 
11. All the sections that are common will go in sections file in layout
12. Class for the following are made
    *  `font-size`
    *  `font-weight`
    *  `text-transform` and `text-align`
    *  `margin and padding`
    *  `width`
    *  `flex-properties`
    *  `and display`
    *  `container` and grid system are made
