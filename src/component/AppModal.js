const AppModal = ({title, classes, children}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-1000">
            <div className="bg-black opacity-50 fixed inset-0"></div>
            <div className="bg-white w-1/3 rounded-lg p-6 shadow-lg relative overflow-y-auto">
                {/*<div>
                    <h2 className="text-xl font-bold mb-4">{title}</h2>
                </div>*/}
                {children}
            </div>
        </div>
    
    );
};

export default AppModal;
