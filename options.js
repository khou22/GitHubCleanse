function save_options() {
  var allDomains = document.getElementById('allDomains').value;
  var enabled = document.getElementById('enabled').checked;
  chrome.storage.sync.set({
    allDomains: allDomains,
    enabled: enabled
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    console.log("Saved");
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    allDomains: false,
    enabled: true
  }, function(items) {
    document.getElementById('allDomains').value = items.allDomains;
    document.getElementById('enabled').checked = items.enabled;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
