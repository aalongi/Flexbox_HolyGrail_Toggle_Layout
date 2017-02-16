( function( $ ) { 
    $('a.sidebar-left-toggle').click(function() {
    	// If not .sidebar hasClass .sidebar-left
    	// When the element that has the .sidebar does NOT have the .sidebar-left, 
    	//then target 
    	if (!$('.sidebar').hasClass('sidebar-left')) {
    		$('.sidebar').addClass('sidebar-left');
    	};
 
    });

    $('a.sidebar-right-toggle').click(function() {
    	// If not .sidebar hasClass .sidebar-left
    	// When the element that has the .sidebar does NOT have the .sidebar-left, 
    	//then target 
    	if ($('.sidebar').hasClass('sidebar-left')) {
    		$('.sidebar').removeClass('sidebar-left');
    	};
    
    });
})( jQuery );