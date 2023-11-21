import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import CustomCheckbox from './CustomCheckbox';

const ExpansionPanel = ({ title, content }) => {
    if (!content) {
        return null;
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const selectedOptions = content.filter((option) => option.selected);
    const totalOptions = content.length;

    let optionsText;
    if (selectedOptions.length === 0) {
        optionsText = 'Todas';
    } else {
        optionsText = `${selectedOptions.length} de ${totalOptions} seleccionadas`;
    }

    return (
        <>
            <div
                className={`flex flex-row p-3 justify-between cursor-pointer items-center select-none`} 
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-semibold">{title}: {optionsText}</h3>
                <ChevronUpIcon
                    className={`${isOpen ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`}
                />
            </div>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {(ref) => (
                    <div
                        ref={ref}
                        className={`mt-0 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
                    >
                        <CustomCheckbox options={content} isOpen={isOpen} />
                    </div>
                )}
            </Transition>
        </>
    );
};

export default ExpansionPanel;
