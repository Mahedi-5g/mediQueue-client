"use client";

const FilterBar = ({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
}) => {
    return (
        <div>
            <div><p>Filter with date</p></div>
            <div className="flex gap-3">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="input input-bordered"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="input input-bordered"
                />
            </div>
        </div>

    );
};

export default FilterBar;