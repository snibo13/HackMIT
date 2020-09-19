let statuses = {"Name":"Studying chem"};

$(function() {
  var socket = io();
  $("#status-form").submit( (e) => {
    e.preventDefault(); //No page reload
    socket.emit("status", $("#name").val(), $("#status").val);
  });
  socket.on('status', (nm, sts) => {
    statuses[name] = sts;
    updateStatuses();
  });
  updateStatuses();
});

function updateStatuses() {
  statuses.forEach((sts) => {
    let n = $("<span></span>").addClass("name");
    n.text(sts[0]);
    let s = $("<span></span>").addClass("activity");
    s.text(sts[1]);

    #("#statuses").append(
      $("<li></li>").add(
        n + "is" + s
      );
    )
  })
}
