<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function index()
    {
        $events = response()->json(Events::all());
        return $events;
    }

    public function show($id)
    {
        $events = response()->json(Events::find($id));
        return $events;
    }

    public function store(Request $request)

    {

        $events = new Events();

        $events->date = $request->date;

        $events->location = $request->location;

        $events->fee = $request->fee;

        $events->save();

        return redirect('/event/list');
    }

    public function update(Request $request, $id)
    {

        $events = Events::find($id);

        $events->event_id = $request->event_id;

        $events->date = $request->date;

        $events->fee = $request->fee;

        $events->save();

        return redirect('/event/list');
    }

    public function destroy($id)

    {

        Events::find($id)->delete();

        return redirect('/event/list');
    }

    

    public function listView()
    {
        $events = Events::all();
        return view('event.list', ['events' => $events]);
    }

    public function editView($id)
    {
        $events = Events::find($id);
        return view('copy.edit', ['event' => $events]);
    }

    public function newView()
    {
        $events = Events::all();
        return view('event.new', ['event' => $events]);
    }
}
