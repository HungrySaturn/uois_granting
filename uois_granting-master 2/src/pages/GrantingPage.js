import Card from "react-bootstrap/Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { GrantingProgramCard } from 'components/GrantingProgramCard'
import { GrantingSubjectCard } from 'components/GrantingSubjectCard';


export const GrantingPage = ({program, subjects = [], actions}) => {
    console.log(program);
    console.log(subjects);
    return (
        <Card>

                <Tabs
                    defaultActiveKey="profile"
                    id="tabs"
                    className="mb-3"
                >
                    <Tab eventKey="Card0" title="Program">
                    <GrantingProgramCard program={program} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card1" title="Predmet">
                        
                    <GrantingSubjectCard subjects={subjects} actions={actions}/>
                         
                    </Tab>
                </Tabs>
        </Card>
    )
}