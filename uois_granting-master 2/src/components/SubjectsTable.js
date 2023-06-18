import React from 'react';
import Table from 'react-bootstrap/Table';
import {DeleteSubjectButton} from './DeleteSubjectButton';
import {RemoveSubjectButton} from './RemoveSubjectButton';
import {SubjectEditNameButton} from './SubjectEditNameButton';
import {SubjectNameInput} from './SubjectNameInput';
import {SubjectActions} from '../reducers/grantingreducers';

export const SubjectsTable = ({subjects}) => {

    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
            
                    <th>Semesters</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject, index) => (
                    <tr key={subject.id}>
                        <td>{index + 1}</td>
                        <td>{subject.name} 
                        <SubjectEditNameButton subject={subject} actions={SubjectActions} />
                        <SubjectNameInput subject={subject} actions={SubjectActions}/>
                        </td>
                        
                        
                        <td>
                            {subject.semesters && subject.semesters.length > 0 && (
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Semester</th>
                                            <th>Credits</th>
                                            <th>Classification</th>
                                            <th>Topics</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subject.semesters.map((semester) => (
                                            <tr key={semester.id}>
                                                <td>{semester.order}</td>
                                                <td>{semester.credits}</td>
                                                <td>{semester.classificationType.name}</td>
                                                <td>
                                                    <ul>
                                                        {semester.topics && semester.topics.map((topic) => (
                                                            <li key={topic.id}>{topic.name}</li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </td>
                        <td>
                            <DeleteSubjectButton id={subject.id} />
                            <RemoveSubjectButton id={subject.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
};