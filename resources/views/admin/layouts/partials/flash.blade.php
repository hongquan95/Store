@if (Session::has('success'))
    <div class="alert alert-success col-md-6 ml-3">
            <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                <i class="nc-icon nc-simple-remove"></i>
            </button>
            <span>{!! Session::get('success') !!}</span>
    </div>
@endif
