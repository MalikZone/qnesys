const jumbo = document.getElementById("tron");
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    jumbo.style.backgroundPositionY = offset * 0.7 + "px";
});
