
//Exercise 2 Solution 

import React, { useState } from 'react';

const CharactersList = () => {
    const [characters, setCharacters] = useState([
        { id: 1, Name: 'The Grich', description: 'Green', lsVisible: false },
        { id: 2, Name: 'Ant-Man , description:'Ant sized man-tiny' , detailsVisible: false },
        { id: 3, Name: 'Mr.Scruge, description: 'Batmanvs Joker', detailsVisible: false },
        { id: 4, Name: 'Thor', description: 'Action tradgedy', detailsVisible: false },
  
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
