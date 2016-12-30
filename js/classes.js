var template = '{{#classes}}<h2>{{term}}</h2><table class=center><tr><th>Number</th><th>Name</th><th>Tags</th>{{#classList}}<tr><td>{{number}}</td><td>{{name}}</td><td><span class="tag tag-pill {{tagClass}}">{{tags}}</span></td></tr>{{/classList}}</table>{{/classes}}';
var result = Mustache.render(template, courses);
$("#courseList").html(result);
