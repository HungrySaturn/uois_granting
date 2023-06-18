import Accordion from 'react-bootstrap/Accordion';

export const GrantingProgramDesc = ({program, actions}) => {
    return (
        <div className="programdescription">
        <div className="basicinfo">
            <h1>{program.name}</h1>
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            magisterský
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Forma studia
                        </td>
                        <td>
                            prezenční
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jazyk studia
                        </td>
                        <td>
                            čeština
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Studijni plan</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    )
}