
var Stacked = Stacked || {};
(function (Stacked) {
    var Processor = (function () {
        function Processor() { }
        Processor.prototype.run = function () {
            var customHeaders = [];
            var headerSeeds = [{ "field": "name", "index": "5", "title": "Name" }, { "field": "gender", "index": "6", "title": "Gender" }];

            for (var c = 0; c < headerSeeds.length; c++) {

                var seed = headerSeeds[c];

                customHeaders.push({
                    "field": seed.field,
                    "index": c.index,
                    "title": seed.title,
                    "tpl": kendo.format("<a class=\"k-header-column-menu k-header-column-{0}\" href=\"#\" tabindex=\"-1\"></a><a class=\"k-link\" href=\"#\">{1}</a>", seed.field, seed.title)
                });
            }

            var userInfo = [{ "_id": 1, "index": 323, "name": "User1", "email": "user1@yahoo.com", "age": 0, "gender": "female", "guid": "5fcdc58a-2daf-43bb-af72-42278f93b387", "eyeColor": "blue", "company": "APPLIDEC", "isActive": false, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 2, "index": 264, "name": "User2", "email": "user2@hotmail.com", "age": 94, "gender": "male", "guid": "24971d87-4e8e-42bd-9ff5-afa334a8fe2b", "eyeColor": "brown", "company": "JIMBIES", "isActive": true, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 3, "index": 321, "name": "User3", "email": "user3@gmail.com", "age": 76, "gender": "female", "guid": "b9dd6cf1-738e-445d-84cd-6db7e10d32cd", "eyeColor": "green", "company": "KIOSK", "isActive": false, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 4, "index": 132, "name": "User4", "email": "user4@yahoo.com", "age": 83, "gender": "male", "guid": "9a4fe5b4-f8e6-4019-a826-56d569dddac3", "eyeColor": "blue", "company": "NETUR", "isActive": true, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 5, "index": 873, "name": "User5", "email": "user5@hotmail.com", "age": 44, "gender": "female", "guid": "fa2cc933-17db-44d5-93db-108f1660d4b8", "eyeColor": "brown", "company": "AUTOMON", "isActive": false, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 6, "index": 225, "name": "User6", "email": "user6@gmail.com", "age": 3, "gender": "male", "guid": "06b5d49b-ea66-4f57-8b12-ac301dd305d9", "eyeColor": "green", "company": "MEMORA", "isActive": true, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 7, "index": 699, "name": "User7", "email": "user7@yahoo.com", "age": 59, "gender": "female", "guid": "97524ee6-f4c1-43ec-9698-9da6484b7aa8", "eyeColor": "blue", "company": "ZOID", "isActive": false, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 8, "index": 904, "name": "User8", "email": "user8@hotmail.com", "age": 74, "gender": "male", "guid": "e9cdc8c6-36bb-4605-8b1d-2fb66e4ced1e", "eyeColor": "brown", "company": "ZAGGLES", "isActive": true, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 9, "index": 241, "name": "User9", "email": "user9@gmail.com", "age": 52, "gender": "female", "guid": "264c71db-8adc-4ed0-b400-165462a734fd", "eyeColor": "green", "company": "KINDALOO", "isActive": false, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }, { "_id": 10, "index": 245, "name": "User10", "email": "user10@yahoo.com", "age": 84, "gender": "male", "guid": "b2e2f76d-ddf0-4af5-b90c-0e3997a9dcf7", "eyeColor": "blue", "company": "SUSTENZA", "isActive": true, "picture": "http://placehold.it/32x32", "balance": "$1234.56" }];

            $("#grid").kendoGrid({
                dataBound: dataBindingComplete,
                dataSource: {
                    data: userInfo,
                    pageSize: 5,
                    schema: {
                        model: {
                            id: "_id",
                            fields: {
                                _id: { type: "number" },
                                name: { type: "string" },
                                email: { type: "string" },
                                age: { type: "number" },
                                gender: { type: "string" },
                                eyeColor: { type: "string" },
                                company: { type: "string" }
                            }
                        },
                        total: function (result) {
                            return result.length || 0;
                        }
                    }
                },
                height: 550,
                filterable: true,
                groupable: true,
                resizable: true,
                reorderable: true,
                scrollable: true,
                sortable: {
                    mode: "single",
                    allowUnsort: false
                },
                pageable: {
                    numeric: true
                },
                columns: [
                    {
                        field: "_id",
                        title: "ID"
                    }, {
                        title: "Name",
                        headerAttributes: {
                            "class": "k-grid-column-top-name"
                        },
                        columns: [
                            {
                                field: "email",
                                template: '<div>#: name#</div><div class="secondary-emphasis">#: email#</div>',
                                title: "Email"
                            }
                        ]
                    }, {
                        field: "age",
                        title: "Age"
                    }, {
                        title: "Gender",
                        headerAttributes: {
                            "class": "k-grid-column-top-gender"
                        },
                        columns: [
                            {
                                field: "eyeColor",
                                template: '<div>#: gender#</div><div class="secondary-emphasis" style="color: #:eyeColor#">#: eyeColor#</div>',
                                title: "Eye Color"
                            }
                        ]
                    }, {
                        field: "company",
                        title: "Company"
                    }, {
                        field: "name",
                        title: "Name",
                        headerAttributes: {
                            "class": "k-grid-column-hide-name"
                        }
                    }, {
                        field: "gender",
                        title: "Gender",
                        headerAttributes: {
                            "class": "k-grid-column-hide-gender"
                        }
                    }
                ],
            });

            function dataBindingComplete(e) {

                var contactGrid = $('#grid').data('kendoGrid');
                var gridOptions = contactGrid.getOptions();
                var $allColumns = $('th[role="columnheader"]');

                $allColumns.off("click", clearSort);
                $allColumns.on("click", clearSort);

                $(customHeaders).each(function () {

                    var h = this;
                    var $customHeader = $('th.k-grid-column-top-' + h.field).not('th[data-role="columnsorter"]');

                    $customHeader.unbind();
                    $customHeader.addClass('k-with-icon')
                        .addClass('k-filterable')
                        .html(h.tpl)
                        .attr({
                            "data-field": h.field,
                            "data-index": h.index,
                            "data-role": "columnsorter",
                            "data-is-custom-sort": "true"
                        })
                        .click(sortMe);

                    if (gridOptions.filterable) {

                        var headerSel = 'a.k-header-column-' + h.field;
                        var columnHideSel = '.k-grid-column-hide-' + h.field;

                        if ($(headerSel).length > 0) {
                            $(headerSel).replaceWith($(columnHideSel).find('a.k-grid-filter').detach());

                        }
                    }

                    contactGrid.hideColumn(h.field);
                });
            }

            function sortMe(e) {

                e.preventDefault();

                var sortDirIconTemplate = '{0}<span class="k-icon {1}"></span>';
                var fieldName = $(this).data('field');
                var contactGrid = $('#grid').data('kendoGrid');
                var currentDirection = $(this).data('dir');
                var title = $(this).data("title");

                if (currentDirection) {
                    currentDirection = currentDirection == "asc" ? "desc" : "asc";
                } else {
                    currentDirection = "asc";
                }

                var arrow = currentDirection == "asc" ? "k-i-arrow-n" : "k-i-arrow-s";

                contactGrid.dataSource.sort({
                    field: fieldName,
                    dir: currentDirection
                });

                $(this).data('is-sorting', 'true');
                $(this).data('dir', currentDirection);
                $(this).find('a.k-link').html(sortDirIconTemplate
                    .replace("{0}", title)
                    .replace("{1}", arrow));
            }

            function clearSort() {

                $('th[data-role="columnsorter"]').each(function () {

                    if ($(this).attr('data-is-custom-sort')) {

                        if ($(this).data('is-sorting')) {
                            $(this).removeData('is-sorting');
                        } else {
                            $(this).find('a.k-link > span.k-icon').remove();
                        }
                    }

                });
            }
        };
        return Processor;
    }());
    Stacked.Processor = Processor;
})(Stacked);

$(function () {

    var gridOps = new Stacked.Processor();
    gridOps.run();

});