import { useState } from 'react';

const dummyDataList = [
    'Apple',
    'Banana',
    'Cherry',
    'Grapes',
    'Orange',
    'Pineapple',
    'Strawberry',
    'Watermelon',
];

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = dummyDataList.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setShowSearch(true)}
                className="bg-blue-600 flex text-white ml-2 font-medium rounded-full text-sm px-4 py-2.5"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-3"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <span>Search</span>
            </button>
            {showSearch && (
                <div className="absolute mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2"
                        placeholder="Type to search..."
                    />
                    <ul className="divide-y divide-gray-300">
                        {filteredData.map((item) => (
                            <li key={item} className="p-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
