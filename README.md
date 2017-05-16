angular-assignments
===
A collection of SPA assignments for the FastTrack'D class.

assignment listing
---

### 1 - basic css and html
An introductory assignment exercising basic css and html skills.

#### Summary
Students are given a basic html skeleton and an empty css file and are tasked with creating a proportionate, responsive layout in the style of the "Holy Grail" web app layout. This layout must scale smoothly as the browser viewport scales, and students are tasked with additional styling requirements to emphasize the smoothness of scaling visually.

#### Skills
_CSS3, HTML5, flexbox, basic responsive design_

#### Duration
**1-3 hours**

### 2 - basic browser javascript
A basic web app assignment meant to be a JavaScript refresher and introduction to the fundamentals of browser development.

#### Summary
Students are tasked with creating a simple "incremental" game, which involves an accumulating score and several buttons representing actions the user can take to improve the score's rate of accumulation. Additionally, students are tasked with storing the user's progress in the browser's local (or cookie) storage.

#### Skills
_jQuery, local browser storage, basic JavaScript DOM, event-driven development_

#### Duration
**2-4 hours**

### 3 - controllers and components
A basic AngularJS assignment that emphasizes state management and component-oriented design.

#### Summary
Students are tasked with implementing an improved version of the "incremental" game they built in assignment 2 using AngularJS in lieu of basic browser JavaScript. They are to implement the app from scratch (but with reference code) in a component-oriented way, taking advantage of AngularJS's design principles to maintain a clean and elegant code base. They are expected to explore their own design decisions using bootstrap and LESS, and they will expand the game's functionality with basic multi-user support and a more complicated state progression.

#### Skills
_AngularJS, bootstrap, webpack, LESS, component-oriented design_

#### Duration
**4-8 hours**

### 4 - routes and services
A moderately complex AngularJS assignment that introduces routing for single page applications and services as a means to share state and behavior.

#### Summary
Students are tasked with extending the previous assignment's app with routing and state management that allows for multi-user login and login-based access restriction, save state management, and game configuration management.

#### Skills
_UI-router, service-oriented state management, SPA routing_

#### Duration
**4-8 hours**

### 5 - build and integration
A complex AngularJS assignment meant to emphasize large-scale app design, reusable component libraries, backend integration, and build tooling.

#### Summary
Students are tasked with extending the previous assignment's app with a Spring backend, in order to store game configuration and state for many users across many browsers. The app itself must be extended and adapted to take advantage of the backend using the `$http` service. Students are additionally tasked with implementing leaderboards and profiles for players as well as role-restricted configuration of the game rules. Students are additionally encouraged to replace browser-default visual components with ones from a component library.

#### Skills
_AngularJS backend integration, promises, ng-annotate, template caching, build pipelines and optimization, reusable component libraries_

#### Duration
**8-16 hours**
