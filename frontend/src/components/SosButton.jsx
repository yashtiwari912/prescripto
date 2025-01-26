import React, { useState, useEffect } from "react";

const SosButton = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [countdown, setCountdown] = useState(0);

    function handleAmbulanceMessage() {
        if (isCancelled) {
            // Reset the state and clear the timeout if "Cancel" is clicked
            setIsCancelled(false);
            clearTimeout(timeoutId);
            setCountdown(0); // Reset countdown
        } else {
            // Start the countdown and timer
            setIsCancelled(true);
            setCountdown(5); // Set initial countdown value
            const id = setTimeout(() => {
                alert("Your Ambulance is on the way!");
                setIsCancelled(false);
                setCountdown(0); // Reset countdown after the alert
            }, 5000);
            setTimeoutId(id);
        }
    }

    // Update the countdown every second while it's active
    useEffect(() => {
        if (isCancelled && countdown > 0) {
            const interval = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval); // Clean up the interval on unmount or cancel
        }
    }, [isCancelled, countdown]);

    return (
        <div
            className="h-100 w-100 bg-red-600 rounded-full absolute bottom-0 m-6 cursor-pointer"
            onClick={handleAmbulanceMessage}
        >
            <p className="text-white p-6 hover:p-7 transition-all">
                {isCancelled ? `Cancel in ${countdown} s` : "SOS"}
            </p>
        </div>
    );
};

export default SosButton;



// import React, { useState } from "react";

// const SosButton = () => {
//   const [isCancelled, setIsCancelled] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);

//   function handleAmbulanceMessage() {
//     if (isCancelled) {
//       // Reset to default state when "Cancel" is clicked
//       setIsCancelled(false);
//       clearTimeout(timeoutId); // Clear the timeout to prevent the alert
//     } else {
//       // Set "Cancel" mode and start the timer
//       setIsCancelled(true);
//       const id = setTimeout(() => {
//         alert("Your Ambulance is on the way!");
//         setIsCancelled(false); // Reset the state after the alert
//       }, 5000);
//       setTimeoutId(id); // Save the timeout ID for later cancellation
//     }
//   }

//   return (
//     <div
//       className="h-100 w-100 bg-red-600 rounded-full absolute bottom-0 m-6 cursor-pointer"
//       onClick={handleAmbulanceMessage}
//     >
//       <p className="text-white p-6 hover:p-7 transition-all">
//         {isCancelled ? "Cancel" : "SOS"}
//       </p>
//     </div>
//   );
// };

// export default SosButton;
