<!DOCTYPE html>
<html>
    <head>
        <title>To Do List</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" >
    </head>
    <body>
        <div class="content">
            <h1 class="heading--1 margin--medium">To Do List</h1>
            <div class="todolist">
             <div class="todolist__form">
                 <div class="row">
                    <div class="col-sm-6">
                     <input type="text" name="todo" id="input-todo" class="todolist__form--input form-control" placeholder="To Do">
                    </div>
                    <div class="col-sm-4">
                    <input type="submit" id="submit-todo" class="todolist__form--button btn btn-primary" value="Add To Do">
                    </div>
                </div>
             </div>
             <div class="todolist__item">
                <table class="table" id="todolist">
                    <thead>
                        <th><input type="checkbox" class="hide" id="check-all-todo"></th>
                        <th>Name</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
             </div>
             <div class="todolist__delete-selected">
                <input type="submit" id="delete-selected-todo" class="btn btn-danger hide" value="Delete selected">
            </div>
            </div>
        </div>
        <script type="text/javascript" src="{{URL::asset('js/all.js')}}"></script>
    </body>
</html>
