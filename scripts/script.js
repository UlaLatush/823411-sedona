function openForm() {
  var x = document.forms[0];

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function validateForm() {
    var searchForm = document.forms[0];
    var dateArrive = searchForm.elements["date-arrive"].value;
    console.log("dateArrive = " + dateArrive);
    var dateDeparture = searchForm.elements["date-departure"].value;
    console.log("dateDeparture = " + dateDeparture);
    var adults = searchForm.elements["adults"].value;
    console.log("adults = " + adults);
    var children = searchForm.elements["children"].value;
    console.log("children = " + children);

    if (dateArrive == "" || dateDeparture == "" || adults == "" || children == "") {
      console.log("Search form should be filled out!");
      alert("Search form should be filled out!");
    } else {
      searchForm.submit();
    }
}
