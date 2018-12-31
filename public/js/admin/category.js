var Category = {};

Category.handleList = function (){

    var initDataTable = function () {
        $(document).on('keypress', 'input[type=search]', function(e) {
            $(this).unbind();
        });
    }

    var dataTable = function () {
        $(document).ready(function() {
            var table = $('#datatables').DataTable({
                processing: true,
                serverSide: true,
                responsive: true,
                searchDelay: 0,
                "lengthMenu": [
                    [10, 25, 50, -1],
                    [10, 25, 50, "All"]
                ],
                language: {
                    searchPlaceholder: "Search records",
                },
                ajax: '/admin/categories/datatables',
                columns: [
                    { data: 'id', name: 'id' },
                    { data: 'name', name: 'name' },
                    { data: 'parent_id', name: 'parent_id' },
                    { data: 'created_at', name: 'created_at' },
                    { data: 'updated_at', name: 'updated_at' },
                    { data: 'action', "bSortable": false },
                ]
            });
            $(document).on('keypress', 'input[type=search]', function (e) {
                if (e.keyCode == 13) {
                    table.search(this.value).draw();
                }
            });
        });
    }
    var initRemoveCategory = function () {
        $(document).on( "click", '.remove_category', function(e) {
            e.preventDefault();
            if (window.confirm("Do you really want to remove")) {
                $(this).closest('form').submit()
            }
        });
    }

    return {
        init: function() {
            initDataTable();
            dataTable();
            initRemoveCategory();
        }
    }
}();

Category.handleCreate = function () {
    var select2 = function () {
        $("#select_parent").select2({
            width: "100%",
            maximumSelectionLength: 2,
        placeholder: "Which are two of most productive days of your week"
        })
    };

    var initWizzad = function () {
        demo.initLBDWizard();
    }
    return {
        init: function () {
            initWizzad();
            select2();
        }
    };
}();
