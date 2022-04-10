import {useSelector, useDispatch} from 'react-redux';
import {JobPosition} from './JobPosition';
import {selectVisiblePositions} from '../store/positions/positionSelectors';
import {addFilterAC} from '../store/filters/filterActions';
import {selectFilters} from '../store/filters/filterSelectors';

const JobList = () => {
    const dispatch = useDispatch()
    const currentFilters = useSelector(selectFilters)
    const positions = useSelector((state) =>
        selectVisiblePositions(state, currentFilters))

    const handleAddFilter = (filter) => {
        dispatch(addFilterAC(filter))
    }

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    {...item}
                    handleAddFilter={handleAddFilter}/>
            ))}
        </div>
    )
}

export {JobList};