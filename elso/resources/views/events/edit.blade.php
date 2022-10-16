<form action="/api/events/{{$events->event_id}}" method="post">

    {{csrf_field()}}

    {{method_field('PUT')}}

    <select name="event_id" placehorlder="event_id">

        @foreach ($users as $user)

        <option value="{{$events->id}}" {{$events->event_id == $events->event_id ? 'selected' : ''}}>{{$events->event_id}}</option>

        @endforeach

    </select>

</form>