# 🧩 Segment Manager Project

A full-stack application designed to allow users to **create and save custom segments** by selecting and organizing various schemas via a dedicated popup interface.

---

## 🛠 Technologies Used

- **Frontend:** **React**, **Vite**, **Axios** 🌐
- **Backend:** **Node.js**, **Express** ⚙️

---

## ⚡ Backend Setup (Node.js/Express)

The backend is responsible for handling API requests and persisting segment data to the database.

1.  **Clone the backend repository:**
    ```bash
    git clone [https://github.com/sajjapushyanth/backend](https://github.com/sajjapushyanth/backend)
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the backend server:**
    ```bash
    node server.js
    ```
    The server will start on: **`http://localhost:5000`**

    **API endpoint for saving a segment:** `POST /api/save-segment`

    **✅ IMPORTANT:** Ensure the backend server is running and accessible before attempting to use the frontend.

---

## ⚡ Frontend Setup (React/Vite)

The frontend provides the user interface for creating and saving segments.

1.  **Clone the frontend repository:**
    ```bash
    git clone <frontend-repo-url>
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The frontend will start on **`http://localhost:5173`** (or the port Vite assigns).

    The frontend uses **Axios** to communicate with the backend API at **`http://localhost:5000`**.

---

## 🎯 How to Use the Application

1.  Open the frontend in your browser: **`http://localhost:5173`**
2.  Click the button to open the **Save segment** popup.
3.  **Enter a Segment Name** in the designated input field.
4.  **Select Schemas:**
    * Choose an available schema (e.g., "First Name," "City") from the initial dropdown.
    * Click the **`+Add new schema`** button to append the selected schema to the segment list.
5.  **Adjust Schemas (Optional):** You can use the dropdowns for the selected schemas to change them if needed.
6.  Click **`Save the segment`** to send the segment data payload to the backend API (`POST /api/save-segment`) and store it.

---

## ⚡ Notes & Customization

* **Dependency:** The frontend requires the backend to be running on **`http://localhost:5000`** to successfully save a segment.
* **Schema Options:** The list of available schema options can be customized within the frontend component file, typically `SegmentPopup.js` or a related configuration file.
* **Data Structure:** Each saved segment stores a `segment_name` and a list of `schema` objects.
* **Backend Communication:** The frontend utilizes `axios.post` to communicate the segment data.

### ✅ Example Segment Payload

This is the JSON structure sent to the backend endpoint: `POST /api/save-segment`

```json
{
  "segment_name": "New Customers",
  "schema": [
    {"first_name": "First Name"},
    {"last_name": "Last Name"},
    {"city": "City"}
  ]
}
