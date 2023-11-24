import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside, useViewportSize } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import '../css/DropdownFilter.css';

function DropdownFilter(props) {

    const { width } = useViewportSize();
    const [opened, setOpened] = useState(width > 991 ?? true);
    const refPopup = useClickOutside(() => setOpened(false));

    const filter = props.filter;
    const handleItemClick = (filterCategory, clickedItem) => {
        const updatedFilter = filter.map((category) => {
            if (category === filterCategory) {
                const updatedItems = category.items.map((item) => {
                    if (item.name === clickedItem) {
                        return { ...item, active: !item.active };
                    }
                    return item;
                });
                const active = updatedItems.some((item) => item.active);
                return { ...category, items: updatedItems, active: active };
            }
            return category;
        });
        props.setFilter(updatedFilter);
    };

    const getItems = (filterCategory) =>
        filterCategory.items.map(({ name, active }) => (
            <li key={name}
                className={active ? "filter-item active" : "filter-item "}
                onClick={() => handleItemClick(filterCategory, name)}>
                <input className='filter-checkbox'
                    type="checkbox"
                    readOnly
                    checked={active} />
                <label>
                    {name}
                </label>
            </li>
        ));

    const filterPopup = filter.map((filterCategory) => (
        <li key={filterCategory.label} className='filter-category'>
            <h4>{filterCategory.label}</h4>
            <ul>{getItems(filterCategory)}</ul>
        </li>
    ));

    return (
        <section className='dropdown-filter d-none' ref={refPopup}>
            <h3 onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon icon={faSliders} size="xs" className='filter-icon' />
                Filters
            </h3>
            {opened && (
                <section className='dropdown-filter-popup'>
                    <ul>{filterPopup}</ul>
                </section>
            )}
        </section>
    );
}

DropdownFilter.propTypes = {
    filter: PropTypes.array,
    setFilter: PropTypes.func,
};

export default DropdownFilter;