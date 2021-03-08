# Travel Now Project Website

#START OF DEVELOPER'S DIARY#

## 4/12/2020 C1

### Search Section 
#### Description 
-Search section has been updated. Used inner div and display flex to center the content in the middle
of the transparent div.
#### Known Issues
-Margin of inner text div is not completely centered because of the text element.
-Image resize for responsive -> we want it to be same height and not resizable 100% and cropped.


## 5/12/2020 C1

### Search Section 
#### Description
-Button Go has been updated in Assets/buttons/Components top of css.
-Minor ajdustment to input size.
#### Known Issues

### Top Destinations 
#### Description
Placed TOP DESTINATIONS text. Added the background div and created the destination cards.
#### Known Issues
-Destination name and paragraph not vertically aligned.
-An issue with flex / margin top/bottom from the grey background.

## 6/12/2020 C1

### Top Destinations 
#### Description
-Fixed margin issue and created view more button.

## 6.12.20 C2

### As captured on Instagram
#### Description
-Grid has been created and images have been inserted. Images must be adjusted to retain the aspect ratio.

## 6.12.20 C3

### Our Partners
#### Description
-Partners section has been created.

## 7.12.20 C1

### Customer Reviews
#### Description
-What our customers say section has been created with ul and using flex.

## 10.12.20 C1

### Footer
#### Description
-Footer has been developed.

## 14.12.20 C1 

### Page Headings
#### Description
-Development of page gradient header images.

## 16.12.20 C1

### Header
-Updated logo with new custom svg logo created in illustrator.
### Top Destinations
-Responsive Fixed

## 17.12.20 C1

### NavBar 
-Made nav with logo grid instead of flex, so i center the nav menu in the center of the page while having the logo on the left side. Works well until 768px tablet breakpoint (needs burger menu after that)
### Search
-Fixed background image to be responsive and resizable.

## 18.12.20 C1

### General
-Organized CSS (Media Queries bottom, img css moved to their respective css sections)
### Search
-Optimized responsiveness  (tablet/mobile)

## 19.12.20 C1

### Partners
-Fixed responsiveness 
### What our customers say
-Fixed responsiveness

## 19.12.20 C2

### General 
-Updated/organized images catalogs
-Update favicon in all pages

## 20.12.20 C1
-Breakpoint survey txt has been added

## 20.12.20 C2 

### Events 
-Events page developed
-Breakpoints updated drom 768px to 800px for tablet

## 22.12.20 C1

### Events
-Fixed css overwrite of the header photo with the rest subpages(added id)

### Contact Us
-Developed Contact Form and Flex position.

## 24.12.20 C1

### Contact Us
-Developed Locations and responsive.

## 10.01.21 C1 

### About
-Developed About page. Cards developed based on events cards (might need to group these two). Team quotes been developed (can do the second one with margin right to have the inside effect). Awards and certifications developed.

## 11.01.21 C1

### Destinations

-Developed Destinations page. Responsive checked for desktop and ipad/tablets. Does NOT work for mobiles yet.

## 19.01.21 C1

### General
-Fixed many responsive elements like headings, increased font size, and general neatness of the website.

### Footer
-Fixed mobile responsiveness and added social icons and other icons.

### Header/Nav
-Added to all pages

## 20.01.21 C1

###  General
-Added footer to all pages.

### Insta Grid
-Developed grid for the instagram from the start in a seperate file and implemented it here in this project (with auto-fill minmax)

## 21.01.21

-Stop naming commits by the date.

### Header/Nav/Search
=> Commit: Sticky-Navbar/Search-Background updated
-Major changes in search/header section. Removed overlay and moved to the left.
-Nav has been redifined and used flex space between with max-width.
-Navbar on tablets and mobiles is sticky fixed at the top from destinations to footer.

### Git Folder/Nav
=> Commit: Organize-Git-Folder/Burger-Menu
-Organize the git directory project plan and 1st assignment zip moved to submissions folder.
-Added burger menu to index.
(other pages still need to implement the changes in nav)

## 23.01.21

### About
=> Commit: About-Responsiveness
-About cards responsiveness has been fixed as well as the awards and certifications responsiveness.

### NavBar / BurgerMenu
=> Commit: AllPages-NavBar/Burgermenu
-The burger menu has been customized to have the exact oposite colors from the homepage and is functional for all pages. (need to find a way for the fixed stick navbar to work for all the pages and not by getting the top-dest offsetY from the homepage).

## 24.01.21

### Newsletter
=> Commit: Newsletter-Added
-Newsletter element has been added (inside the footer).
=> Commit: Gulp-Imagemin
=> Commit: Newsletter-Shadow/Logo
-Newsletter shadow added and white dot removed from logo.

## 26.01.21

### NavBar
=> Commit: fixed-navbar-for-all-sub-pages
-Fixed for subpages and working properly for all pages.

