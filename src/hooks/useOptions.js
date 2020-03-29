import React from 'react';

export const useOptions = (options = []) => {
    /**
     * @params options array
     * a list of objects containing information to generate option elements from
     *
     * {
     * amount: 0,
     * valueStart: 1,
     * }
     *
     * @return array
     * returns an array with the same length as the input
     *
     */

    const createOption = (value, displayValue = '') => {
        const key = (Math.random() * Math.random()).toString(16).substr(2, 9);
        return (
            <option value={value} key={key}>
                {displayValue ? displayValue : value}
            </option>
        );
    };

    const iterateOverOptions = () => {
        const optionResult = options.map(
            ({ amount = 0, valueStart = 1, data }) => {
                if (!amount) {
                    return Object.entries(data).map(([key, value]) => {
                        return createOption(key, value);
                    });
                }

                return Array(amount)
                    .fill(0)
                    .map((_, index) => {
                        return createOption(valueStart + index);
                    });
            },
        );

        return optionResult;
    };

    const optionsArray = iterateOverOptions();
    return optionsArray;
};
