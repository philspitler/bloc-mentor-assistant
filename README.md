# Bloc Mentor Assistant

#### VERY EARLY PROTOTYPE

## Chrome Extension to assist Bloc Mentors in general administrative tasks

### Requirements

- Node.js

###Installation

```bash
$ git clone https://github.com/philspitler/bloc-mentor-assistant.git
$ npm install
```

### Developing the Chrome Extension

To work on the extension, go to: chrome://extensions, enable Developer mode and load the app folder as an unpacked extension.

### Grunt tasks

#### Debug

Debug task helps reduce your effors during development extensions. If the task detects your changes of source files, Livereload([chromereload.js](https://github.com/yeoman/generator-chrome-extension/blob/master/app/templates/scripts/chromereload.js)) reloads your extension.

```bash
grunt debug
```

#### Build

By default, generators compress the file that was created by building a js/css/html/resource file. You can distribute the compressed file using the Chrome Developer Dashboard to publish to the Chrome Web Store.

Run this command to build your Chrome Extension project to the "dist" directory.

```bash
grunt build
```

To use, go to: chrome://extensions, enable Developer mode and load the dist folder as an unpacked extension.

### Features

### Review Buttons on Notifications in Dashboard

#### Click on a Reivew Button
![BMA1](http://ec2-52-0-200-188.compute-1.amazonaws.com/images/bma1.png)

#### View in modal
![BMA2](http://ec2-52-0-200-188.compute-1.amazonaws.com/images/bma2.png)

#### When Click Completed, the modal clears and dissapears
![BMA3](http://ec2-52-0-200-188.compute-1.amazonaws.com/images/bma3.png)

### Issues

Please see https://github.com/philspitler/bloc-mentor-assistant/issues
