import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import CustomCheckbox from './CustomCheckbox';

const ExpansionPanel = ({ title, content, updateFilters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const selectedOptions = content.filter(option => option.selected);
        setSelectedCount(selectedOptions.length);
    }, [content]);

    if (!content) {
        return null;
    }

    return (
        <>
            <div
                className={`flex flex-row p-3 justify-between cursor-pointer items-center select-none`}
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-semibold">
                    {title}: {selectedCount === 0 ? 'Todas' : `${selectedCount} de ${content.length} seleccionadas`}
                </h3>
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
                ref={contentRef}
            >
                <div
                    className={`mt-0 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
                    ref={contentRef}
                >
                    <CustomCheckbox
                        options={content}
                        updateFilters={updateFilters}
                        updateSelectedCount={setSelectedCount}
                    />
                </div>
            </Transition>
        </>
    );
};

export default ExpansionPanel;
