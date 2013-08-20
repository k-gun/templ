var templ = {
    replace: function(t, d) {
        var o, k;
        for (k in d) {
            o = (o || t)
                .replace(new RegExp("(<%\\s*"+ k +"\\s*%>)", "g"), d[k]);
        }
        return o;
    },
    compile: function(tpl, data) {
        if (!data.length) {
            return "";
        }
        var output = "", d;
        while (d = data.shift()) {
            output += this.replace(tpl, d);
        }
        return output;
    }
};
