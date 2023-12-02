/*----------------------Window-1 / profile--------------*/
/* profile title bar control logic*/
let showstate = true;
function hideShow()
{
    let pf = document.querySelector('.cprofile');
    if (showstate)
    {
        pf.style.display = "none";
        showstate = false;
    }
    else
    {
        pf.style.display = "block";
        showstate = true;
    }
}
/*Drag Feature*/
document.addEventListener('DOMContentLoaded', function() {
    
    var pff = document.querySelector('.cprofile');
    var offsetX, offsetY, isDragging = false;

    function handleMouseDown(e) {
      isDragging = true;

      offsetX = e.clientX - pff.getBoundingClientRect().left;
      offsetY = e.clientY - pff.getBoundingClientRect().top;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove(e) {
      if (isDragging) {
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;

        pff.style.left = x + 'px';
        pff.style.top = y + 'px';
      }
    }

    function handleMouseUp() {
      isDragging = false;

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    pff.querySelector('.title-bar').addEventListener('mousedown', handleMouseDown);
  });
/*----------------Window-2 / spotify ----------------*/
/* music title bar control logic*/
let showstate2= true;
function hideShow2()
{
    let sp = document.getElementById('jukebox');
    if (showstate2)
    {
        sp.style.display = "none";
        showstate2 = false;
    }
    else
    {
        sp.style.display = "block";
        showstate2 = true;
    }
}
/*Drag Feature*/
document.addEventListener('DOMContentLoaded', function() {
    
    var jukeboxx = document.querySelector('.jukeboxx');
    var offsetX, offsetY, isDragging = false;

    function handleMouseDown(e) {
      isDragging = true;

      offsetX = e.clientX - jukeboxx.getBoundingClientRect().left;
      offsetY = e.clientY - jukeboxx.getBoundingClientRect().top;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove(e) {
      if (isDragging) {
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;

        jukeboxx.style.left = x + 'px';
        jukeboxx.style.top = y + 'px';
      }
    }

    function handleMouseUp() {
      isDragging = false;

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    jukeboxx.querySelector('.title-bar').addEventListener('mousedown', handleMouseDown);
  });