
@extends('admin.layouts.master')

@section('content')
<div class="content">
    <div class="container-fluid">
        <div class="clearfix">
            <a href="{{ route('admin.categories.create') }}" class="btn btn-primary btn-wd pull-right mb-3">Add</a>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card data-tables">
                    <div class="card-body table-striped table-no-bordered table-hover dataTable dtr-inline table-full-width">
                        <div class="toolbar">
                            <!--        Here you can write extra buttons/actions for the toolbar              -->
                        </div>
                        <div class="fresh-datatables">
                            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>@lang('category.id')</th>
                                        <th>@lang('category.name')</th>
                                        <th>@lang('category.parent')</th>
                                        <th>@lang('category.created_at')</th>
                                        <th>@lang('category.updated_at')</th>
                                        <th></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')
    <script type="text/javascript" src="{{ asset('js/admin/category.js') }}">
    </script>
    <script type="text/javascript">
        Category.handleList.init()
    </script>
@endsection
