/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    purge: {
        content: [
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            
            // Or if using `src` directory:
            "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        safelist: ['bg-orange-600', 'bg-yellow-600', 'bg-violet-600',
            'grid-cols-1', 'grid-cols-2', 'grid-cols-3',
            'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3',
            'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3',
        ],
    },
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        screens: {
            'desktop': {'max': '1535px'},
            'laptop': {'max': '1279px'},
            'xtab': {'max': '1023px'},
            'stab': {'max': '767px'},
            'mobile': {'max': '639px'},
        }
    },
    plugins: []
}
