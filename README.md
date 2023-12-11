# WDIO - FOCUS

This Javascript-based project aims to test the following portals:
- https://www.google.com/
- https://www.focusservices.com/



## Table of contents

-   Performance Requirements
-   Execution Steps
-   Test Script

## Performance Requirements

Next you will need to meet the following requirements to run the test suite:

| App    | version     | Comment                                                                                           |
|-----------|------------|------------------------------------------------------------------------------------------------------| 
| Google Chrome | v119.0.6045.200      | Please install google chrome v119 or latest                                            |
| NodeJs     | v20.10.0      | Please install node.js v20 or latest |
| Visual Studio Code     | v1.85.0      | Please install Visual Studio Code v1.85 or latest |
| Google Chrome | Settings     | Set your browser language to English  |
| Windows 10 | Settings     | Set your computer language to English  |

## Execution Steps

You will then need to follow the steps below to run the test suite:
-   Download the wdio-focus project from the github repository (https://github.com/th33ngi/wdio-focus)
-   Open the wdio-focus project in Visual Studio Code.
-   Open the README.md file and follow the instructions.
-   In Visual Studio Code in the main menu at the top find the "Terminal" option and open a "New Terminal".
-   In the terminal type: ``` npm install ```
-   Then type: ``` npx wdio run wdio.conf.js --suite focusServices ```

The test script will run, once it finishes you will have in the terminal a test result where you can validate each test case based on the test script. All test cases must be Passed.

## Test Script

-   Open Chrome Browser.
-   Go to www.google.com
-   Type in Google’s search “Focus Services”
-   Click on “Search button”
-   Verify the https://www.focusservices.com URL exists in the search.
-   Click on that page.
-   Scroll down to the bottom of the page.
-   Verify the “Now Hiring” button exists into this page.
-   Click on “Locations” Tab
-   Locate North America Link. Do an assert on this link.
-   Click on Central America location.
-   Validate “El Salvador & Nicaragua” title is displayed on the page.
-   Click on Asia Location. Verify if exist the “Bacolod City, Philippines” text block.
-   Click on the “Careers” Tab.
-   Go to keywords filter and search “Generalist”.
-   Go to Facebook or Twitter button and click on it.
-   Display the page.