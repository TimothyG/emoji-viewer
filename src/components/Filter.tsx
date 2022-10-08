type Props = {
    onFilterChange: (value: string) => void;
}

export const Filter = ({
    onFilterChange
}: Props) => {

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onFilterChange(event.currentTarget.value);
    }

    return (
        <div id="filter-wrapper" className="px-2 mb-5">
            <input 
                type="text" 
                className="block bg-white placeholder:text-slate-400 first-letter:rounded-lg w-full border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm" 
                placeholder="Search" 
                onChange={onChange}
            />
        </div>
    );
}