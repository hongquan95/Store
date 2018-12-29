@extends('admin.layouts.master')
@section('content')
<div class="content">
    <div class="container-fluid">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <form id="wizardForm" method="POST" action="{{ route('admin.categories.update', $category->id) }}">
                        @csrf
                        @method('PUT')
                        <div class="card card-wizard">
                            <div class="card-header ">
                                <h3 class="card-title text-center">Category edit</h3>
                                <p class="card-category text-center">Edit category with name and parent</p>
                            </div>
                            <div class="card-body ">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#tab1" data-toggle="tab" role="tab" aria-controls="tab1" aria-selected="true">@lang('category.create.info')</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#tab2" data-toggle="tab" role="tab" aria-controls="tab2" aria-selected="true">@lang('category.create.parent')</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#tab3" data-toggle="tab" role="tab" aria-controls="tab3" aria-selected="true">@lang('category.create.finish')</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                                        <p class="text-center">@lang('category.create.input')</p>
                                        <div class="row justify-content-center">
                                            <div class="col-md-10 ">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <star>*</star>
                                                        @lang('category.create.name')
                                                    </label>
                                                    <input class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" type="text" name="name" value="{{ $category->name }}"  required/>
                                                    @if ($errors->has('name'))
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $errors->first('name') }}</strong>
                                                    </span>
                                                    @endif
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab2" role="tabpanel">
                                        <h5 class="text-center">@lang('category.create.select_parent')</h5>
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <label class="control-label"><star>*</star>
                                                        @lang('category.create.parent')
                                                    </label>
                                                    <select id="select_parent" name="parent_id" class="form-control{{ $errors->has('parent_id') ? ' is-invalid' : '' }}">
                                                    @php
                                                        $traverse($nodes);
                                                    @endphp
                                                    </select>
                                                    @if ($errors->has('parent_id'))
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $errors->first('parent_id') }}</strong>
                                                    </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab3" role="tabpanel">
                                        <h2 class="text-center text-space">Finish
                                            <br>
                                            <small> Click on "
                                                <b>Finish</b>" to submit</small>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <button type="button" class="btn btn-default btn-wd btn-back pull-left">Back</button>
                                <button type="button" class="btn btn-info btn-wd btn-next pull-right">Next</button>
                                <button type="submit" class="btn btn-info btn-wd btn-finish pull-right">Finish</button>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('style')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
@show

@section('script')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script type="text/javascript" src="{{ asset('js/admin/category.js') }}">
    </script>
    <script type="text/javascript">
        Category.handleCreate.init()
    </script>
@endsection

