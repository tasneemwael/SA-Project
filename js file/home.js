document.querySelector('.read-more').addEventListener('click', function() {
    document.querySelector('#choose-destination').scrollIntoView({ behavior: 'smooth' });
});

function showForm(role) {
    document.getElementById("form-modal").style.display = "flex";
    document.getElementById("form-title").innerText =
      role === "viewer" ? "Join as a Viewer" : "Join as a Racer";
    document.getElementById("user-form").dataset.role = role;
  }
  
  function closeForm() {
    document.getElementById("form-modal").style.display = "none";
  }
  
  function redirectToPage(event) {
    event.preventDefault();
    const role = document.getElementById("user-form").dataset.role;
    if (role === "viewer") {
      window.location.href = "..//display-viewer/display-viewer.html";
    } else if (role === "racer") {
      window.location.href = "..//display-Racer/Display-Racer.html";
    }
  }
