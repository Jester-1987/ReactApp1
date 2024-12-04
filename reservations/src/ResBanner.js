import React from "react";

function ResBanner ({ resItems })
{
    return (
        // Removed references to userName as it didn't make sense to have for this app 
        <h4 className="bg-info text-dark text-center p-2">
            Reservation Station!
            ({ resItems.filter(t => !t.done).length } reservations left. Book quickly!) 
        </h4>
    );
}

export default ResBanner;