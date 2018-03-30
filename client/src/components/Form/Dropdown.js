import React from "react";
export const Dropdown = props => (
    <div className="form-group">
        <label>Category</label>
        <select className="form-control">
            <option value="Community">Community</option>
            <option value="Shop">Shop Green</option>
            <option>Travel Green</option>
            <option>etc</option>
            <option>etc etc</option>
        </select>
    </div>
);