import {useSelector, useDispatch} from 'react-redux';

import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';

import {selectFilters} from '../store/filters/filterSelectors';
import {clearFilterAC, removeFilterAC} from '../store/filters/filterActions';

const FilterPanel = () => {
    const dispatch = useDispatch()
    const currentFilters = useSelector(selectFilters)

    if (currentFilters.length === 0) {
        return null
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter => (
                        <Badge
                            key={filter}
                            variant="clearable"
                            onClear={()=> dispatch(removeFilterAC(filter))}
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button
                    className='link' onClick={()=>dispatch(clearFilterAC())}
                >Clear
                </button>
            </div>
        </Card>
    )
}

export {FilterPanel};