## 27.01.21
-Made the navbar smaller in height and adjusted the js accordingly for the smaller icons in navbar. (mobile-tablet).
-Fixed about cards responsiveness for tablet and mobile.
-Contact agency locations added icons and embed map from Google Maps.
-Contact form button bigger and textarea modifications.

## 28.01.21
-Added different images for each card in about page.
-Fixed margins in quote section.

## 31.01.21
-Minor change in location map and location card layout.
-Add backdrop filter in navbar.
-Formatted code of navbar.js.
-Found a closing bracket that has been missing without effect.
-Added a clouds on insta section in the background.

## 01.02.21
-Added box shadow in navbar to have a "distance" on top effect from the page.
-Added mint gradient in the background of team quotes. 
-Navbar hover border top removed.

## 02.02.21
-Add svg in the background top team members quotes.

## 04.02.21
-Destinations page ideas. (stash)
-Fixed issue in navbar where there was a jump when sticky nav was added to the top of screen.

## 06.02.21-08.02.21
-Minor changes in spacing (footer,top-destinations)

## 09.02.21
-Redesigning destinations once again with in page menu reusing the js code from another of my project (with some modifications).
Deadline for Destinations page completion 12.02.21.

## 10.02.21
-Destinations page has been developed and layout has been finally decided.

## 11.02.21
-Testing AOS animation library [https://github.com/michalsnik/aos]
-Cropping images with photoshop and optimizing in webp format. (all pages)
-Add AOS animation in about page.

## 12.02.21
-Added animation in svg file. This svg file has been create in illustrator from scratch therefore the paths are really complex. For this purpose an online tool has been used to animate the logo (on load) [https://www.svgator.com/]

## 13.02.21
-Coming back to destinations page the layout has been minor redesigned.

## 14.02.21
-Created a dropdown search results list that takes an input and checks in the JSON file if there is a destination and shows some details about that destination. If a li is clicked you will be redirected in the appropriate section in destinations.html.
-Added skyline svg in footer by combining other svgs together in 1 in illustrator.
-Fixed duplicate results in dropdown search.
-Fixed bug where clicking a result of a list would then disappear.
-AOS optimize.

## 15.02.21
-Create JSON file for dropdown search with destinations data.
-Fix fetch issue not returning results.

## 16.02.21
-Search dropdown layout modifications.
-Data of all destinations in JSON added.
-Fixed bug to show max 3 results in search.
-FAQ section added in contact us.
-Newsletter form style modifications.
-More animations added with AOS.
-More destinations button position fixed for mobile.
-General button fixes.
-Add photo of the day text on header in homepage.

## 17.02.21
-Removed some divs in html files that did not have no point of being there.
-Form in contact now has an id to not affect other forms in other pages.
-Fixed the width of the search dropdown to be the same as the search bar.

## 18.02.21
-Starting to replace lorem text with actual text.
-Removed some horizontal lines as well as made the navbar smaller on mobile view.
-Fixed padding in newsletter form.

## 19.02.21
-Layout changes in customer reviews.
-Tripadvisor logo svg added.

## 20.02.21
-Replacing header photos with new ones and change of the opacity of the header gradient.

## 21.02.21
-Minor change in the dropdown js file to improve performance.
-Insta pictures now on hover have a blur effect.
-Contact page layout moficications.

## 22.02.21
-Added form validation from previous project in contact us form.
-Customer reviews responsive fix.
-All locations added in contact us agency locations.
-More lorem ipsum replacements.

## 24.02.21
-Start building a new js file that returns quotes data for each destination.

## 26.02.21
-Image Gallery from other project added.
-One way price -> return price

## 27.02.21
-Optimize and crop the rest of the images/assets.
-AOS animation on all pages added.
-Comments in skyscanner api quotes js added.
-Resize image gallery icons.

## 02.03.21
-Reduce header gradient opacity from 0.9 to 0.5
-js files have been renamed to follow camelCase.

## 07.03.21
-Image gallery layout modifications.
-Validation form: Telepohone field has been removed. More proper email check with regex.
-Button hover animation on all buttons added.
-Fixed bug where navbar wouldnt work on destinations page.
-Change burger menu animation position from top to right.
-Fixed bug where header in index when the input was active was getting too narrow.
-Update some alt tags.
-JSON file has been moved from main folder to assets.
-Beggining to construct the info in destinations from the JSON file.
(info and schedule for now)

## 08.03.21

-Finishing constructing data from the json file (dates,price)
-Fix bug where the last day in schedule wouldn't show up.
-Create convertDate and calculateDate functions to have quote queries on specific dates from the json file.
-Comments added in api js file.
-Background color change of the header customer review.
-All alt tags updated.
-Responsive fixes for footer and customer reviews to take the whole screen on ipad and mobile.
-Search dropdown images have been updated by local ones.

#END OF DEVELOPER'S DIARY#
