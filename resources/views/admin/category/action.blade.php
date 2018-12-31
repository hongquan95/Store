<a href="{{ route('admin.categories.show', $id) }}" class="btn btn-link btn-info info"><i class="fa fa-arrow-circle-right"></i>
<a href="{{ route('admin.categories.edit', $id) }}" class="btn btn-link btn-warning edit"><i class="fa fa-edit"></i></a>
<form action="{{ route('admin.categories.destroy', $id) }}" style="display: inline" method="POST">
    @csrf
    @method('DELETE')
    <a class="btn btn-link btn-danger remove remove_category" href="top">
        <i class="fa fa-times"></i>
    </a>
</form>
