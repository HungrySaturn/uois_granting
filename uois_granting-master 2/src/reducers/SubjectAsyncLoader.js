import { SubjectsQuery } from '../queries/SubjectsQuery';
import { useDispatch } from 'react-redux';
import { loadSubjects } from '../reducers/subjectsSlice1';
import { useState } from 'react';

export const SubjectsLoader = () => {
    // we use dispatch from react-redux
    const dispatch = useDispatch();

    // we will need to know if data is loaded or not
    let isDataLoaded = false;
    const [dataLoaded, setDataLoaded] = useState(isDataLoaded);

    // we will need to fetch the data
    const fetchData = () => {
        SubjectsQuery()
            .then(response => {
                response.json()
                    .then(data => {
                        // when we have the data, we will load the subjects
                        dispatch(loadSubjects(data.data.subjectPage));
                        // then, we will set data loaded to true
                        isDataLoaded = true;
                        setDataLoaded(isDataLoaded);
                    })
            })
            .catch(error => {
                console.error('There was an error fetching subject names:', error);
            });
    };

    
}



