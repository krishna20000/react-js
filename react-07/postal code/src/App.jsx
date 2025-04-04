import { useState } from "react";
import { Search, Loader2 } from "lucide-react"; // Import icons

function PincodeForm() {
  const [pincode, setPincode] = useState(""); // Store user input pincode
  const [postOffices, setPostOffices] = useState([]); // Store fetched post office data
  const [loading, setLoading] = useState(false); // Track loading state
  const [searchText, setSearchText] = useState(""); // Store search input
  const [error, setError] = useState(""); // Store error messages

  const fetchPostOffices = async () => {
    if (pincode.length !== 6 || isNaN(pincode)) { // Validate pincode
      setError("Enter a valid 6-digit Pincode.");
      return;
    }

    setLoading(true); // Show loading state
    setError(""); // Clear previous errors
    setPostOffices([]); // Reset data

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`); // Fetch data
      const data = await res.json();

      if (data[0] && data[0].Status === "Success") {
        setPostOffices(data[0].PostOffice || []); // Store post office data
      } else {
        setError("No data found."); // Show error if no data
      }
    } catch {
      setError("Something went wrong. Try again."); // Handle fetch errors
    }

    setLoading(false); // Hide loading state
  };

  // Filter post offices based on search input
  const filteredOffices = postOffices.filter((office) =>
    office.Name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-full px-4">
      <h1 className="text-lg font-semibold my-4">Enter Pincode</h1>

      {/* Input field for pincode */}
      <input
        type="text"
        placeholder="Pincode"
        className="w-full border px-3 py-2 mb-2"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      {/* Button to fetch post office data */}
      <button
        className="bg-black text-white px-4 py-2 flex items-center gap-2"
        onClick={fetchPostOffices}
        disabled={loading}
      >
        {loading && <Loader2 className="animate-spin h-4 w-4" />} {/* Show loader if loading */}
        {!loading && "Lookup"} {/* Show text if not loading */}
      </button>

      {/* Show error messages */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display post office data if available */}
      {postOffices.length > 0 && (
        <div className="mt-4">
          {/* Search bar for filtering post offices */}
          <input
            type="text"
            placeholder="Search Post Office"
            className="w-full border px-3 py-2 mb-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Display post office cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOffices.length > 0 &&
              filteredOffices.map((office, index) => (
                <div key={index} className="border p-3">
                  <p className="font-medium">Name: {office.Name}</p>
                  <p>Branch: {office.BranchType}</p>
                  <p>Delivery: {office.DeliveryStatus}</p>
                  <p>District: {office.District}</p>
                </div>
              ))}

            {filteredOffices.length === 0 && (
              <p className="text-gray-500">No matching post office found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PincodeForm;
