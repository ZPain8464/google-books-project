import React, { Component } from 'react';

class AddFilter extends Component {

    state = {
        printType: "",
        availability: "",
    }

    selectPrintType = (printType) => {
        this.setState({
            printType: printType 
        })
        this.props.handlePrintType(printType)
    }

    selectAvailability = (availability) => {
        this.setState({
            availability: availability
        })
        this.props.handleAvailability(availability)
    }

    render() {
        return (
            <div className="AddFilter">
                <form className="AddFilter__Form">
                    <label htmlFor="PrintType">Print Type:</label>
                    <select 
                        id="PrintType" 
                        name="PrintType"
                        onChange={e => this.selectPrintType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <label htmlFor="Availability">Availability:</label>
                    <select 
                        id="BookType" 
                        name="BookType"
                        onChange={e => this.selectAvailability(e.target.value)}>
                        <option value="ebooks">All ebooks</option>
                        <option value="free-ebooks">Free</option>
                        <option value="paid-ebooks">Paid</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default AddFilter;