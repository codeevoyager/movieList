import React, {useState} from "react";
import { Table, Pagination, Form } from "react-bootstrap";


function MovieTable({movies}){

    function duration(data){
        return data.category === "Movie" ? `${data.duration} min` : `${data.duration} episodes`;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const totalPages = Math.ceil(movies.length / pageSize);

    const handlePage = (page) => setCurrentPage(page);
    const handlePageSize = (event) => {
        setPageSize(Number(event.target.value));
        setCurrentPage(1);
    }

    const getPaginatedMovies = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return movies.slice(startIndex, endIndex);
    }

    return(
        <div>

            <Table bordered hover className='text-center' size='md'>
                    <thead className='table-warning'>
                    <tr>
                        <th>Content Name</th>
                        <th>Genre</th>
                        <th>Duration</th>
                        <th>Language</th>
                        <th>Category</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    
                    <tbody className="table-success">
                    {getPaginatedMovies().map(data=>(
                        <tr key={data.id}>
                        <td className="movie-title">
                            <div><img src={data.posterUrl} alt={data.title} className="movie-img"/></div>
                            <div>{data.title}</div>
                        </td>
                        <td>{data.genre[0]}</td>
                        <td>{duration(data)}</td>
                        <td>{data.lang}</td>
                        <td>{data.category}</td>
                        <td>{data.rating}</td>
                    </tr>
                    ))}
                    </tbody>
                </Table>

                <div className="d-flex justify-content-between align-items-center">
                    <Form.Control as="select" value={pageSize} onChange={handlePageSize} style={{ width: "50px", cursor: "pointer"}}> 
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </Form.Control>

                    <Pagination>
                    <Pagination.Item onClick={() => handlePage(1)}>First</Pagination.Item>
                    <Pagination.Prev onClick={() => handlePage(Math.max(currentPage - 1, 1))}/>
                        {[...Array(totalPages).keys()].map(num => (
                        <Pagination.Item key={num + 1} active={num + 1 === currentPage} onClick={() => handlePage(num + 1)}>
                        {num + 1}
                        </Pagination.Item>
                        ))}
                    <Pagination.Next onClick={() => handlePage(Math.min(currentPage + 1, totalPages))}/>
                    <Pagination.Item onClick={() => handlePage(totalPages)}>Last</Pagination.Item>
                    </Pagination>
                </div>
                
        </div>
    )
}

export default MovieTable;