const Button = ({ label,}) => {
  return (
    <button className="flex justify-center items-center gap-0
    px-7 py-4 border font-montserrat text-lg leading-none 
    bg-coral-red rounded-full text-white border-coral-red">
        {label}
        
        </button>
  )
}

export default Button