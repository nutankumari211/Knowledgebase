const Input = ({ label, required, hint, error, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {hint && <span className="font-normal text-gray-500"> {hint}</span>}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input 
        className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
        {...props}
      />
    </div>
  );
};

export default Input;
