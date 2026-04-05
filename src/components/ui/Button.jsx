const Button = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button', 
  variant = 'primary',
  disabled = false
}) => {
  const baseClasses = "flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors";
  
  const variants = {
    primary: "bg-primary hover:bg-[#4338ca] text-white",
    outline: "border border-gray-300 hover:bg-gray-50 text-gray-700",
    ghost: "hover:bg-gray-50 text-gray-600"
  };

  const interactiveClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button 
      type={type} 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${interactiveClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
