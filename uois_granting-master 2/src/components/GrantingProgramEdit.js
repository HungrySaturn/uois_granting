import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { ProgramNameInput } from './GrantingProgramNameInput';

export const GrantingProgramEdit = ({program, actions}) => {
    return (
        <div className="programdescription">
        <div className="basicinfo">
            <ProgramNameInput program={program} actions={actions}/>
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            <DropdownButton id="dropdown-basic-button" title={program.type.level.name}>
                                <Dropdown.Item href="#/action-1">bakalarsky</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">magisteersky</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">magistersky navazujci</Dropdown.Item>
                            </DropdownButton>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Forma studia
                        </td>
                        <td>
                            {program.type.form.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jazyk studia
                        </td>
                        <td>
                            {program.type.language.name}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}