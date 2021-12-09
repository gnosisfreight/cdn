var add_eta_history = function(view) {
  $(document).on(‘knack-view-render.‘+view, function (event, view) {
    var view_no = view.key;
    if ($(‘#’+view_no+' > section > div > div > div > div > div > div.kn-detail-body > span > span’).length>0){
      var s_list = $(‘#’+view_no+' > section > div > div > div > div > div > div.kn-detail-body > span > span’);
      console.log(s_list)
      for (var i = 0; i < s_list.length; i++) {
        var s_number = s_list[i];
        var json_test = s_number.innerText;
        var payload = JSON.parse(json_test);
        console.log(payload);
        s_list.html(‘’);
        var headers = [‘ETA’,‘Adjusted On’]
        var col = [];
        for (var i = 0; i < payload.length; i++) {
          for (var key in payload[i]) {
            if (col.indexOf(key) === -1) {
              col.push(key);
            }
          }
        }
        var table = document.createElement(“table”);
        var tr = table.insertRow(-1);
        for (var i = 0; i<headers.length; i++) {
          var th = document.createElement(“th”);
          th.innerHTML = headers[i];
          tr.appendChild(th);
        }
        for (var i = 0; i < payload.length; i++) {
          console.log(payload[i]);
          tr = table.insertRow(1);
          for (var j = 0; j < col.length; j++){
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = payload[i][col[j]];
          }
        }
        console.log(‘Table’,table);
        s_list.innerHTML = “”;
        s_list.append(table);
      }//end for
    }//end if
  });
}
