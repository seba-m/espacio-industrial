import { useRef } from 'react';
import { Checkbox, Label } from 'flowbite-react';
import { Button } from "@material-tailwind/react";

export default function CustomCheckbox ({ options, isOpen }) {
    const checkboxesRefs = options.map(() => useRef(null));

    const handleClick = (index) => {
        if (checkboxesRefs[index] && checkboxesRefs[index].current) {
            checkboxesRefs[index].current.click();
        }
    };

    return (
        <div className="flex flex-col select-none">
            {options.map((option, index) => {
                if (!option?.name || !option?.id)
                    return;

                const name = option.name.toLowerCase();

                return <Button
                    key={option.id}
                    className={`flex flex-row items-center justify-between px-3 py-3 cursor-pointer ${isOpen ? 'bg-white' : 'bg-amber-300'}`}
                    color='white'
                    variant="text"
                    onClick={() => handleClick(index)}
                >
                    <Label className={`block font-medium capitalize truncate ${isOpen ? 'text-gray-800' : 'text-blue-800'}`}> {name} </Label>
                    <Checkbox ref={checkboxesRefs[index]} value={option.id} className={`${isOpen ? 'text-blue-500' : 'text-gray-800'} `} />
                </Button>
            })}
        </div>
    );
};
