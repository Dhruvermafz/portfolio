import React, {useState, Fragment} from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import { CgAdd } from 'react-icons/cg'
import "../../styles/admin.css"
import AddUser from './forms/AddUser'
import EditUser from './forms/EditUser'

import UserTable from './UserTable'
const TeamMaster = () => {
  const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]
  const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

  return (
    <Container className="mt-5">
        <div className="team-heading">
        
        <strong className="purple">Team</strong>
  
        </div>
    <Row>
      <Col sm={4}>
      <div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
					
							<EditUser
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							
							<AddUser addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>

			</div>
      </Col>
   
    </Row>
   
  </Container>
    
  )
}

export default TeamMaster
