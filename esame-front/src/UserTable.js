const UserTable = ({usersList}) => {
      return (
            <div className='TablePage'>
              <table className='Table'>
                <thead>
                  <tr>
                    <th colspan="2">USER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>id</td>
                    <td>role</td>
                    <td>hour 4 day</td>
                    <td>email</td>
                    <td>created At</td>
                  </tr>
                  {
                    usersList.map(elm => {
                      return(              
                        <tr id={elm.id}>
                          <td>{elm.id}</td>
                          <td>{elm.role}</td>
                          <td>{elm.hourPerDay}</td>
                          <td>{elm.email}</td>
                          <td>{elm.createdAt}</td>
                        </tr>
                      )}
                    )
                  }
                </tbody>
              </table>
            </div>
      )
  }


export default UserTable