import React, { useState } from "react";
import axios from "axios";

const schemaOptions = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

export default function SegmentPopup({ onClose }) {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [currentSchema, setCurrentSchema] = useState("");

  const handleAddSchema = () => {
    if (currentSchema && !selectedSchemas.includes(currentSchema)) {
      setSelectedSchemas([...selectedSchemas, currentSchema]);
      setCurrentSchema("");
    }
  };

  const handleSave = async () => {
    const formattedSchema = selectedSchemas.map((key) => {
      const label = schemaOptions.find((s) => s.value === key)?.label || "";
      return { [key]: label };
    });

    const payload = {
      segment_name: segmentName,
      schema: formattedSchema,
    };

    try {
      await axios.post("http://localhost:5000/api/save-segment", payload);
      alert("Segment saved successfully!");
      onClose();
    } catch (error) {
      console.error("Error saving segment:", error);
    }
  };

  const availableOptions = schemaOptions.filter(
    (s) => !selectedSchemas.includes(s.value)
  );

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Save Segment</h2>

        <input
          type="text"
          placeholder="Enter segment name"
          className="input"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />

        <div className="selected-schemas">
          {selectedSchemas.map((schema, index) => (
            <select
              key={index}
              className="select"
              value={schema}
              onChange={(e) => {
                const newSchemas = [...selectedSchemas];
                newSchemas[index] = e.target.value;
                setSelectedSchemas(newSchemas);
              }}
            >
              {schemaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
        </div>

        <div className="add-schema">
          <select
            value={currentSchema}
            onChange={(e) => setCurrentSchema(e.target.value)}
            className="select"
          >
            <option value="">Add schema to segment</option>
            {availableOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <p className="add-link" onClick={handleAddSchema}>
            +Add new schema
          </p>
        </div>

        <div className="buttons">
          <button onClick={onClose} className="btn cancel">
            Cancel
          </button>
          <button onClick={handleSave} className="btn save">
            Save the segment
          </button>
        </div>
      </div>
    </div>
  );
}
