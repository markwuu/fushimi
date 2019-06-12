This is a simple layout app to test whether or not color schemes go well together. It also includes a logo uploader for pictures. Submitting the form is not required as changes are seen immediately on the front-end. Enter any valid hex code and/or .JPG/.PNG/etc to see changes. To change the initial color scheme of the app, go into App.js and change the background1 and background2 variables to a valid hexcode. Changes will be seen on the front-end after saving.

To start this project, you can run:

### `npm install`

then,

### `npm start`

This runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This app is interesting to me because of the simplicity. As I was building the form to submit new hex codes, I realized it would be a better user experience to not have to submit anything. The changes are immediately seen after entering a valid hexcode, so the user could flip through different hex codes quickly and easily.

Some technical challenges would be to alert the user to an invalid hexcode or an invalid logo. For example, many people may not know what a valid hexcode is. A better user experience could be to alert the user of what valid hex values are.

Other technical challenges are this app was not built to scale. I built it as a monolithic app to reach MVP quickly. If this app were to scale, then I would be more strict with the S.O.L.I.D. principles and separate the app out into smaller components. I would still keep the functions in App.js, but pass them down as props to the necessary components.

Thanks for taking the time to review my app!
