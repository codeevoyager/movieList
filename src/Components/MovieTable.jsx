import React from "react";
import { Table } from "react-bootstrap";


function MovieTable({movies}){

    function duration(data){
        return data.category === "Movie" ? `${data.duration} min` : `${data.duration} episodes`;
    }

    return(
        <div>

            <Table bordered hover className='text-center' size='sm'>
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
                    {movies.map(data=>(
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
                
        </div>
    )
}

export default MovieTable;