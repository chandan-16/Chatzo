type InputProps = {
    name: string;
    type?: string;
    onChange?:(e:any) => void;
    className?:string;
    onKeyDown?:(e: any) => void;
    disablead?: boolean;
    // value?: string;
}

export const Input = ({name, type, onChange, className, onKeyDown, disablead} : InputProps) => {
  return (
    <input 
    type={type}
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={`Enter ${name}`}
    disabled={disablead}
    className={`flex-1 bg-transparent placeholder-gray-300 border-2 rounded-lg px-3 py-1 border-gray-300 ${className}` } />            
  )
}
