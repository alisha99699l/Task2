let p= fetch("https://jsonplaceholder.typicode.com/todos")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value2)=>{
    console.log(value2[0].title);
    let tableData="";
    value2.map((values)=>{
        tableData+=` <tr>
            
        <td>${values.Completed}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.userid}
        </td>

      </tr>` ;

    });
    document.getElementById("table_body").innerHTML=tableData;

}).catch((err)=>{
    console.log(err);
})