import { useState } from "react";
import { Search, Loader2 } from "lucide-react";

function PincodeForm() {
  const [pincode, setPincode] = useState("");
  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const fetchPostOffices = async () => {
    if (pincode.length !== 6 || isNaN(pincode)) {
      setError("Enter a valid 6-digit Pincode.");
      return;
    }

    setLoading(true);
    setError("");
    setPostOffices([]);

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await res.json();

      if (data[0] && data[0].Status === "Success") {
        setPostOffices(data[0].PostOffice || []);
      } else {
        setError("No data found.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  const filteredOffices = postOffices.filter((office) =>
    office.Name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-full px-4">
      <h1 className="text-lg font-semibold my-4">Enter Pincode</h1>

      <input
        type="text"
        placeholder="Pincode"
        className="w-full border px-3 py-2 mb-2"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 flex items-center gap-2"
        onClick={fetchPostOffices}
        disabled={loading}
      >
        {loading && <Loader2 className="animate-spin h-4 w-4" />}
        {!loading && "Lookup"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {postOffices.length > 0 && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search Post Office"
            className="w-full border px-3 py-2 mb-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

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



