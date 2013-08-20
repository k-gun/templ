* Simple usage:

```html
<b>Links</b>
<ul id="links">
</ul>

<script>
var links = [
    {href: "http://www.google.com/", text: "Google"},
    {href: "http://www.twitter.com/", text: "Twitter"},
    {href: "http://www.facebook.com/", text: "Facebook"}
];
window.onload = function() {
    var tpl = document.getElementById("tpl").innerHTML;
    var html = templ.compile(tpl, links);
    document.getElementById("links").innerHTML = html;
};
</script>

<script type="text/html" id="tpl">
    <li>
        <a href="<% href %>"><% text %></a>
    </li>
</script>
```