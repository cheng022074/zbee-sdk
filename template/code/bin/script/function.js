<%- apply('code.bin' , {
    defaultFolder:data.defaultFolder
}) %>
<%- data.imports %>

<%
    if(data.scoped){
%>
<%- data.body %>
module.exports = <%if(data.async){%>async <%}%>function(<%- data.params %>){

    return <%if(data.async){%>await <%}%>main.call((() =>() =>{

        return this === global ? main : this ;

    }).call(this),<%- data.paramNames %>) ;
}
<%
    }else{

    let {
        paramNames
    } = data ;
%>
<%if(data.async){%>async <%}%>function main(<%- paramNames.join(',') %>){

    <%- data.body %>
}
module.exports = <%if(data.async){%>async <%}%>function(<%- data.params %>){

    return <%if(data.async){%>await <%}%>main.call((function(){

        return this === global ? main : this ;

    }).call(this) <%if(paramNames.length){%>, <%- paramNames %><%}else{%><%- paramNames %><%}%>) ;
}
<%
    }
%>