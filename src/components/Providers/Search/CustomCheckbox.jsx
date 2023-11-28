import { useState, useRef, useEffect } from 'react';
import { Checkbox, Label } from 'flowbite-react';
import { Button } from "@material-tailwind/react";

export default function CustomCheckbox({ options, updateFilters, updateSelectedCount }) {
    const [checkedItems, setCheckedItems] = useState(Array(options.length).fill(false));
    const checkboxesRefs = useRef([]);

    useEffect(() => {
        checkboxesRefs.current = checkboxesRefs.current.slice(0, options.length);
    }, [options.length]);

    const handleClick = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);

        const selectedOptions = options?.filter((option, i) => newCheckedItems[i]);

        updateFilters(selectedOptions);
        updateSelectedCount(selectedOptions.length);
    };

    return (
        <div className="flex flex-col select-none">
            {options.map((option, index) => {
                if (!option?.name || !option?.id)
                    return null;

                const name = option.name.toLowerCase();

                return (
                    <Button
                        key={option.id}
                        className={`flex flex-row items-center justify-between px-3 py-3 cursor-pointer ${checkedItems[index] ? 'bg-blue-300' : 'bg-white'
                            }`}
                        color='white'
                        variant="text"
                        onClick={() => handleClick(index)}
                    >
                        <Label className={`block font-medium capitalize truncate ${checkedItems[index] ? 'text-gray-800' : 'text-blue-800'
                            }`}>
                            {name}
                        </Label>
                        <Checkbox
                            ref={checkboxesRefs[index]}
                            value={option.id}
                            checked={checkedItems[index]}
                            className={`${checkedItems[index] ? 'text-blue-500' : 'text-gray-800'} pointer-events-none`}
                            onChange={() => handleClick(index)}
                        />
                    </Button>
                );
            })}
        </div>
    );
}
