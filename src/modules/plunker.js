angular.module('app.plunker', [])

    .constant('plunkerSettings', {
        APP_NAME: 'apd.demo',
        APP_VERSION: '',
        NG_VERSION: '',
        SCRIPTS: [],
        STYLES: []
    })

    .factory('plunkGenerator', function ($document, plunkerSettings) {

        return function (module, content) {


            var form = angular.element('<form style="display: none;" method="post" action="http://plnkr.co/edit/?p=preview" target="_blank"></form>');
            var addField = function (name, value) {
                var input = angular.element('<input type="hidden" name="' + name + '">');
                input.attr('value', value);
                form.append(input);
            };

            var indexContent = function (content) {
                return '<!doctype html>\n' +
                    '<html ng-app="' + plunkerSettings.APP_NAME + '">\n' +
                    '  <head>\n' +
                    '    <script src="//ajax.googleapis.com/ajax/libs/angularjs/' + plunkerSettings.NG_VERSION + '/angular.js"></script>\n' +
                    '    <script src="//se-panfilov.github.io/angular-pure-datepicker/angular-pure-datepicker.js' + plunkerSettings.APP_VERSION + '.js"></script>\n' +
                    '    <script src="example.js"></script>\n' +
                    '    <link href="//netdna.bootstrapcdn.com/bootstrap/' + bsVersion + '/css/bootstrap.min.css" rel="stylesheet">\n' +
                    '  </head>\n' +
                    '  <body>\n\n' +
                    content + '\n' +
                    '  </body>\n' +
                    '</html>\n';
            };

            var scriptContent = function (content) {
                return "angular.module('ui.bootstrap.demo', ['ui.bootstrap']);" + "\n" + content;
            };

            addField('description', 'http://angular-ui.github.io/bootstrap/');
            addField('files[index.html]', indexContent(content.markup, version));
            addField('files[example.js]', scriptContent(content.javascript));

            $document.find('body').append(form);
            form[0].submit();
            form.remove();
        };
    })

    .controller('PlunkerCtrl', function ($scope, plunkGenerator) {

        $scope.content = {};

        $scope.edit = function (bsVersion, version, module) {
            plunkGenerator(NG_VERSION, bsVersion, version, module, $scope.content);
        };
    })

    .directive('plunkerContent', function () {
        return {
            link: function (scope, element, attrs) {
                scope.content[attrs.plunkerContent] = element.text().trim();
            }
        }
    });