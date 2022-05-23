const CommessTable = ({commessList}) => {


return (
              <div className='TablePage'>
                <table className='Table'>
                  <thead>
                    <tr>
                      <th colspan="2">COMMESSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>orderNumber</td>
                      <td>acronym</td>
                      <td>description</td>
                      <td>created at</td>
                      <td>end date</td>
                    </tr>
                    {
                      commessList.map(elm => {
                        return(              
                          <tr id={elm.orderNumber}>
                            <td>{elm.orderNumber}</td>
                            <td>{elm.acronym}</td>
                            <td>{elm.description}</td>
                            <td>{elm.createdAt}</td>
                            <td>{elm.endDate}</td>
                          </tr>
                        )}
                      )
                    }
                  </tbody>
                </table>
              </div>
        );
                  }

  export default CommessTable