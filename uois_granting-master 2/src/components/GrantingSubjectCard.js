import { SubjectsTable } from '../components/SubjectsTable';
import  ShowAddSubjectFormButton  from '../components/ShowAddSubjectFormButton';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import { SubjectsLoader } from '../reducers/SubjectAsyncLoader';

/**
 * A page component that renders the SubjectsTable and ShowAddSubjectFormButton components.
 * 
 * @returns {JSX.Element} The JSX element that represents the SubjectsPage component.
 */
export const GrantingSubjectCard = () => { 

    // Extract subjects from the Redux store using the useSelector hook
    const subjects = useSelector((state) => state.subjects)

    return(
        <div className='container'>
        <SubjectsLoader />
            <Card>
                <Card.Title className='sub'>Subjects</Card.Title>
                <Card.Body>
                    {/* Render the SubjectsTable component and pass subjects as a prop */}
                    <SubjectsTable subjects={subjects}/>
                </Card.Body>
            </Card>
            {/* Render the ShowAddSubjectFormButton component */}
            <ShowAddSubjectFormButton />
        </div>
    )
}
