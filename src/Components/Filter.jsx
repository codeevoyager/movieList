import React, { useState, useEffect } from 'react'
import {Dropdown, Row, Col } from "react-bootstrap";
import movie from "../Data/movieData.json"


function Filter({onFilterChange}) {

  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const [category, setCategory] = useState([]);


  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');


  useEffect(() => {
    openDropdown();
  }, []);

  useEffect(() => {
      filterMovies();
  }, [selectedGenre, selectedLanguage, selectedCategory]);


  const openDropdown = ()=>{
      const genreSet = new Set();
      const languageSet = new Set();
      const categorySet = new Set();

    movie.forEach(movie =>{
      movie.genre.forEach(g => genreSet.add(g));
      languageSet.add(movie.lang);
      categorySet.add(movie.category);
    });

    setGenre([...genreSet]);
    setLanguage([...languageSet]);
    setCategory([...categorySet]);
  };

      const filterMovies = ()=> {
        const filtered = movie.filter(movie => {
          const genreMatch = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
          const languageMatch = selectedLanguage === 'All' || movie.lang === selectedLanguage;
          const categoryMatch = selectedCategory === 'All' || movie.category === selectedCategory;

          return genreMatch && languageMatch && categoryMatch;
      });

   onFilterChange(filtered);
      };

  return (
        <div className="filter">

        <Row className="mb-4 text-end">
            <Col>
                <Dropdown> 
                    <Dropdown.Toggle variant="primary" id="dropdown-basic"> Filter </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.ItemText>Filters Options</Dropdown.ItemText>
                        <Dropdown.Divider />

                        <Dropdown>
                          <Dropdown.Toggle as="div" className="dropdown-submenu p-1">Genre: {selectedGenre}</Dropdown.Toggle>
                          <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setSelectedGenre('All')}> All </Dropdown.Item>
                            {genre.map((genre, i) => (
                              <Dropdown.Item key={i} onClick={() => setSelectedGenre(genre)}>{genre}</Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Divider />

                        <Dropdown>
                          <Dropdown.Toggle as="div" className="dropdown-submenu p-1">Language: {selectedLanguage}</Dropdown.Toggle>
                          <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setSelectedLanguage('All')}> All </Dropdown.Item>
                            {language.map((lang, i) => (
                              <Dropdown.Item key={i} onClick={() => setSelectedLanguage(lang)}>{lang}</Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Divider />

                        <Dropdown>
                          <Dropdown.Toggle as="div" className="dropdown-submenu p-1">Category: {selectedCategory}</Dropdown.Toggle>
                          <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setSelectedCategory('All')}> All </Dropdown.Item>
                            {category.map((category, i) => (
                              <Dropdown.Item key={i} onClick={() => setSelectedCategory(category)}>{category}</Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Menu>
                 </Dropdown>
            </Col>
        </Row>

        </div>      
    )
}

export default Filter;