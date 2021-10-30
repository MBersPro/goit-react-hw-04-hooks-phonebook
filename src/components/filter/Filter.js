import React from "react";
import PropTypes from "prop-types";

const Filter = ({setFilter, filter}) => {
    return (
        <input
            type="text"
            onChange={setFilter}
            value={filter}
        />
    );
}

Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.func.isRequired
}

export default Filter;
