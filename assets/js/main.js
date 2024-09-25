$(function() {
    console.log('jquery ok');

    // Define the media query
    const mediaQuery = window.matchMedia("(max-width: 75rem)");

    // Function to toggle menus based on the screen size
    function handleMenuChange(e) {
        // debugger
        if (e.matches) {
            // If the screen is 75rem or less, hide desktop menu, show mobile menu
            $("#main-navbar").hide();
            $("#mobile-navbar").show();
        } else {
            // If the screen is greater than 75rem, show desktop menu, hide mobile menu
            $("#main-navbar").show();
            $("#mobile-navbar").hide();
        }
        // console.log('mediaQuery', mediaQuery);
    }

    // Initial check
    handleMenuChange(mediaQuery);

    // Add a listener for when the media query status changes
    mediaQuery.addListener(handleMenuChange);
})