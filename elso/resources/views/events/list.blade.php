<form action="/api/events/{{$events->event_id}}" method="post">

    {{csrf_field()}}

    {{method_field('GET')}}

    <div class="form-group">

        <input type="submit" value="{{$events->event_id}}">

    </div>

</form>