import React from "react";
export const Dropdown = props => (
    <div className="form-group">
        <label>Category</label>
        <select className="form-control">
            <option value="Community">Community</option>
            <option value="Shop">Shop Green</option>
            <option value="Travel">Travel Green</option>
            <option value="etc">etc</option>
            <option value="etc">etc etc</option>
        </select>
    </div>
);