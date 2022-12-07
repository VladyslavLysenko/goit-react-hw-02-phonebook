import React from 'react';

class Filter extends React.Component {
    
    handleInput = evt => {
        evt.preventDefault();
        let filterValue = evt.currentTarget.value;
        this.props.onChange(filterValue)
        console.log(filterValue);
    }


    render() {
        return (
            <div>
                <label>Find contacts by Name
                    <input
                        name="filter"
                        onChange={this.handleInput}
                        type="text"
                        placeholder="Search contact..." />
                    </label>
            </div>
        )
    }
}
  
export default Filter;
  
