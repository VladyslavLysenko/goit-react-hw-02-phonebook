import React from 'react';
import PropTypes from 'prop-types';
class Filter extends React.Component {
    
    handleInput = evt => {
        let filterValue = evt.currentTarget.value;
        this.props.onChange(filterValue)
    }


    render() {
        return (
            <div>
                <label>Find contacts by Name
                    <input
                        value={this.props.value}
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
  
Filter.propTypes={
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}