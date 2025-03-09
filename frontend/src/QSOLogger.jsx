import React, { useState } from "react";

export default function QSOLogger() {
  const [formData, setFormData] = useState({
    callStartDate: "",
    callStartTime: "",
    callSign: "",
    initialReplyDate: "",
    initialReplyTime: "",
    signalReport: "",
    stationInfo: "",
    ragchewNotes: "",
    signOff: "",
    callEndDate: "",
    callEndTime: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the form data.
    console.log("QSO Logged:", formData);
    // Later, you can add API calls to send this data to your backend.
    // Reset the form after submission:
    setFormData({
      callStartDate: "",
      callStartTime: "",
      callSign: "",
      initialReplyDate: "",
      initialReplyTime: "",
      signalReport: "",
      stationInfo: "",
      ragchewNotes: "",
      signOff: "",
      callEndDate: "",
      callEndTime: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">QSO Logger</h1>
      
      <label className="block font-semibold">Call Start Date:</label>
      <input
        type="date"
        name="callStartDate"
        value={formData.callStartDate}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Call Start Time:</label>
      <input
        type="time"
        name="callStartTime"
        value={formData.callStartTime}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Other Operator's Call Sign:</label>
      <input
        type="text"
        name="callSign"
        value={formData.callSign}
        onChange={handleChange}
        placeholder="Enter call sign"
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Initial Reply Date:</label>
      <input
        type="date"
        name="initialReplyDate"
        value={formData.initialReplyDate}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Initial Reply Time:</label>
      <input
        type="time"
        name="initialReplyTime"
        value={formData.initialReplyTime}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Signal Report:</label>
      <textarea
        name="signalReport"
        value={formData.signalReport}
        onChange={handleChange}
        placeholder="Enter signal report"
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Station Info:</label>
      <textarea
        name="stationInfo"
        value={formData.stationInfo}
        onChange={handleChange}
        placeholder="Enter station info"
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Ragchew Notes:</label>
      <textarea
        name="ragchewNotes"
        value={formData.ragchewNotes}
        onChange={handleChange}
        placeholder="Enter ragchew notes"
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Sign Off:</label>
      <textarea
        name="signOff"
        value={formData.signOff}
        onChange={handleChange}
        placeholder="Enter sign off details"
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Call End Date:</label>
      <input
        type="date"
        name="callEndDate"
        value={formData.callEndDate}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block font-semibold">Call End Time:</label>
      <input
        type="time"
        name="callEndTime"
        value={formData.callEndTime}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Log QSO
      </button>
    </form>
  );
}
