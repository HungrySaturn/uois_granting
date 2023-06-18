import Card from "react-bootstrap/Card";
import ToggleButton from 'react-bootstrap/ToggleButton';

import { GrantingProgramDesc } from "components/GrantingProgramDesc";
import { GrantingProgramEdit } from "components/GrantingProgramEdit"
import { useState } from "react";
import { DeleteButton } from './DeleteButton';

export const GrantingProgramCard = ({program, actions}) => {
    const [edit, setEdit] = useState(false)

    const programDescription = {
        true: <GrantingProgramEdit program={program} actions={actions}/>,
        false: <GrantingProgramDesc program={program} actions={actions}/>
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Akreditovany program
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={edit}
                        value="1"
                        onChange={(e) => setEdit(e.currentTarget.checked)}>
                        Upravit
                    </ToggleButton>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {programDescription[edit]}
            </Card.Body>
        </Card>
    )
}