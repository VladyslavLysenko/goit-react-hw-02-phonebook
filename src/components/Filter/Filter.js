import React from 'react';
import PropTypes from 'prop-types';
import { Input,InnerWrap,SectionForm } from 'components/Form/Form.styled';
class Filter extends React.Component {
    
    handleInput = evt => {
        let filterValue = evt.currentTarget.value;
        this.props.onChange(filterValue)
    }


    render() {
        return (
            <InnerWrap>
                <SectionForm>
                <label>Find contacts by Name
                    <Input
                        value={this.props.value}
                        name="filter"
                        onChange={this.handleInput}
                        type="text"
                        placeholder="Search contact..." />
                    </label>
                </SectionForm>
            </InnerWrap>
        )
    }
}
  
export default Filter;
  
Filter.propTypes={
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}