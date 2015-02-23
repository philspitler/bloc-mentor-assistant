# Bloc Mentor Assistant

#### VERY EARLY PROTOTYPE

## Chrome Extension to assist Bloc Mentors in general administrative tasks

### Requirements

- Node.js
- Bower (installed globally) [will be changing this soon to an npm "postinstall"]

###Installation

```bash
$ git clone https://github.com/philspitler/bloc-mentor-assistant.git
$ npm install
$ bower install
```

### Test Chrome Extension

To test, go to: chrome://extensions, enable Developer mode and load app as an unpacked extension.

### Grunt tasks

#### Debug

Debug task helps reduce your effors during development extensions. If the task detects your changes of source files, Livereload([chromereload.js](https://github.com/yeoman/generator-chrome-extension/blob/master/app/templates/scripts/chromereload.js)) reloads your extension. If you would like to know more about Livereload and preview of Yeoman? Please see [Getting started with Yeoman and generator-webapp](http://youtu.be/zBt2g9ekiug?t=3m51s) for your understanding.

```bash
grunt debug
```

#### Build

By default, generators compress the file that was created by building a js/css/html/resource file. You can distribute the compressed file using the Chrome Developer Dashboard to publish to the Chrome Web Store.

Run this command to build your Chrome Extension project.

```bash
grunt build
```
### Features

### Review Buttons on Notifications in Dashboard

#### Click on a Reivew Button
![BMA1](http://ec2-52-0-200-188.compute-1.amazonaws.com/images/bma1.png)

#### View in modal
![BMA2](http://ec2-52-0-200-188.compute-1.amazonaws.com/images/bma2.png)

#### When Click Completed, the modal clears and dissapears
![BMA3](http://ec2-52-0-200-188.compute-1.amazonaws.com/images/bma3.png)

### Known issues

- the text of the submission doesn't show up currently, only the git diff

- the row of the notification for the checkpoint that was marked complete, doesn't hide immediately, have to refresh
