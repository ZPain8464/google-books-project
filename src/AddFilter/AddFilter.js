import React, { Component } from 'react';

class AddFilter extends Component {
    render() {
        return (
            <div className="AddFilter">
                <form className="AddFilter__Form">
                    <label htmlFor="PrintType">Print Type:</label>
                    <select id="PrintType" name="PrintType">
                        <option>All</option>
                    </select>
                    <label htmlFor="BookType">Book Type:</label>
                    <select id="BookType" name="BookType">
                        <option>No filter</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default AddFilter;