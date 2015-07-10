[![Bower version](https://badge.fury.io/bo/angular-pure-datepicker.svg)](http://badge.fury.io/bo/angular-pure-datepicker)
[![npm version](https://badge.fury.io/js/angular-pure-datepicker.svg)](http://badge.fury.io/js/angular-pure-datepicker)
[![npm stable version](https://img.shields.io/npm/v/angular-pure-datepicker.svg?label=stable)](https://npmjs.org/package/angular-pure-datepicker) 
[![Dependency Status](https://david-dm.org/se-panfilov/angular-pure-datepicker.svg)](https://david-dm.org/se-panfilov/angular-pure-datepicker) 
[![devDependency Status](https://david-dm.org/se-panfilov/angular-pure-datepicker/dev-status.svg)](https://david-dm.org/se-panfilov/angular-pure-datepicker#info=devDependencies) 
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/se-panfilov/angular-pure-datepicker/blob/master/LICENSE)


angular-pure-datepicker
====================

**angular-pure-datepicker** - is kind of old-school date select, but with modern look and feel and abilities.

| [Demos and documentation] [1] | 

More info
--------

tldr;

Stability
--------

Not stable yet; Use it only in test or development cases.


Installation and usage
-------

 1. Download it
    `bower install ??? --save` (not ready yet)

    `npm install ??? --save` (not ready yet)

    (look for other package managers)

    or download from git: [releases][2]
 2. Add to `index.html`
 
    ```html
    <link href="bower_components/angular-pure-datepicker/dist/angular-pure-datepicker.css">
    <script src="bower_components/angular-pure-datepicker/dist/angular-pure-datepicker.min.js"></script>
     ```

 3. Add as angilarjs project's dependency:

    ```javascript
        angular.module('demo', [
            'angular-pd'
        ])
    ```

 4. Add a directive to html
    <pure-datepicker ng-model="model"></pure-datepicker>
    
Options
-------
 
 - `ng-model` - `Object`, can be `empty` or `null`, but `required`.
 
   The result of select would placed here. Also if ng-model is object with `datetime` field 
   (should contain number), it's will e applyed as initial date value.
 
 - `apd-start` - `number`,  `optional`.
    
    Datetime of a lower date limit (model's values lower then limit wouldn't be applied).
 
 - `apd-end` - `number`,  `optional`.
    
    Datetime of a upper date limit (model's values upper then limit wouldn't be applied).
    
 - `apd-day-id ` - `string`, `optional`.
   
   Setter of custom id for the days select element.
    
 - `apd-month-id ` - `string`, `optional`.
   
   Setter of custom id for the month select element.
    
 - `apd-year-id ` - `string`, `optional`.
   
   Setter of custom id for the years select element.
    
 - `apd-day-classes ` - `string`, `optional`.
   
   Setter of custom classes for the days select element.
    
 - `apd-month-classes ` - `string`, `optional`.
   
   Setter of custom classes for the month select element.
    
 - `apd-year-classes ` - `string`, `optional`.
   
   Setter of custom classes for the years select element.


Features
-------
 - No dependencies (except angular of course);
 - About 13kb minified;
 - Support start date and end date limitation;
 - No popups;
 - Easy to customize - you'll be able to provide any class or id for any element inside directive;
 - Localization (development in progress);

Compatibility with browsers
--------

 - Chrome;
 - Firefox (select arrows will be hidden);
 - ...

Localization
-------

There only localization what may be needed is for names of days of week.

(here should be instructions when it's done)

 
How to port to other framework?
--------

It's should be easy. Most of business logic placed in `./src/classes` dir, and `angular_directive.ts` only works with 
DOM. You may easily replace it with any other view implementation. 
 
Report issue
-------
[github.com/se-panfilov/angular-pure-datepicker/issues][3]
 

Contribution
--------

All contributions are welcome. Please add a [Pull-Request][5].
If you not sure about TypeScript, you ay wrote your PR in JS (it's will be easy to port after all).

You may found few hand-test cases in [dev-server][6] branch. It will be better if you test how it works on it.

 
How it works (for users)
--------

(how it resolve conflicts of limits and datetime, only datetime has mean, what data provided in model, etc...)
 
How it works (for developers)
---------
 
 (should write basics of apd)
 
 
License
--------

MIT: [go to text][4]


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/se-panfilov/angular-pure-datepicker/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[1]: https://se-panfilov.github.io/angular-pure-datepicker/
[2]: https://github.com/se-panfilov/angular-pure-datepicker/releases
[3]: https://github.com/se-panfilov/angular-pure-datepicker/issues
[4]: https://github.com/se-panfilov/angular-pure-datepicker/blob/master/LICENSE
[5]: https://github.com/se-panfilov/angular-pure-datepicker/pulls
[6]: https://github.com/se-panfilov/angular-pure-datepicker/tree/dev_server
